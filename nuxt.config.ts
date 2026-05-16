import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  appConfig: {
    phoneNumber: '(540) 810-0978',
    phoneRaw: '5408100978', // No dashes or spaces for the "tel:" link
    email: 'jordan@elev.construction',
    address: '123 Elevated Way, Bridgewater, VA 22812'
  },

  // Add the CSS file here
  css: [
    // 'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css'
  ],

  modules: ['@nuxtjs/sitemap', '@nuxtjs/robots'],
  site: {
    url: 'https://elevatedconstructionvacom/',
    name: 'Elevated Construction',
  },

  sitemap: {
    exclude: [
      '/services/specialty-care/biohazard-trauma', // Path to the unfinished page
      '/portfolio',                             // Exclude an entire directory using wildcards
      '/services/rebuild-remodel/commercial-remodeling',
      '/info/resource-center'
    ],
  },

  app: {
    head: {
      title: 'Elevated Construction | Restoration & Remodeling in Virginia',
      meta: [
        { name: 'description', content: 'Professional water mitigation, mold remediation, and high-end remodeling in the Shenandoah Valley.' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://elevatedconstructionva.com/' },
        { property: 'og:title', content: 'Elevated Construction | Virginia Restoration Specialists' },
        { property: 'og:description', content: '24/7 Emergency Restoration and High-End Remodeling. Serving Harrisonburg, VA and surrounding areas.' },
        { property: 'og:image', content: 'https://elevatedconstructionva.com/ec-logo-long-transparent.png' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://elevatedconstructionva.com/' },
        { name: 'twitter:title', content: 'Elevated Construction | Virginia Restoration Specialists' },
        { name: 'twitter:description', content: 'Professional property restoration and reconstruction with an Elevated touch.' },
        { name: 'twitter:image', content: 'https://elevatedconstructionva.com/ec-logo-long-transparent.png' }
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css' 
        },
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' 
        }
      ]
    }
  }
})
