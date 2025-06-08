<template>
  <div 
    class="rounded-lg p-6 hover:bg-slate-900/70 transition-all duration-300 flex flex-col lg:flex-row gap-6 cursor-pointer"
    @mouseenter="$emit('hover', true)"
    @mouseleave="$emit('hover', false)"
  >
    <div class="w-full lg:w-1/5 flex-shrink-0">
      <div class="aspect-video w-full rounded-lg overflow-hidden">
        <img :src="image" :alt="title" class="w-full h-full object-cover" />
      </div>
    </div>
    <div class="flex-1">
      <h3 class="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">{{ title }}</h3>
      <p class="text-base lg:text-lg text-slate-300 mb-3 lg:mb-4">{{ description }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tech in technologies" :key="tech" class="px-2 py-1 lg:px-3 lg:py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs lg:text-sm">{{ tech }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  technologies: string[];
  image: string;
}>();

defineEmits<{
  (e: 'hover', value: boolean): void
}>();
</script> 