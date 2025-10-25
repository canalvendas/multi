import { createClient } from '@supabase/supabase-js';

// Usando variáveis de ambiente para maior segurança
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase config:', { SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY });

// Verificação de variáveis de ambiente
if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  console.error('As variáveis de ambiente do Supabase não estão configuradas corretamente');
  console.error('VITE_SUPABASE_URL:', SUPABASE_URL);
  console.error('VITE_SUPABASE_ANON_KEY:', SUPABASE_PUBLISHABLE_KEY);
}

try {
  const supabase = createClient(
    SUPABASE_URL || 'https://missing.supabase.co', 
    SUPABASE_PUBLISHABLE_KEY || 'missing-key',
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      }
    }
  );
  
  export { supabase };
} catch (e) {
  console.error('Erro ao inicializar o cliente Supabase:', e);
  // Fallback para evitar quebras
  const mockSupabase = {
    auth: {
      onAuthStateChange: () => ({ data: { subscription: { unsubscribe: () => {} } } }),
      getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      signOut: () => Promise.resolve({ error: null })
    }
  };
  
  export { mockSupabase as supabase };
}