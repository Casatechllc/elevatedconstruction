import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  appConfig: {
    phoneNumber: '(555) 000-0000',
    phoneRaw: '5550000000', // No dashes or spaces for the "tel:" link
    email: 'info@elevatedconstruction.com',
    address: '123 Elevated Way, Bridgewater, VA 22812'
  },

  // Add the CSS file here
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '@/assets/css/main.css'
  ],

  app: {
    head: {
      // Adding Bootstrap JS so dropdowns and the Drawers work
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ],
      link: [
        { 
          rel: 'stylesheet', 
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css' 
        }
      ]
    }
  }
})
