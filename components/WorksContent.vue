<template>
  <div class="w-full">
    <div class="space-y-16">
      <div id="web" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-8">Web Development</h2>
        <div class="overflow-x-auto">
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
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-300 transition-colors inline-flex items-center gap-1">
                    {{ work.link.replace(/^https?:\/\//, '') }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <span v-else class="text-slate-500">-</span>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-300 transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <span v-else class="text-slate-500">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="mobile" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-8">Mobile Apps</h2>
        <div class="overflow-x-auto">
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
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-300 transition-colors inline-flex items-center gap-1">
                    {{ work.link.replace(/^https?:\/\//, '') }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <span v-else class="text-slate-500">-</span>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-300 transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <span v-else class="text-slate-500">-</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="design" class="pt-[10px] lg:pt-[50px]">
        <h2 class="text-3xl font-bold text-white mb-8">Design</h2>
        <div class="overflow-x-auto">
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
                  <a v-if="work.link" :href="work.link" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-300 transition-colors inline-flex items-center gap-1">
                    {{ work.link.replace(/^https?:\/\//, '') }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                      <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                    </svg>
                  </a>
                  <span v-else class="text-slate-500">-</span>
                </td>
                <td class="py-4 px-4">
                  <a v-if="work.repo" :href="work.repo" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-slate-300 transition-colors inline-flex items-center gap-2">
                    GitHub
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <span v-else class="text-slate-500">-</span>
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