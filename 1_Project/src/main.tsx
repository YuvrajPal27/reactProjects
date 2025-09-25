import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GlobalProvider } from './context/GlobalContext.tsx'
import { AuthProvider } from './context/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GlobalProvider>
  </StrictMode>,
)
