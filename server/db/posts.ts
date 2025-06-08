export interface Author {
  name: string;
}

export interface Post {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  date: string;
  readingTime: number;
  author: Author;
  tags: string[];
}

export const posts: Post[] = [
  {
    title: 'Getting Started with Nuxt 3',
    slug: 'getting-started-with-nuxt-3',
    excerpt: 'Learn how to build modern web applications with Nuxt 3 and its powerful features.',
    content: `
      <h2>Introduction</h2>
      <p>Nuxt 3 is the latest version of the popular Vue.js framework that makes building modern web applications a breeze.</p>
      
      <h2>Key Features</h2>
      <ul>
        <li>Vue 3 Composition API</li>
        <li>Vite for faster development</li>
        <li>TypeScript support out of the box</li>
        <li>Auto-imports for components and composables</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>To create a new Nuxt 3 project, run:</p>
      <pre>npx nuxi init my-project</pre>
    `,
    image: 'https://picsum.photos/800/400',
    category: 'Tutorials',
    date: '2024-03-20',
    readingTime: 5,
    author: {
      name: 'John Doe'
    },
    tags: ['Nuxt', 'Vue', 'JavaScript', 'Tutorials']
  },
  {
    title: 'Mastering Tailwind CSS',
    slug: 'mastering-tailwind-css',
    excerpt: 'A comprehensive guide to using Tailwind CSS for building beautiful user interfaces.',
    content: `
      <h2>What is Tailwind CSS?</h2>
      <p>Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML.</p>
      
      <h2>Benefits</h2>
      <ul>
        <li>No need to write custom CSS</li>
        <li>Highly customizable</li>
        <li>Smaller bundle size</li>
        <li>Great developer experience</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/401',
    category: 'CSS',
    date: '2024-03-19',
    readingTime: 8,
    author: {
      name: 'Jane Smith'
    },
    tags: ['CSS', 'Tailwind', 'Design', 'Frontend']
  },
  {
    title: 'TypeScript Best Practices',
    slug: 'typescript-best-practices',
    excerpt: 'Learn the best practices for writing maintainable and type-safe TypeScript code.',
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript adds static typing to JavaScript, making your code more maintainable and less prone to errors.</p>
      
      <h2>Best Practices</h2>
      <ul>
        <li>Use strict mode</li>
        <li>Define proper interfaces</li>
        <li>Leverage type inference</li>
        <li>Use generics effectively</li>
      </ul>
    `,
    image: 'https://picsum.photos/800/402',
    category: 'TypeScript',
    date: '2024-03-18',
    readingTime: 6,
    author: {
      name: 'Mike Johnson'
    },
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Best Practices']
  }
]; 