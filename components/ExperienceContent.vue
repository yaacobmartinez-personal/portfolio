<template>
  <div class="space-y-24">
    <div class="pt-[20px] lg:pt-[40px]">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-6 lg:mb-12">Work Experience</h2>
      <a 
        href="https://drive.google.com/file/d/1Hc1xruO5RQvVGdJn1oJ0M0o7krMIxx4Z/view?usp=sharing" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="lg:hidden inline-flex items-center text-slate-400 hover:text-white transition-colors mb-2"
      >
        Download Resume
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" style="transform: rotate(-45deg);">
          <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </a>
      
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-400 text-lg">{{ error }}</p>
      </div>

      <!-- Mobile/Tablet Card View -->
      <div v-else class="lg:hidden space-y-6">
        <div v-for="exp in experience" :key="exp.id" 
          class="rounded-lg p-6 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer"
        >
          <div class="flex-1">
            <h3 class="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">{{ exp.title }}</h3>
            <p class="text-base lg:text-lg text-slate-300 mb-3 lg:mb-4">{{ exp.description }}</p>
            <div class="flex flex-col space-y-2 mb-4">
              <div class="flex items-center text-slate-300">
                <span class="font-medium mr-2">Company:</span>
                <span>{{ exp.company }}</span>
              </div>
              <div class="flex items-center text-slate-300">
                <span class="font-medium mr-2">Period:</span>
                <span>{{ exp.period }}</span>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="tech in exp.technologies.split(',').map((t: string) => t.trim())" :key="tech" class="px-2 py-1 lg:px-3 lg:py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs lg:text-sm">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Desktop Table View -->
      <div v-else class="hidden lg:block overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-slate-800">
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Role</th>
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Company</th>
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Period</th>
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="exp in experience" :key="exp.id" class="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
              <td class="py-8 px-6">
                <div>
                  <h3 class="text-xl font-medium text-white">{{ exp.title }}</h3>
                  <p class="text-base text-slate-400 mt-2">{{ exp.description }}</p>
                </div>
              </td>
              <td class="py-8 px-6">
                <span class="text-lg text-slate-400">{{ exp.company }}</span>
              </td>
              <td class="py-8 px-6">
                <span class="text-lg text-slate-400">{{ exp.period }}</span>
              </td>
              <td class="py-8 px-6">
                <div class="flex flex-wrap gap-3">
                  <span v-for="tech in exp.technologies.split(',').map((t: string) => t.trim())" :key="tech" class="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-full text-sm">{{ tech }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useExperienceStore } from '~/stores/experience'

const experienceStore = useExperienceStore()

// Use experience from the store
const experience = computed(() => experienceStore.experience)

// Access loading and error states from the store
const loading = computed(() => experienceStore.loading)
const error = computed(() => experienceStore.error)
</script> 