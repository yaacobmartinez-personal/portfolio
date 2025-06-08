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
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    period: '2020 - Present',
    description: 'Leading development of enterprise applications using modern web technologies. Spearheading the implementation of microservices architecture and cloud infrastructure.',
    technologies: ['Vue.js', 'Node.js', 'TypeScript', 'AWS', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Agency',
    period: '2018 - 2020',
    description: 'Developed and maintained multiple client projects using various web technologies. Implemented responsive designs and optimized application performance.',
    technologies: ['React', 'Express.js', 'MongoDB', 'Redux', 'Tailwind']
  },
  {
    title: 'Frontend Developer',
    company: 'Startup',
    period: '2016 - 2018',
    description: 'Built responsive and interactive user interfaces for web applications. Collaborated with UX designers to implement pixel-perfect designs.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Sass', 'jQuery']
  },
  {
    title: 'Junior Web Developer',
    company: 'Digital Studio',
    period: '2015 - 2016',
    description: 'Assisted in developing and maintaining client websites. Implemented responsive designs and basic animations.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WordPress']
  },
  {
    title: 'Web Development Intern',
    company: 'Tech Startup',
    period: '2014 - 2015',
    description: 'Learned and applied web development fundamentals. Contributed to small-scale projects and bug fixes.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  },
  {
    title: 'Lead Software Engineer',
    company: 'Enterprise Solutions',
    period: '2019 - 2020',
    description: 'Led a team of developers in building scalable enterprise applications. Implemented CI/CD pipelines and automated testing strategies.',
    technologies: ['Java', 'Spring Boot', 'Kubernetes', 'Jenkins', 'PostgreSQL']
  },
  {
    title: 'Mobile App Developer',
    company: 'App Studio',
    period: '2017 - 2018',
    description: 'Developed cross-platform mobile applications using React Native. Implemented complex UI animations and state management solutions.',
    technologies: ['React Native', 'Redux', 'Firebase', 'GraphQL', 'Jest']
  },
  {
    title: 'DevOps Engineer',
    company: 'Cloud Solutions',
    period: '2018 - 2019',
    description: 'Managed cloud infrastructure and implemented automated deployment pipelines. Optimized system performance and security.',
    technologies: ['AWS', 'Terraform', 'Ansible', 'Python', 'Linux']
  },
  {
    title: 'UI/UX Developer',
    company: 'Design Agency',
    period: '2016 - 2017',
    description: 'Created interactive prototypes and implemented complex UI components. Collaborated with designers to ensure pixel-perfect implementations.',
    technologies: ['Figma', 'React', 'Styled Components', 'GSAP', 'Webpack']
  },
  {
    title: 'Backend Developer',
    company: 'API Solutions',
    period: '2017 - 2018',
    description: 'Developed RESTful APIs and microservices. Implemented caching strategies and database optimizations.',
    technologies: ['Node.js', 'Express', 'Redis', 'MongoDB', 'Docker']
  },
  {
    title: 'Full Stack Developer',
    company: 'E-commerce Platform',
    period: '2015 - 2016',
    description: 'Built and maintained e-commerce platforms with payment integration and inventory management systems.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Vue.js', 'Stripe']
  },
  {
    title: 'Software Developer',
    company: 'Tech Innovation Lab',
    period: '2014 - 2015',
    description: 'Worked on experimental projects and proof-of-concepts. Implemented innovative solutions using cutting-edge technologies.',
    technologies: ['Python', 'Django', 'React', 'PostgreSQL', 'Docker']
  }
]

export const works: Work[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with real-time inventory management, payment processing, and order tracking.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe', 'Redis'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://example.com/ecommerce',
    repo: 'https://github.com/example/ecommerce'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, team features, and advanced task organization.',
    technologies: ['React', 'Firebase', 'Tailwind', 'Redux', 'Material-UI'],
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    link: 'https://example.com/taskmanager',
    repo: 'https://github.com/example/taskmanager'
  },
  {
    title: 'Social Media Dashboard',
    description: 'Analytics dashboard for social media management with real-time data visualization and campaign tracking.',
    technologies: ['Vue.js', 'D3.js', 'Express.js', 'Socket.io', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://example.com/dashboard',
    repo: 'https://github.com/example/dashboard'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website with blog functionality, dark mode support, and interactive animations.',
    technologies: ['Nuxt.js', 'Tailwind CSS', 'Markdown', 'GSAP', 'Vuex'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80',
    link: 'https://example.com/portfolio',
    repo: 'https://github.com/example/portfolio'
  },
  {
    title: 'Real-time Chat Application',
    description: 'A modern chat application with real-time messaging, file sharing, and end-to-end encryption.',
    technologies: ['Vue.js', 'Socket.io', 'WebRTC', 'IndexedDB', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    link: 'https://example.com/chat',
    repo: 'https://github.com/example/chat'
  },
  {
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness tracking application with workout planning, progress monitoring, and nutrition tracking.',
    technologies: ['React Native', 'Firebase', 'Redux', 'GraphQL', 'Apollo'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://example.com/fitness',
    repo: 'https://github.com/example/fitness'
  },
  {
    title: 'AI-Powered Content Generator',
    description: 'An AI-driven content generation platform that creates SEO-optimized articles and marketing copy.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
    link: 'https://example.com/ai-content',
    repo: 'https://github.com/example/ai-content'
  },
  {
    title: 'Smart Home Dashboard',
    description: 'A centralized dashboard for managing smart home devices with automation rules and energy monitoring.',
    technologies: ['Vue.js', 'MQTT', 'WebSocket', 'D3.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    link: 'https://example.com/smarthome',
    repo: 'https://github.com/example/smarthome'
  }
]

// Filter works based on technologies
export const webWorks = works.filter(work => 
  work.technologies.some(tech => 
    ['Vue.js', 'React', 'Nuxt.js', 'Express.js', 'Node.js'].includes(tech)
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