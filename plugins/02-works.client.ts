export default defineNuxtPlugin(async () => {
  const { $supabaseReady } = useNuxtApp()
  
  // Wait for Supabase to be ready
  await $supabaseReady
  
  const worksStore = useWorksStore()
  
  // Fetch works data when the app loads
  await worksStore.fetchWorks()
})
