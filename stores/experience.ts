import { defineStore } from 'pinia'
import { api } from '~/utils/supabase'

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string
  technologies: string
  created_at: string
}

export const useExperienceStore = defineStore('experience', () => {
  const experience = ref<Experience[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Fetch experience from Supabase
  const fetchExperience = async () => {
    if (experience.value.length > 0) {
      return // Already loaded
    }
    
    loading.value = true
    error.value = null
    
    try {
      experience.value = await api.getExperience()
    } catch (err) {
      console.error('Error fetching experience:', err)
      error.value = 'Failed to fetch experience'
    } finally {
      loading.value = false
    }
  }

  return {
    experience,
    loading,
    error,
    fetchExperience
  }
})
