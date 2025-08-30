<template>
  <div class="w-full p-[10px] lg:p-8 lg:pr-80 flex flex-col relative z-10">
    <div class="pt-[10px] lg:pt-[100px] pr-[10px] lg:pr-8 space-y-16">
      <!-- Loading State -->
      <div v-if="loading" class="flex justify-center items-center py-12">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <p class="text-red-400 text-lg">{{ error }}</p>
      </div>

      <div v-else id="all" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'all' }">
        <h2 class="text-3xl font-bold text-white mb-8">All Works</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in allWorks"
            :key="work.id"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>

      <div v-else id="web" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'web' }">
        <h2 class="text-3xl font-bold text-white mb-8">Web Development</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in webWorks"
            :key="work.id"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>

      <div v-else id="mobile" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'mobile' }">
        <h2 class="text-3xl font-bold text-white mb-8">Mobile Apps</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in mobileWorks"
            :key="work.id"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>

      <div v-else id="design" class="pt-[10px] lg:pt-[50px]" :class="{ 'opacity-40': activeSection !== 'design' }">
        <h2 class="text-3xl font-bold text-white mb-8">Design</h2>
        <div class="space-y-6">
          <WorkCard
            v-for="work in designWorks"
            :key="work.id"
            v-bind="work"
            @hover="handleHover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWorksStore } from '~/stores/works'

defineProps<{
  activeSection: string
}>()

const worksStore = useWorksStore()

const handleHover = (isHovered: boolean) => {
  // Handle hover state if needed
}

// Use works from the store
const allWorks = computed(() => worksStore.works)
const webWorks = computed(() => worksStore.getWebWorks)
const mobileWorks = computed(() => worksStore.getMobileWorks)
const designWorks = computed(() => worksStore.getDesignWorks)

// Access loading and error states from the store
const loading = computed(() => worksStore.loading)
const error = computed(() => worksStore.error)
</script> 