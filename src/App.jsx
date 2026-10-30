import { useEffect, useState } from 'react'
import Navbar from './components/layout/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import About from './components/sections/About.jsx'
import Skills from './components/sections/Skills.jsx'
import Projects from './components/sections/Projects.jsx'
import Education from './components/sections/Education.jsx'
import Contact from './components/sections/Contact.jsx'
import Footer from './components/layout/Footer.jsx'
import BackToTop from './components/layout/BackToTop.jsx'
const getTheme = () => { try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' } }
export default function App() {
  const [theme, setTheme] = useState(getTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])
  return (<>
    <a href="#home" className="skip">Skip to content</a>
    <Navbar theme={theme} setTheme={setTheme} />
    <main><Hero /><About /><Skills /><Projects /><Education /><Contact /></main>
    <Footer /><BackToTop />
  </>)
}
