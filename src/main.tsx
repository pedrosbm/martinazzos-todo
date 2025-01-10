import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

import './index.css'
import { ThemeProvider } from './provider/ThemeProvider.tsx'
import { SidebarProvider} from './components/ui/sidebar.tsx'
import { AppSidebar } from './components/Sidebar/AppSidebar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider>
        <AppSidebar />
        <App />
      </SidebarProvider>
    </ThemeProvider>
  </StrictMode >,
)
