//To start
// cd client/roys_portfolio
// npm run dev
import '../styles/Home.css'
export default function Home() {
  return (
    <section className="home">
      {/* Hero Section */}
      <div className="hero-container">
        <h1 className="hero-title">Roy Lowe</h1>
        <p className="hero-subtitle">
          Identity & Access Management • React Developer
        </p>
      </div>

      {/* Intro Section */}
      <div className="intro">
        <p>
          I’m an IAM professional and React developer who builds secure,
          scalable, and intuitive digital experiences. My work blends
          enterprise‑grade identity systems with modern front‑end engineering.
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="cta-buttons">
        <a href="/projects" className="cta primary">
          View My Projects
        </a>
      </div>

      {/* Skills Snapshot */}
      <div className="skills">
        <h2>Core Skills</h2>
        <ul>
          <li>Identity & Access Management (IAM)</li>
          <li>React & Modern Front‑End Development</li>
          <li>.NET (2026 learning goal)</li>
          <li>SQL & Reporting (Tableau, Crystal Reports)</li>
          <li>Authentication & Authorization Workflows</li>
        </ul>
      </div>
    </section>
  )
}
