import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: false,
  title: "Pratik Thapa",
  description: "Portfolio of a Vue.js, Inertia.js & Laravel developer integrating ML into real-world web projects.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-me' },
      { text: 'Projects', link: '/projects/'},
    ],
    sidebar:{

      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Task Master', link: '/projects/taskmaster' },
            { text: 'Interest Discovery Platform', link: '/projects/idp' },
            { text: 'EstateInsight', link: '/projects/plp'},
          ]
        }
      ],
    },
      

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/pratik-bahadur-thapa-b9964919a/'},
      { icon: 'twitter', link: 'https://x.com/Whoispratikth'},
    ],
  }
})
