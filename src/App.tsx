// src/App.tsx
import React from 'react'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { Outlet } from 'react-router-dom'

// Workaround для CommonJS react-helmet-async
import * as HelmetPkg from 'react-helmet-async'
const { HelmetProvider } = HelmetPkg

const queryClient = new QueryClient()

// App теперь принимает детей и просто оборачивает их в провайдеры
const App = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <ThemeProvider defaultTheme="dark" attribute="class">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Outlet />
        </TooltipProvider>
      </ThemeProvider>
    </HelmetProvider>
  </QueryClientProvider>
)

export default App
