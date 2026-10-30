import { profile } from '../../data/profile.js'
export default function About() {
  const facts = [['Degree', profile.degree], ['College', profile.college], ['Graduation year', profile.gradYear], ['Career goal', profile.goal]]
  return (
    <section id="about" className="section alt"><div className="container">
      <h2 className="title">About Me</h2>
      <div className="grid two">
        <div>
          <p>Hi, I'm {profile.name}, a B.Tech Computer Science and Engineering student at {profile.college}, graduating in {profile.gradYear}. I enjoy building practical projects, solving problems, and learning new technologies.</p>
          <p>I'm looking for a software development internship where I can apply what I'm learning, work with a team, and grow as a developer.</p>
        </div>
        <dl className="card facts">
          {facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
      </div>
    </div></section>
  )
}
