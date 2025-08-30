// Utility functions for filtering works by technologies
export interface Work {
  title: string
  description: string
  technologies: string
  link?: string
  repo?: string
}

// Technology categories for filtering
const WEB_TECHNOLOGIES = ['Vue.js', 'React', 'Nuxt.js', 'Express.js', 'Node.js', 'NextJS']
const MOBILE_TECHNOLOGIES = ['React Native']
const DESIGN_TECHNOLOGIES = ['Tailwind', 'Material-UI', 'GSAP']

// Helper function to split comma-separated technologies string
const splitTechnologies = (technologies: string): string[] => {
  return technologies.split(',').map(tech => tech.trim())
}

// Filter works by technology category
export const filterWorksByCategory = (works: Work[], technologies: string[]): Work[] => {
  return works.filter(work => {
    const techArray = splitTechnologies(work.technologies)
    return techArray.some(tech => technologies.includes(tech))
  })
}

// Specific filter functions
export const getWebWorks = (works: Work[]): Work[] => {
  return filterWorksByCategory(works, WEB_TECHNOLOGIES)
}

export const getMobileWorks = (works: Work[]): Work[] => {
  return filterWorksByCategory(works, MOBILE_TECHNOLOGIES)
}

export const getDesignWorks = (works: Work[]): Work[] => {
  return filterWorksByCategory(works, DESIGN_TECHNOLOGIES)
}

// Export technology arrays for reference
export { WEB_TECHNOLOGIES, MOBILE_TECHNOLOGIES, DESIGN_TECHNOLOGIES }
