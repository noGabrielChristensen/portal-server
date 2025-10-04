import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'YOUR_SUPABASE_URL'       // replace this
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'  // replace this
const supabase = createClient(supabaseUrl, supabaseKey)

// Sign Up
async function signUp(email, password) {
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) {
    alert('Sign Up Error: ' + error.message)
  } else {
    alert('Sign Up Success! Check Supabase profiles table.')
  }
}

// Login
async function login(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password })
  if (error) {
    alert('Login Error: ' + error.message)
  } else {
    alert('Login Success!')
  }
}

// Connect buttons
window.signUp = signUp
window.login = login
