import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';

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
  session: any | null;
  user: any | null;
  profile: Profile | null;
  loading: boolean;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<any | null>(null);
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProfile = useCallback(async (currentUser: any) => {
    if (!supabase) return;
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('id, first_name, last_name, specialty, crp, phone, address, avatar_url')
        .eq('id', currentUser.id)
        .single();

      if (error) {
        console.error('Error fetching profile:', error);
        setProfile(null);
      } else if (data) {
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
    } catch (error) {
      console.error('Unexpected error fetching profile:', error);
      setProfile(null);
    }
  }, []);

  const refreshProfile = useCallback(async () => {
    if (user) {
      await fetchProfile(user);
    }
  }, [user, fetchProfile]);

  useEffect(() => {
    if (!supabase) {
      setLoading(false);
      return;
    }

    let mounted = true;

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!mounted) return;
      
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

    // Verificar sessão atual
    const checkSession = async () => {
      try {
        if (!mounted) return;
        
        const { data: { session: currentSession } } = await supabase.auth.getSession();
        if (currentSession && mounted) {
          setSession(currentSession);
          setUser(currentSession.user);
          await fetchProfile(currentSession.user);
        }
      } catch (error) {
        console.error('Error checking session:', error);
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    checkSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [fetchProfile]);

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