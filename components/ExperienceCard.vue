<template>
  <div 
    class="rounded-lg p-6 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer"
    @mouseenter="$emit('hover', true)"
    @mouseleave="$emit('hover', false)"
  >
    <h3 class="text-xl font-semibold text-white mb-2">{{ title }}</h3>
    <p class="text-slate-400 mb-3">{{ company }} • {{ period }}</p>
    <p class="text-slate-300 mb-4">{{ description }}</p>
    <div class="flex flex-wrap gap-2">
      <span v-for="tech in technologies.split(',').map((t: string) => t.trim())" :key="tech" class="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm">{{ tech }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string;
}

defineProps<ExperienceCardProps>();
defineEmits<{
  (e: 'hover', value: boolean): void
}>();
</script> 