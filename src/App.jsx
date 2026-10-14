import { useEffect, useState } from 'react'
import SiteNavbar from './components/SiteNavbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import AuthSection from './components/AuthSection.jsx'
import Team from './components/Team.jsx'
import Footer from './components/Footer.jsx'

function getInitialTheme() {
  const stored = localStorage.getItem('formlab-theme')
  if (stored === 'dark' || stored === 'light') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function App() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('formlab-theme', theme)
  }, [theme])

  return (
    <div className="app-shell">
      <SiteNavbar theme={theme} onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')} />
      <main>
        <Hero />
        <Features />
        <AuthSection />
        <Team />
      </main>
      <Footer />
    </div>
  )
}
