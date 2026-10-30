import { skills } from '../../data/skills.js'
export default function Skills() {
  return (
    <section id="skills" className="section"><div className="container">
      <h2 className="title">Skills</h2>
      <div className="grid cards">
        {skills.map(g => (
          <div className="card" key={g.category}>
            <h3>{g.category}</h3>
            <ul className="chips">{g.items.map(s => <li key={s}>{s}</li>)}</ul>
          </div>))}
      </div>
    </div></section>
  )
}
