// Public/script.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'YOUR_SUPABASE_URL'       // replace with your Supabase URL
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'  // replace with your Supabase anon key
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('Supabase client created:', supabase)

// Sign Up function
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  console.log('Sign Up Data:', data)
  console.log('Sign Up Error:', error)
}

// Login function
async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  console.log('Login Data:', data)
  console.log('Login Error:', error)
}

// Make functions globally accessible so buttons in HTML can use them
window.signUp = signUp
window.login = login
