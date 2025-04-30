import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  title: "Pratik Thapa",
  description: "Portfolio of a hybrid freelance developer from Kathmandu, Nepal",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local',
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About Me', link: '/about-me/' },
      { text: 'Projects', link: '/projects/index/'},
    ],
    sidebar:{

      '/projects/': [
        {
          text: 'Projects',
          items: [
            { text: 'Task Master', link: '/projects/task-master/' },
            { text: 'Interest Discovery Platform', link: '/projects/idp/' },
            { text: 'EstateInsight', link: '/projects/plp/'},
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
