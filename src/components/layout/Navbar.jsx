import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle.jsx'
import { profile } from '../../data/profile.js'
const links = ['home', 'about', 'skills', 'projects', 'education', 'contact']
export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  useEffect(() => {
    const obs = new IntersectionObserver(
      es => es.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' })
    document.querySelectorAll('main section[id]').forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])
  useEffect(() => {
    const esc = e => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', esc)
    return () => window.removeEventListener('keydown', esc)
  }, [])
  return (
    <header className="nav">
      <nav className="container nav-inner" aria-label="Main">
        <a href="#home" className="logo" aria-label="KN home" onClick={() => setOpen(false)}>{profile.initials}</a>
        <ul id="menu" className={'nav-links' + (open ? ' open' : '')}>
          {links.map(l => (
            <li key={l}><a href={'#' + l} className={active === l ? 'active' : ''}
              aria-current={active === l ? 'true' : undefined} onClick={() => setOpen(false)}>
              {l[0].toUpperCase() + l.slice(1)}</a></li>))}
        </ul>
        <div className="nav-actions">
          <ThemeToggle theme={theme} setTheme={setTheme} />
          <button className="icon-btn menu-btn" aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open} aria-controls="menu" onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}
