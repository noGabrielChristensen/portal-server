// Example logic for handling profiles
const form = document.getElementById("create-profile");
const profilesList = document.getElementById("profiles-list");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;

  if (!name) return;

  // Example: insert into Supabase table "profiles"
  const { data, error } = await supabaseClient
    .from("profiles")
    .insert([{ name }]);

  if (error) {
    console.error("Error adding profile:", error);
  } else {
    console.log("Profile added:", data);
    fetchProfiles();
  }
});

async function fetchProfiles() {
  const { data, error } = await supabaseClient.from("profiles").select("*");
  if (error) {
    console.error("Error fetching profiles:", error);
  } else {
    profilesList.innerHTML = data.map((p) => `<p>${p.name}</p>`).join("");
  }
}

fetchProfiles();
