<template>
  <div class="h-screen lg:overflow-hidden">
    <div class="h-full flex flex-col justify-between p-8 lg:p-16">
      <div>
        <NuxtLink to="/" class="text-2xl lg:text-3xl font-bold text-white mb-8 lg:mb-16 block focus:outline-none">
          Yaacob Martinez
        </NuxtLink>
        <nav class="space-y-4 lg:space-y-6">
          <a 
            href="#all" 
            class="block text-lg lg:text-xl text-white hover:text-gray-300 transition-colors"
            :class="{ 'opacity-40': activeSection !== 'all' }"
            @click.prevent="$emit('menu-click', 'all')"
          >
            All Works
          </a>
          <a 
            href="#web" 
            class="block text-lg lg:text-xl text-white hover:text-gray-300 transition-colors"
            :class="{ 'opacity-40': activeSection !== 'web' }"
            @click.prevent="$emit('menu-click', 'web')"
          >
            Web Development
          </a>
          <a 
            href="#mobile" 
            class="block text-lg lg:text-xl text-white hover:text-gray-300 transition-colors"
            :class="{ 'opacity-40': activeSection !== 'mobile' }"
            @click.prevent="$emit('menu-click', 'mobile')"
          >
            Mobile Apps
          </a>
          <a 
            href="#design" 
            class="block text-lg lg:text-xl text-white hover:text-gray-300 transition-colors"
            :class="{ 'opacity-40': activeSection !== 'design' }"
            @click.prevent="$emit('menu-click', 'design')"
          >
            Design
          </a>
        </nav>
      </div>
      <div class="flex space-x-4">
        <a 
          v-for="social in socialLinks" 
          :key="social.name"
          :href="social.url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="text-gray-400 hover:text-white transition-colors"
        >
          <span class="sr-only">{{ social.name }}</span>
          <svg class="h-6 w-6" :viewBox="social.icon.viewBox" fill="currentColor">
            <path :d="social.icon.path" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socialLinks } from '~/data/social'

defineProps<{
  activeSection: string
}>()

defineEmits<{
  (e: 'menu-click', section: string): void
}>()
</script>

<style scoped>
a:focus {
  outline: none;
}
</style> 