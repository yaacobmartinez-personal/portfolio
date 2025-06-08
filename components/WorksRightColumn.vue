<template>
  <div class="w-full p-[10px] lg:p-8 lg:pr-80 flex flex-col relative z-10">
    <div class="pt-[10px] lg:pt-[100px] pr-[10px] lg:pr-8 space-y-16">
      <div id="all" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'all' }">
        <h2 class="text-3xl font-bold text-white mb-8">All Works</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in allWorks"
            :key="work.title"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>

      <div id="web" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'web' }">
        <h2 class="text-3xl font-bold text-white mb-8">Web Development</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in webWorks"
            :key="work.title"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>

      <div id="mobile" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'mobile' }">
        <h2 class="text-3xl font-bold text-white mb-8">Mobile Apps</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in mobileWorks"
            :key="work.title"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>

      <div id="design" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'design' }">
        <h2 class="text-3xl font-bold text-white mb-8">Design</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in designWorks"
            :key="work.title"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  activeSection: string
}>()

const handleHover = (isHovered: boolean) => {
  // Handle hover state if needed
}

// Sample data - replace with your actual works
const allWorks = [
  {
    title: 'Project 1',
    description: 'A full-stack web application built with Vue.js and Node.js',
    image: '/images/project1.jpg',
    technologies: ['Vue.js', 'Node.js', 'MongoDB']
  },
  // Add more works...
]

const webWorks = [
  {
    title: 'Web Project 1',
    description: 'A responsive web application with modern design',
    image: '/images/web1.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS']
  },
  // Add more web works...
]

const mobileWorks = [
  {
    title: 'Mobile App 1',
    description: 'A cross-platform mobile application',
    image: '/images/mobile1.jpg',
    technologies: ['React Native', 'Firebase']
  },
  // Add more mobile works...
]

const designWorks = [
  {
    title: 'Design Project 1',
    description: 'UI/UX design for a modern web application',
    image: '/images/design1.jpg',
    technologies: ['Figma', 'Adobe XD']
  },
  // Add more design works...
]
</script> 