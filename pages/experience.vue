<template>
  <div class="bg-slate-950 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15),transparent_80%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.1),transparent_60%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.05),transparent_40%)]"></div>
    <div class="container mx-auto px-4 pt-16 pb-8 relative z-10">
      <div class="w-full">
        <div class="flex justify-between items-center mb-4">
          <NuxtLink to="/about" class="inline-flex items-center text-xl lg:text-2xl text-white hover:text-gray-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
            </svg>
            Yaacob Martinez
          </NuxtLink>
          <a 
            href="https://drive.google.com/file/d/1Hc1xruO5RQvVGdJn1oJ0M0o7krMIxx4Z/view?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="hidden lg:inline-flex items-center text-slate-400 hover:text-white transition-colors"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" style="transform: rotate(-45deg);">
              <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        <ExperienceContent />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const updateMousePosition = (e: MouseEvent) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
})
</script> 