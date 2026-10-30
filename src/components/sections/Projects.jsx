import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'
import { projects, categories } from '../../data/projects.js'
export default function Projects() {
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? projects : projects.filter(p => p.category === cat)
  return (
    <section id="projects" className="section alt"><div className="container">
      <h2 className="title">Projects</h2>
      <div className="filters" role="group" aria-label="Filter projects by category">
        {categories.map(c => (
          <button key={c} className={'chip-btn' + (cat === c ? ' on' : '')} aria-pressed={cat === c} onClick={() => setCat(c)}>{c}</button>))}
      </div>
      <p role="status" className="muted">{shown.length} project{shown.length === 1 ? '' : 's'} shown</p>
      {shown.length === 0 && <p className="card">No projects in this category yet.</p>}
      <div className="grid cards">
        {shown.map(p => (
          <article className="card project" key={p.id}>
            
            <h3>{p.name}</h3><p>{p.description}</p>
            <ul className="chips">{p.tags.map(t => <li key={t}>{t}</li>)}</ul>
            <div className="btn-row">
              {p.github && <a className="link" href={p.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>}
              {p.demo && <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live demo</a>}
            </div>
          </article>))}
      </div>
    </div></section>
  )
}
