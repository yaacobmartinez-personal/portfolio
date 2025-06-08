<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Yaacob Martinez - Full Stack Web Developer',
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg'
    }
  ]
})

definePageMeta({
  layout: 'default'
})
</script>

<style>
html {
  font-family: 'Inter', sans-serif;
}

body {
  font-family: 'Inter', sans-serif;
  background-color: rgb(15 23 42); /* slate-900 */
  color: rgb(248 250 252); /* slate-50 */
}

a:focus-visible {
  outline: none;
}
</style>
