import { profile } from '../../data/profile.js'
export default function Footer() {
  return (
    <footer className="footer"><div className="container foot">
      <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React</p>
      <p><a className="link" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>{' '}
        <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </div></footer>
  )
}
