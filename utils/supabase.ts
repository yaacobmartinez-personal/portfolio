import type { SupabaseClient } from '@supabase/supabase-js'

// Get the Supabase client from the Nuxt plugin
export const getSupabase = (): SupabaseClient => {
  const { $supabase } = useNuxtApp()
  
  if (!$supabase) {
    throw new Error('Supabase client is not available. Make sure the supabase plugin is loaded.')
  }
  
  return $supabase
}

// Example helper functions for common Supabase operations
export const api = {
  // Get all experience
  async getExperience() {
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from('experience')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) throw error
    return data
  },
  // Get all works
  async getWorks() {
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from('works')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) throw error
    return data
  },

  // Get all skills
  async getSkills() {
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from('skills')
      .select('*')
      .order('created_at', { ascending: true })

    if (error) throw error
    return data
  },

}
