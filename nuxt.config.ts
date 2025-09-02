// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    ['nuxt-mail', {
      message: [
        { name: 'contact', to: process.env.SMTP_USER }
      ],
      smtp: {
        service: 'gmail',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
    }
    ],
    ['@nuxtjs/robots', {
      rules: {
        UserAgent: '*',
        Allow: '/',
        Sitemap: 'https://yaacob-martinez.vercel.app/sitemap.xml'
      }
    }],
    ['@nuxtjs/sitemap', {
      hostname: 'https://yaacob-martinez.vercel.app',
      gzip: true,
    }]
  ],
  nitro: {
    routeRules: {
      '/api/**': { cors: true }
    }
  },
  app: {
    head: {
      title: 'Yaacob Martinez',
      meta: [
        { name: 'description', content: 'Portfolio of Yaacob Martinez – Web Developer, Designer, and Creator. Explore my work, projects, and contact me for collaborations.' },
        { name: 'keywords', content: 'Yaacob Martinez, portfolio, web developer, software engineer, designer' },

        // Open Graph (for social sharing + Google previews)
        { property: 'og:title', content: 'Yaacob Martinez | Portfolio' },
        { property: 'og:description', content: 'Explore the works and projects of Yaacob Martinez.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://yaacob-martinez.vercel.app' },
        { property: 'og:image', content: '/preview.png' },

        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Yaacob Martinez | Portfolio' },
        { name: 'twitter:description', content: 'Explore the works and projects of Yaacob Martinez.' },
        { name: 'twitter:image', content: '/preview.png' },

        { name: 'google-site-verification', content: "Mk_nPEoV3Rdq1QKeJJsBWXw5NK3Cmxqa7L1dqwIZlCM" }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap'
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  routeRules: {
    '/': { redirect: '/about' }
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseAnonKey: process.env.SUPABASE_KEY,
    }
  },

})