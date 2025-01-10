import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './context/ThemeProvider.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import { AppSidebar } from './components/Sidebar/AppSidebar.tsx'
import { AuthenticationProvider } from './context/AuthenticationProvider.tsx'

import App from './App.tsx'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AuthenticationProvider>
          <AppSidebar />
          <App />
        </AuthenticationProvider>
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode >,
)
