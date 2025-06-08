<template>
  <div class="w-full p-[10px] lg:p-8 lg:pr-80 flex flex-col relative z-10">
    <div class="pt-[10px] lg:pt-[100px] pr-[10px] lg:pr-8 space-y-16">
      <div id="about" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-8">About Me</h2>
        <p class="text-slate-400 leading-relaxed">
          {{ aboutMe }}
        </p>
      </div>

      <AboutRightColumn :active-section="activeSection" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { aboutMe } from '~/data/portfolio'

const props = withDefaults(defineProps<{
  activeSection: string
}>(), {
  activeSection: 'skills'
})
</script> 