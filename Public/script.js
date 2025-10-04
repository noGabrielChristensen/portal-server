// script.js
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// 🔑 Your Supabase keys
const SUPABASE_URL = "https://hrkwjmdaalvxkuxbqxvu.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhya3dqbWRhYWx2eGt1eGJxeHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODQ0MDIsImV4cCI6MjA3NDY2MDQwMn0.jxpqqeeoK--xl2nTkrQVWCKZYoqs5Dpu8AeMjPbbcpE";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// --- Signup ---
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) {
    alert("Signup failed: " + error.message);
  } else {
    alert("Signup success! Check your email for confirmation.");
  }
}

// --- Login ---
async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) {
    alert("Login failed: " + error.message);
  } else {
    alert("Login success! Welcome " + data.user.email);
  }
}

// --- Delete user (admin only via Supabase dashboard for now) ---

// Attach to buttons on your HTML
window.signUp = signUp;
window.login = login;
