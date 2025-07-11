import './index.css'
import './App.css'

import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'

  export const createRoot = ViteReactSSG({
    routes,
    basename: import.meta.env.BASE_URL,
  })