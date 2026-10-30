import { useState } from 'react'
import { Github, Linkedin, User } from 'lucide-react'
import { profile } from '../../data/profile.js'

export default function Hero() {
  const [noPhoto, setNoPhoto] = useState(false)

  return (
    <section id="home" className="hero container">
      <div className="hero-text">
        <p className="muted">Hello, I'm</p>
        <h1>{profile.name}</h1>
        <h2 className="headline">Aspiring Software Developer</h2>
        <p className="lead">I am a passionate student who enjoys building practical projects, solving problems, and learning new technologies.</p>
        <div className="btn-row">
          <a className="btn primary" href="#projects">View My Projects</a>
        </div>
        <div className="socials">
          <a className="icon-btn" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={20} /></a>
          <a className="icon-btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>
        </div>
      </div>
      <div className="hero-photo">
        <div className="photo-frame">
          {noPhoto
            ? <div className="placeholder" role="img" aria-label="Profile photo placeholder"><User size={96} /></div>
            : <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setNoPhoto(true)} />}
        </div>
      </div>
    </section>
  )
}