import { education } from '../../data/education.js'
export default function Education() {
  return (
    <section id="education" className="section"><div className="container">
      <h2 className="title">Education</h2>
      <ol className="timeline">
        {education.map((e, i) => (
          <li className="card" key={i}>
            <h3>{e.degree}</h3><p>{e.institution}</p>
            <p className="muted">{e.start} to {e.end}</p><p>{e.details}</p>
          </li>))}
      </ol>
    </div></section>
  )
}
