import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// 🔥 Replace these with your actual Supabase project credentials
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase client initialized:", supabaseUrl);

// Sign-up
document.getElementById('signup-btn').addEventListener('click', async () => {
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  console.log("Attempting sign-up with:", email);

  try {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) {
      console.error("Sign-up error:", error);
      alert("Sign-up error: " + error.message);
    } else {
      console.log("Sign-up successful:", data);
      alert("Sign-up successful! Check your email to confirm.");
    }
  } catch (err) {
    console.error("Unexpected error during sign-up:", err);
    alert("Unexpected error: " + err.message);
  }
});

// Login
document.getElementById('login-btn').addEventListener('click', async () => {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  console.log("Attempting login with:", email);

  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      console.error("Login error:", error);
      alert("Login error: " + error.message);
    } else {
      console.log("Login successful:", data);
      alert("Login successful!");
    }
  } catch (err) {
    console.error("Unexpected error during login:", err);
    alert("Unexpected error: " + err.message);
  }
});
