// Supabase client setup
// Replace with your actual keys (or load from Render env if backend manages auth)
const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_KEY = "your-public-anon-key";

const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
