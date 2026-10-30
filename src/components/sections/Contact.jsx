import { useState } from 'react'
import { Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '../../data/profile.js'
// Connect a backend or email service here later. Must return a Promise; throw on failure.
const sendMessage = null // e.g. async data => fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', message: '' })
  const [err, setErr] = useState({})
  const [status, setStatus] = useState(null)
  const change = e => setV({ ...v, [e.target.name]: e.target.value })
  const submit = async e => {
    e.preventDefault()
    const x = {}
    if (!v.name.trim()) x.name = 'Enter your name.'
    if (!v.email.trim()) x.email = 'Enter your email address.'
    else if (!re.test(v.email)) x.email = 'Enter a valid email, like name@example.com.'
    if (!v.message.trim()) x.message = 'Enter a message.'
    setErr(x); setStatus(null)
    if (Object.keys(x).length) return
    if (!sendMessage) { setStatus({ ok: false, text: 'Your details look valid, but no email service is connected, so nothing was sent. Email me directly instead.' }); return }
    try { await sendMessage(v); setStatus({ ok: true, text: 'Message sent.' }); setV({ name: '', email: '', message: '' }) }
    catch { setStatus({ ok: false, text: 'The message could not be sent. Please try again.' }) }
  }
  const field = (id, label, el) => (
    <div className="field"><label htmlFor={id}>{label}</label>{el}
      {err[id] && <p className="error" id={id + '-err'}>{err[id]}</p>}</div>)
  const aria = id => ({ id, name: id, value: v[id], onChange: change, 'aria-required': true, 'aria-invalid': !!err[id], 'aria-describedby': err[id] ? id + '-err' : undefined })
  return (
    <section id="contact" className="section"><div className="container">
      <h2 className="title">Contact</h2>
      <div className="grid two">
        <div className="contact-links">
          <p>Interested in working together? Get in touch.</p>
          <a className="link" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
          <a className="link" href={profile.github} target="_blank" rel="noopener noreferrer"><Github size={18} /> GitHub</a>
          <a className="link" href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={18} /> LinkedIn</a>
        </div>
        <form className="card" onSubmit={submit} noValidate>
          {field('name', 'Name', <input type="text" autoComplete="name" {...aria('name')} />)}
          {field('email', 'Email', <input type="email" autoComplete="email" {...aria('email')} />)}
          {field('message', 'Message', <textarea rows="5" {...aria('message')} />)}
          <button className="btn primary" type="submit">Send message</button>
          <p role="status" className={status ? (status.ok ? 'success' : 'error') : ''}>{status?.text}</p>
        </form>
      </div>
    </div></section>
  )
}
