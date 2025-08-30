import { defineStore } from 'pinia'
import { api } from '~/utils/supabase'

export interface Skill {
  id: number
  title: string
  description: string
  created_at: string
}

export const useSkillsStore = defineStore('skills', () => {
  const skills = ref<Skill[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Fetch skills from Supabase
  const fetchSkills = async () => {
    if (skills.value.length > 0) {
      return // Already loaded
    }
    
    loading.value = true
    error.value = null
    
    try {
      skills.value = await api.getSkills()
    } catch (err) {
      console.error('Error fetching skills:', err)
      error.value = 'Failed to fetch skills'
    } finally {
      loading.value = false
    }
  }

  return {
    skills,
    loading,
    error,
    fetchSkills
  }
})
