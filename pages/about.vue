<template>
  <div class="bg-slate-950 relative overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.15),transparent_80%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.1),transparent_60%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x)_var(--mouse-y),rgba(59,130,246,0.05),transparent_40%)]"></div>
    <div class="mx-auto px-4 py-8 relative z-10 flex">
      <div class="flex w-full flex-col lg:flex-row">
        <div class="lg:fixed lg:w-1/2">
          <AboutLeftColumn :active-section="activeSection" @menu-click="handleMenuClick" />
        </div>
        <div class="w-full lg:w-1/2 lg:ml-[50%] overflow-y-auto scrollbar-hide">
          <AboutRightColumn :active-section="activeSection" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref('skills')

const updateMousePosition = (e: MouseEvent) => {
  document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`)
  document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`)
}

const handleMenuClick = (section: string) => {
  activeSection.value = section
  const element = document.getElementById(section)
  if (element) {
    const offset = 150 // Same as scroll offset
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

const updateActiveSection = () => {
  const sections = ['skills', 'experience', 'works', 'contact']
  const scrollPosition = window.scrollY + 150 // Offset for header

  for (const section of sections) {
    const element = document.getElementById(section)
    if (element) {
      const rect = element.getBoundingClientRect()
      const offsetTop = rect.top + window.scrollY
      const offsetBottom = offsetTop + rect.height

      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        activeSection.value = section
        break
      }
    }
  }
}

onMounted(() => {
  window.addEventListener('mousemove', updateMousePosition)
  window.addEventListener('scroll', updateActiveSection)
  updateActiveSection() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('mousemove', updateMousePosition)
  window.removeEventListener('scroll', updateActiveSection)
})

const skills = [
  'Vue.js',
  'React',
  'TypeScript',
  'Node.js',
  'Python',
  'PHP',
  'MySQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Git',
  'Tailwind CSS'
]
</script>

<style>
.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;  /* Chrome, Safari and Opera */
}
</style> 