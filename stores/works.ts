import { defineStore } from 'pinia'
import { api } from '~/utils/supabase'
import { getWebWorks as filterWebWorks, getMobileWorks as filterMobileWorks, getDesignWorks as filterDesignWorks, type Work } from '~/utils/worksFilter'

export const useWorksStore = defineStore('works', () => {
  const works = ref<Work[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  // Fetch works from Supabase
  const fetchWorks = async () => {
    if (works.value.length > 0) {
      return // Already loaded
    }
    
    loading.value = true
    error.value = null
    
    try {
      works.value = await api.getWorks()
    } catch (err) {
      console.error('Error fetching works:', err)
      error.value = 'Failed to fetch works'
    } finally {
      loading.value = false
    }
  }

  // Getter for filtered works (using the utility functions)
  const getWebWorks = computed(() => filterWebWorks(works.value))
  const getMobileWorks = computed(() => filterMobileWorks(works.value))
  const getDesignWorks = computed(() => filterDesignWorks(works.value))

  return {
    works,
    loading,
    error,
    fetchWorks,
    getWebWorks,
    getMobileWorks,
    getDesignWorks
  }
})
