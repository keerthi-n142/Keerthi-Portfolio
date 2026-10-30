import { Sun, Moon } from 'lucide-react'
export default function ThemeToggle({ theme, setTheme }) {
  const dark = theme === 'dark'
  return (
    <button className="icon-btn" onClick={() => setTheme(dark ? 'light' : 'dark')}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      {dark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
