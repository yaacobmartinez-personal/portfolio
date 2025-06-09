<template>
  <div class="w-full p-[10px] lg:p-8 lg:pr-80 flex flex-col relative z-10">
    <div class="pt-[10px] lg:pt-[100px] pr-[10px] lg:pr-8 space-y-16">
      <div id="skills" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-6">Skills</h2>
        <div class="space-y-6 pl-6">
          <div>
            <h3 class="text-lg font-semibold mb-2">Frontend Development</h3>
            <p class="text-slate-400">
              Proficient in modern frontend frameworks including Vue.js and React, with extensive experience in building responsive and interactive user interfaces using Tailwind CSS and other modern CSS frameworks.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">Backend Development</h3>
            <p class="text-slate-400">
              Strong background in Node.js and Express for building scalable backend services, with additional experience in Python for data processing and API development.
            </p>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-2">DevOps & Tools</h3>
            <p class="text-slate-400">
              Experienced with Docker for containerization, AWS for cloud infrastructure, and implementing CI/CD pipelines for automated testing and deployment.
            </p>
          </div>
        </div>
      </div>

      <div id="experience" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'experience' }">
        <h2 class="text-3xl font-bold text-white mb-6">Experience</h2>
        <div class="space-y-6">
          <ExperienceCard
            v-for="(job, index) in experience.slice(0, 4)"
            :key="index"
            :title="job.title"
            :company="job.company"
            :period="job.period"
            :description="job.description"
            :technologies="job.technologies"
            :class="{ 'opacity-40 lg:blur-sm': isExperienceHovered && hoveredExperienceIndex !== index }"
            @hover="handleExperienceHover(index, $event)"
          />
        </div>
        <div class="mt-12">
          <NuxtLink 
            to="/experience" 
            class="inline-flex items-center text-slate-400 hover:text-slate-300 text-2xl font-medium transition-colors duration-300"
          >
            View Full Resume
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div id="works" class="pt-[50px]" :class="{ 'opacity-40': activeSection !== 'works' }">
        <h2 class="text-3xl font-bold text-white mb-8">Works</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="(work, index) in displayedWorks"
            :key="index"
            :title="work.title"
            :description="work.description"
            :technologies="work.technologies"
            :image="work.image"
            :class="{ 'opacity-40 lg:blur-sm': isWorkHovered && hoveredWorkIndex !== index }"
            @hover="handleWorkHover(index, $event)"
          />
        </div>
        <div class="mt-12">
          <NuxtLink 
            to="/works" 
            class="inline-flex items-center text-slate-400 hover:text-slate-300 text-2xl font-medium transition-colors duration-300"
          >
            View Project Archive
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </NuxtLink>
        </div>
      </div>

      <div id="contact" class="pb-[100px]" :class="{ 'opacity-40': activeSection !== 'contact' }">
        <h2 class="text-3xl font-bold text-white mb-8">Contact</h2>
        <div class="space-y-8">
          <div v-for="item in contactInfo" :key="item.type" class="flex items-center space-x-6">
            <div class="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-slate-300" fill="none" :viewBox="item.icon.viewBox" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.icon.path" />
              </svg>
            </div>
            <div>
              <p class="text-slate-400 text-lg">{{ item.label }}</p>
              <component 
                :is="item.link ? 'a' : 'p'"
                :href="item.link"
                :class="[
                  'text-white text-xl',
                  item.link ? 'hover:text-blue-400 transition-colors duration-300' : ''
                ]"
              >
                {{ item.value }}
              </component>
            </div>
          </div>

          <div class="mt-12 pt-8 border-t border-slate-800">
            <h3 class="text-2xl font-bold text-white mb-6">Send me a message</h3>
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label for="name" class="block text-slate-400 text-lg mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="formData.name"
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                >
              </div>
              <div>
                <label for="email" class="block text-slate-400 text-lg mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="formData.email"
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                >
              </div>
              <div>
                <label for="message" class="block text-slate-400 text-lg mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="formData.message"
                  rows="6"
                  class="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors duration-200"
                :disabled="isSubmitting"
              >
                <span v-if="!isSubmitting">Send Message</span>
                <span v-else class="flex items-center">
                  <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExperienceCard from './ExperienceCard.vue'
import WorkCard from './WorkCard.vue'
import { ref, computed, watch } from 'vue'
import { experience } from '../data/portfolio'
import { works } from '~/data/portfolio'
import { contactInfo } from '~/data/contact'

const props = defineProps<{
  activeSection?: string
}>()

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    // TODO: Implement form submission logic
    console.log('Form submitted:', formData.value)
    // Reset form after successful submission
    formData.value = {
      name: '',
      email: '',
      message: ''
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  } finally {
    isSubmitting.value = false
  }
}

const isExperienceHovered = ref(false)
const hoveredExperienceIndex = ref(-1)
const isWorkHovered = ref(false)
const hoveredWorkIndex = ref(-1)

const displayedWorks = computed(() => works.slice(0, 4))

const handleExperienceHover = (index: number, isHovered: boolean) => {
  isExperienceHovered.value = isHovered
  hoveredExperienceIndex.value = isHovered ? index : -1
}

const handleWorkHover = (index: number, isHovered: boolean) => {
  isWorkHovered.value = isHovered
  hoveredWorkIndex.value = isHovered ? index : -1
}

watch(() => props.activeSection, (newSection) => {
  const element = document.getElementById(newSection)
  if (element) {
    element.scrollIntoView()
  }
})
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style> 