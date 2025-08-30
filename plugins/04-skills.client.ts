export default defineNuxtPlugin(async () => {
  const { $supabaseReady } = useNuxtApp()
  
  // Wait for Supabase to be ready
  await $supabaseReady
  
  const skillsStore = useSkillsStore()
  
  // Fetch skills data when the app loads
  await skillsStore.fetchSkills()
})
