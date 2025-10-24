import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Usando variáveis de ambiente para maior segurança
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificação de variáveis de ambiente
let supabase: SupabaseClient | null = null;
let supabaseError: string | null = null;

if (!SUPABASE_URL || !SUPABASE_PUBLISHABLE_KEY) {
  supabaseError = 'As variáveis de ambiente do Supabase (VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY) não estão configuradas. O aplicativo não pode se conectar ao banco de dados. Por favor, verifique as instruções no arquivo README.md e configure as variáveis no seu ambiente de deploy (Vercel).';
  console.error(supabaseError);
} else {
  try {
    supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
  } catch (e) {
    supabaseError = `Erro ao inicializar o cliente Supabase: ${e instanceof Error ? e.message : String(e)}`;
    console.error(supabaseError);
  }
}

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";
export { supabase, supabaseError };