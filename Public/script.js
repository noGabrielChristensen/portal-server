import { createClient } from '@supabase/supabase-js';

// Initialize Supabase
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

// ----------- Auth / Login -----------
export async function login() {
  const { data, error } = await supabase.auth.signInWithOAuth({ provider: 'github' });
  if(error) console.error(error);
}

// Fetch profile from Supabase
async function fetchProfile(userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();
  if(error) return null;
  return data;
}

// Redirect user after login based on admin flag
async function handleRedirect(userId) {
  const profile = await fetchProfile(userId);
  if(profile?.is_admin) window.location.href = '/admin.html';
  else window.location.href = '/feed.html';
}

// ----------- Posts / Feed -----------

// Fetch posts from database
export async function fetchPosts() {
  const { data } = await supabase
    .from('posts')
    .select('*, profiles(username)')
    .order('created_at', { ascending: false });
  return data || [];
}

// Create a new post
export async function createPost(userId, content) {
  const { data, error } = await supabase
    .from('posts')
    .insert([{ user_id: userId, content }]);
  if(error) console.error(error);
  else console.log('Post created:', data);
}

// Submit post from textarea
export async function submitPost() {
  const content = document.getElementById('newPost').value;
  const user = supabase.auth.user();
  if(!user) return alert('Login first');
  await createPost(user.id, content);
  document.getElementById('newPost').value = '';
  displayPosts();
}

// Display posts in the feed
export async function displayPosts() {
  const posts = await fetchPosts();
  const container = document.getElementById('posts');
  container.innerHTML = '';
  posts.forEach(p => {
    container.innerHTML += `<div><strong>${p.profiles.username}:</strong> ${p.content}</div>`;
  });
}

// ----------- Admin Controls -----------

export async function deleteAllPosts() {
  const user = supabase.auth.user();
  const profile = await fetchProfile(user.id);
  if(!profile?.is_admin) return alert('Forbidden');
  await supabase.from('posts').delete().neq('id', ''); // delete all posts
  displayPosts();
}

export function manageUsers() {
  alert('Admin user management placeholder');
}

// ----------- On Page Load -----------

window.onload = async () => {
  const user = supabase.auth.user();
  if(user) {
    const profile = await fetchProfile(user.id);
    if(profile?.is_admin) window.location.href = '/admin.html';
    else window.location.href = '/feed.html';
  }
};
