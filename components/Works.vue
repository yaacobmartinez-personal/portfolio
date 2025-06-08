<template>
  <section class="py-12 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Featured Works
        </h2>
        <p class="mt-4 text-lg text-gray-500">
          A selection of my recent projects and contributions
        </p>
      </div>

      <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Project 1 -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="relative h-48">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="E-commerce Platform"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">E-commerce Platform</h3>
            <p class="mt-2 text-sm text-gray-500">
              A modern e-commerce platform built with Nuxt 3 and Tailwind CSS
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Nuxt 3
              </span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Tailwind CSS
              </span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                TypeScript
              </span>
            </div>
            <div class="mt-6">
              <a
                href="#"
                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="relative h-48">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Task Management App"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">Task Management App</h3>
            <p class="mt-2 text-sm text-gray-500">
              A collaborative task management application with real-time updates
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Vue.js
              </span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Firebase
              </span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Tailwind CSS
              </span>
            </div>
            <div class="mt-6">
              <a
                href="#"
                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="relative h-48">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Portfolio Website"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="p-6">
            <h3 class="text-lg font-medium text-gray-900">Portfolio Website</h3>
            <p class="mt-2 text-sm text-gray-500">
              A modern portfolio website showcasing creative work and projects
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Nuxt 3
              </span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Tailwind CSS
              </span>
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                TypeScript
              </span>
            </div>
            <div class="mt-6">
              <a
                href="#"
                class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
              >
                View Project &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <NuxtLink
          to="/works"
          class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
        >
          View All Projects
        </NuxtLink>
      </div>
    </div>
  </section>
</template> 