export default defineNuxtPlugin(async () => {
  const { $supabaseReady } = useNuxtApp()
  
  // Wait for Supabase to be ready
  await $supabaseReady
  
  const experienceStore = useExperienceStore()
  
  // Fetch experience data when the app loads
  await experienceStore.fetchExperience()
})
