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
                <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                  View Project
                </a>
                <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                  View Repo
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
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                    View Project
                  </a>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                    View Repo
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="mobile" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-8">Mobile Apps</h2>
        
        <!-- Mobile/Tablet Card View -->
        <div class="lg:hidden space-y-6">
          <div v-for="work in mobileWorks" :key="work.title" 
            class="rounded-lg p-6 hover:bg-slate-900/70 transition-all duration-300 cursor-pointer"
          >
            <div class="flex-1">
              <h3 class="text-xl lg:text-2xl font-semibold text-white mb-2 lg:mb-3">{{ work.title }}</h3>
              <p class="text-base lg:text-lg text-slate-300 mb-3 lg:mb-4">{{ work.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in work.technologies" :key="tech" class="px-2 py-1 lg:px-3 lg:py-1 bg-slate-800/50 text-slate-300 rounded-full text-xs lg:text-sm">{{ tech }}</span>
              </div>
              <div class="flex gap-4">
                <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                  View Project
                </a>
                <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                  View Repo
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
              <tr v-for="work in mobileWorks" :key="work.title" class="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
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
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                    View Project
                  </a>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                    View Repo
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
                <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                  View Project
                </a>
                <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                  View Repo
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
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                    View Project
                  </a>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-300 hover:text-white transition-colors">
                    View Repo
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