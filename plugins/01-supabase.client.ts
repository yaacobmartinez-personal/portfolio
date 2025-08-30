import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const supabase = createClient(
    config.public.supabaseUrl as string,
    config.public.supabaseAnonKey as string
  )

  // Create a promise that resolves when Supabase is ready
  const supabaseReady = Promise.resolve(supabase)

  return {
    provide: {
      supabase,
      supabaseReady
    }
  }
})
