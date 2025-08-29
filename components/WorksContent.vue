<template>
  <div class="w-full">
    <div class="space-y-16">
      <div id="web" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-8">Web Development</h2>
        
        <!-- Mobile/Tablet Card View -->
        <div class="lg:hidden space-y-6">
          <div v-for="work in webWorks" :key="work.title" 
            class="rounded-lg p-6 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer"
          >
            <div class="flex-1">
              <h3 class="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">{{ work.title }}</h3>
              <p class="text-base lg:text-lg text-slate-300 mb-3 lg:mb-4">{{ work.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in work.technologies" :key="tech" class="px-2 py-1 lg:px-3 lg:py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs lg:text-sm">{{ tech }}</span>
              </div>
              <div class="flex gap-4">
                <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View project" title="View project">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M21 3l-9 9M15 3h6v6" />
                  </svg>
                </a>
                <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View repository" title="View repository">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 7.5c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Table View -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-slate-800">
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Project</th>
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Built with</th>
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Link</th>
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Repo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="work in webWorks" :key="work.title" class="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
                <td class="py-4 px-4">
                  <div>
                    <h3 class="text-lg font-medium text-white">{{ work.title }}</h3>
                    <p class="text-sm text-slate-400 mt-1">{{ work.description }}</p>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in work.technologies" :key="tech" class="px-2 py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs">{{ tech }}</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View project" title="View project">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M21 3l-9 9M15 3h6v6" />
                    </svg>
                  </a>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View repository" title="View repository">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 7.5c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="design" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-8">Design</h2>
        
        <!-- Mobile/Tablet Card View -->
        <div class="lg:hidden space-y-6">
          <div v-for="work in designWorks" :key="work.title" 
            class="rounded-lg p-6 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer"
          >
            <div class="flex-1">
              <h3 class="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">{{ work.title }}</h3>
              <p class="text-base lg:text-lg text-slate-300 mb-3 lg:mb-4">{{ work.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in work.technologies" :key="tech" class="px-2 py-1 lg:px-3 lg:py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs lg:text-sm">{{ tech }}</span>
              </div>
              <div class="flex gap-4">
                <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View project" title="View project">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M21 3l-9 9M15 3h6v6" />
                  </svg>
                </a>
                <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View repository" title="View repository">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 7.5c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Table View -->
        <div class="hidden lg:block overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr class="border-b border-slate-800">
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Project</th>
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Built with</th>
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Link</th>
                <th class="text-left py-4 px-4 text-slate-400 font-medium">Repo</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="work in designWorks" :key="work.title" class="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
                <td class="py-4 px-4">
                  <div>
                    <h3 class="text-lg font-medium text-white">{{ work.title }}</h3>
                    <p class="text-sm text-slate-400 mt-1">{{ work.description }}</p>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in work.technologies" :key="tech" class="px-2 py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs">{{ tech }}</span>
                  </div>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View project" title="View project">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5M21 3l-9 9M15 3h6v6" />
                    </svg>
                  </a>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors" aria-label="View repository" title="View repository">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5">
                      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.16-1.11-1.47-1.11-1.47-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.9 1.58 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0112 7.5c.85 0 1.71.12 2.51.35 1.9-1.32 2.74-1.05 2.74-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.82-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .26.18.58.69.48A10.04 10.04 0 0022 12.26C22 6.58 17.52 2 12 2z"/>
                    </svg>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { webWorks, mobileWorks, designWorks } from '~/data/portfolio'
</script> 