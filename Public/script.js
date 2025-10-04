import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// ✅ Replace these with your real Supabase credentials
const supabaseUrl = 'https://hrkwjmdaalvxkuxbqxvu.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhya3dqbWRhYWx2eGt1eGJxeHZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwODQ0MDIsImV4cCI6MjA3NDY2MDQwMn0.jxpqqeeoK--xl2nTkrQVWCKZYoqs5Dpu8AeMjPbbcpE';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);
console.log("Supabase client initialized:", supabaseUrl);

// 🔥 SIGN-UP
document.getElementById('signup-btn').addEventListener('click', async () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      alert("Sign-up error: " + error.message);
    } else {
      alert("Sign-up successful! Check your email to confirm.");
    }
  } catch (err) {
    alert("Unexpected error: " + err.message);
  }
});

// 🔥 LOGIN
document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert("Login error: " + error.message);
    } else {
      alert("Login successful!");
    }
  } catch (err) {
    alert("Unexpected error: " + err.message);
  }
});
