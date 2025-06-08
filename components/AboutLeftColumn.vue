<template>
  <div class="w-full p-8 lg:pl-40 flex flex-col relative z-10 lg:h-screen lg:overflow-hidden">
    <div class="pt-[50px] lg:pt-[150px] flex flex-col lg:h-full">
      <div class="flex-1">
        <NuxtLink to="/" class="block focus:outline-none">
          <h1 class="text-5xl lg:text-7xl font-bold text-slate-200 mb-6 hover:text-white transition-colors duration-300">Yaacob Martinez</h1>
        </NuxtLink>
        <p class="text-2xl lg:text-3xl text-slate-300 mb-4">Full Stack Web Developer</p>
        <p class="text-base lg:text-lg text-slate-400 mb-8 w-full">Passionate about creating elegant solutions to complex problems.<br>Specializing in modern web technologies and user-centric design.</p>
        
        <ul class="flex flex-col space-y-8 my-12 lg:my-24">
          <li class="group">
            <a 
              href="#skills" 
              class="flex items-center text-slate-400 hover:text-white transition-colors duration-300 text-lg font-semibold uppercase tracking-wider"
              :class="{ 'text-white': activeSection === 'skills' }"
              @click.prevent="$emit('menu-click', 'skills')"
            >
              <span 
                class="h-[1px] bg-slate-400 mr-4 transition-all duration-300"
                :class="activeSection === 'skills' ? 'w-24 bg-white' : 'w-8 group-hover:w-24'"
              ></span>
              Skills
            </a>
          </li>
          <li class="group">
            <a 
              href="#experience" 
              class="flex items-center text-slate-400 hover:text-white transition-colors duration-300 text-lg font-semibold uppercase tracking-wider"
              :class="{ 'text-white': activeSection === 'experience' }"
              @click.prevent="$emit('menu-click', 'experience')"
            >
              <span 
                class="h-[1px] bg-slate-400 mr-4 transition-all duration-300"
                :class="activeSection === 'experience' ? 'w-24 bg-white' : 'w-8 group-hover:w-24'"
              ></span>
              Experience
            </a>
          </li>
          <li class="group">
            <a 
              href="#works" 
              class="flex items-center text-slate-400 hover:text-white transition-colors duration-300 text-lg font-semibold uppercase tracking-wider"
              :class="{ 'text-white': activeSection === 'works' }"
              @click.prevent="$emit('menu-click', 'works')"
            >
              <span 
                class="h-[1px] bg-slate-400 mr-4 transition-all duration-300"
                :class="activeSection === 'works' ? 'w-24 bg-white' : 'w-8 group-hover:w-24'"
              ></span>
              Works
            </a>
          </li>
          <li class="group">
            <a 
              href="#contact" 
              class="flex items-center text-slate-400 hover:text-white transition-colors duration-300 text-lg font-semibold uppercase tracking-wider"
              :class="{ 'text-white': activeSection === 'contact' }"
              @click.prevent="$emit('menu-click', 'contact')"
            >
              <span 
                class="h-[1px] bg-slate-400 mr-4 transition-all duration-300"
                :class="activeSection === 'contact' ? 'w-24 bg-white' : 'w-8 group-hover:w-24'"
              ></span>
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div class="flex space-x-6 pb-8">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="text-slate-400 hover:text-white"
        >
          <span class="sr-only">{{ social.name }}</span>
          <svg class="h-8 w-8" fill="currentColor" :viewBox="social.icon.viewBox">
            <path :d="social.icon.path" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/social'

const props = withDefaults(defineProps<{
  activeSection: string
}>(), {
  activeSection: 'skills'
})

const emit = defineEmits<{
  (e: 'menu-click', section: string): void
}>()

const setActiveSection = (section: string) => {
  emit('menu-click', section)
}
</script>

<style scoped>
a:focus {
  outline: none;
}
</style> 