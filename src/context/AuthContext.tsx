"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { Session, User } from '@supabase/supabase-js';
import { supabase, supabaseError } from '@/integrations/supabase/client';
import { AlertCircle } from 'lucide-react';

export interface Profile {
  id: string;
  firstName: string | null;
  lastName: string | null;
  specialty: string | null;
  crp: string | null;
  phone: string | null;
  address: string | null;
  avatarUrl: string | null;
}

interface AuthContextType {
  session: Session | null;
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const SupabaseErrorDisplay = ({ error }: { error: string }) => (
  <div className="flex items-center justify-center h-screen bg-destructive/10 text-destructive p-6">
    <div className="text-center max-w-2xl">
      <AlertCircle className="mx-auto h-12 w-12 mb-4" />
      <h1 className="text-2xl font-bold mb-2">Erro de Configuração</h1>
      <p className="text-base">{error}</p>
    </div>
  </div>
);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = async (user: User) => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from('profiles')
      .select('id, first_name, last_name, specialty, crp, phone, address, avatar_url')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
      setProfile(null);
    }
    if (data) {
      setProfile({
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        specialty: data.specialty,
        crp: data.crp,
        phone: data.phone,
        address: data.address,
        avatarUrl: data.avatar_url,
      });
    }
  };

  const refreshProfile = async () => {
    if (user) {
      await fetchProfile(user);
    }
  };

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setSession(session);
      const currentUser = session?.user ?? null;
      setUser(currentUser);

      if (currentUser) {
        await fetchProfile(currentUser);
      } else {
        setProfile(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  if (supabaseError) {
    return <SupabaseErrorDisplay error={supabaseError} />;
  }

  const value = {
    session,
    user,
    profile,
    loading,
    refreshProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
};