export interface Experience {
  title: string
  company: string
  period: string
  description: string
  technologies: string[]
}

export interface Work {
  title: string
  description: string
  technologies: string[]
  image: string
  link?: string
  repo?: string
}

export const aboutMe = `I'm a passionate full-stack developer with expertise in modern web technologies. I love creating efficient, scalable, and user-friendly applications that solve real-world problems. With a strong foundation in both frontend and backend development, I strive to build solutions that not only meet technical requirements but also provide exceptional user experiences.`

export const experience: Experience[] = [
  {
    title: 'Senior Software Engineer',
    company: 'Cambridge University Press and Assessment',
    period: '2023 - Present',
    description: 'Develop and maintain complex, feature-rich web services and applications with different technologies and in accordance with the agreed coding standards and software development best practices and principles.',
    technologies: ['Vue.js', 'Node.js', 'TypeScript', 'NuxtJS', 'AWS Lambda']
  },
  {
    title: 'Independent Contractor - Front End Developer',
    company: 'DevPartners Co.',
    period: '2022 - 2023',
    description: 'In charge with development of features of system applications and involved in planning and development of feature improvements for existing website/applications.',
    technologies: ['NextJS', 'Express.js', 'MongoDB', 'Redux', 'Tailwind']
  },
  {
    title: 'Software Engineer',
    company: '360Logix Solutions Inc.',
    period: '2021 - 2022',
    description: 'In charge of development of applications as requested by clients, such as, but not limited to, web, mobile and custom applications.',
    technologies: ['JavaScript', 'ReactJS', 'MongoDB', 'ExpressJS']
  },
  {
    title: 'Software Engineer',
    company: 'Coinpass Ltd',
    period: '2020 - 2021',
    description: 'Work with development teams and product managers to provide sound software solutions.',
    technologies: ['ReactJS', 'MongoDB', 'JavaScript', 'PostgreSQL', 'NodeJS']
  },
  {
    title: 'Front-End Web Developer',
    company: 'Dear Wolves',
    period: '2020',
    description: 'Participate in planning, creation and development of web apps needed by our clients.',
    technologies: ['ReactJS', 'NodeJS', 'JavaScript', 'ExpressJS', 'MySQL']
  },
  {
    title: 'Senior Process Executive',
    company: 'Cognizant Technology Solutions.',
    period: '2019 - 2020',
    description: 'Design, develop, test, deploy, operate and support management solutions across private-cloud environments.',
    technologies: ['Salesforce', 'Apex', 'JavaScript', 'SQL', 'Jenkins']
  },
  {
    title: 'IT Lecturer / Program Head for IT',
    company: 'Informatics College',
    period: '2018 - 2019',
    description: 'Plan, evaluate and revise curricula, course content, materials and methods of instructions. Perform administrative duties such as serving as the Program Head for Computer Studies.',
    technologies: ['Senior High School', 'College', 'Coding Subjects', 'IT Subjects']
  },
  {
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    period: '2018 - 2019',
    description: 'Managed cloud infrastructure and implemented automated deployment pipelines. Optimized system performance and security.',
    technologies: ['AWS', 'Terraform', 'Ansible', 'Python', 'Linux']
  },
  {
    title: 'Programmer',
    company: 'Bestank Manufacturing Corp.',
    period: '2017 - 2019',
    description: 'Write, update and maintain computer programs or software packages to handle specific jobs such as tracking inventory, storing, or retrieving data or controlling other equipment.',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL', 'Javascript']
  }
]

export const works: Work[] = [
  {
    title: 'Malolos Interactive Map',
    description: 'EHFC-Tracking provides an interactive map interface that dynamically loads and displays barangay‐level map data of Malolos City, Bulacan.',
    technologies: ['NextJS', 'Node.js', 'Typescript', 'Supabase', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1584463699033-0da7a4af2c8e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://ehfc-tracking.vercel.app/',
    repo: 'https://github.com/yaacobmartinez-personal/ehfc-tracking'
  },
  {
    title: 'Datamex College of Saint Adeline',
    description: 'Developed and deployed a responsive college information website for Datamex using modern web technologies and hosted on Vercel.',
    technologies: ['NextJS', 'Material UI', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://datamex.vercel.app/',
    repo: 'https://github.com/example/taskmanager'
  },
  {
    title: 'Studio Banx',
    description: 'A One Pager Website for a Studio Banx, a production studio in the Philippines.',
    technologies: ['NextJS', 'Material-UI'],
    image: 'https://banx.vercel.app/images/banxBG.png',
    link: 'https://banx.vercel.app',
    repo: 'https://github.com/yaacobmartinez/studio-banx/'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'Markdown', 'Supabase', 'Vuex'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    link: 'https://portfolio-drab-ten-29.vercel.app/',
    repo: 'https://github.com/yaacobmartinez-personal/portfolio'
  },
  {
    title: 'MBDO Cargo Express',
    description: 'A dashboard for MBDO Cargo Express, a cargo company in the Philippines.',
    technologies: ['NextJS', 'Material UI'],
    image: 'https://images.unsplash.com/photo-1579992822406-2092a7bd5a36?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: 'https://mbdo.vercel.app/',
    repo: 'https://github.com/yaacobmartinez/mbdo.'
  }
]

// Filter works based on technologies
export const webWorks = works.filter(work => 
  work.technologies.some(tech => 
    ['Vue.js', 'React', 'Nuxt.js', 'Express.js', 'Node.js', 'NextJS'].includes(tech)
  )
)

export const mobileWorks = works.filter(work => 
  work.technologies.some(tech => 
    ['React Native'].includes(tech)
  )
)

export const designWorks = works.filter(work => 
  work.technologies.some(tech => 
    ['Tailwind', 'Material-UI', 'GSAP'].includes(tech)
  )
) 