<template>
  <div class="space-y-24">
    <div class="pt-[20px] lg:pt-[40px]">
      <h2 class="text-4xl lg:text-5xl font-bold text-white mb-12">Work Experience</h2>
      <div class="overflow-x-auto">
        <table class="w-full">
          <thead>
            <tr class="border-b border-slate-800">
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Role</th>
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Company</th>
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Period</th>
              <th class="text-left py-6 px-6 text-slate-400 font-medium">Technologies</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="exp in experience" :key="exp.title" class="border-b border-slate-800/50 hover:bg-slate-900/50 transition-colors">
              <td class="py-8 px-6">
                <div>
                  <h3 class="text-xl font-medium text-white">{{ exp.title }}</h3>
                  <p class="text-base text-slate-400 mt-2">{{ exp.description }}</p>
                </div>
              </td>
              <td class="py-8 px-6">
                <span class="text-lg text-slate-400">{{ exp.company }}</span>
              </td>
              <td class="py-8 px-6">
                <span class="text-lg text-slate-400">{{ exp.period }}</span>
              </td>
              <td class="py-8 px-6">
                <div class="flex flex-wrap gap-3">
                  <span v-for="tech in exp.technologies" :key="tech" class="px-3 py-1.5 bg-slate-800/50 text-slate-300 rounded-full text-sm">{{ tech }}</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { experience } from '~/data/portfolio'
</script> 