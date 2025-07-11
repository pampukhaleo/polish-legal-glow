// src/routes.ts
import type { RouteRecord } from 'vite-react-ssg'

import Index from './pages/Index'
import About from './pages/About'
import NotFound from './pages/NotFound'
import ServicePage from './pages/ServicePage'
import PartnerPage from './pages/PartnerPage'
import App  from './App'

import { services } from './data/services'
import { partners } from './data/partners'

export const routes: RouteRecord[] = [{
  path: '/',
  Component: App,
  entry: 'src/App.tsx',
  children: [
    {
      index: true,
      Component: Index,
      entry: 'src/pages/Index.tsx',
    },
    {
      path: 'about',
      Component: About,
      entry: 'src/pages/About.tsx',
      },
    {
      path: 'services/:slug',
      Component: ServicePage,
      getStaticPaths: () =>
        services.map((s) => `/services/${s.slug}`),
      entry: 'src/pages/ServicePage.tsx',
      },
    {
      path: 'partners/:id',
      Component: PartnerPage,
      getStaticPaths: () =>
        partners.map((p) => `/partners/${p.id}`),
      entry: 'src/pages/PartnerPage.tsx',
      },
    {
      path: '*',
      Component: NotFound,
      entry: 'src/pages/NotFound.tsx',
      },
  ],
},
]

