import '../styles/Portfolio.css'

export default function Portfolio() {
  return (
    <div className="portfolio-page">
      {/* HERO */}
      <section className="portfolio-hero">
        <h1>Portfolio</h1>
        <p className="intro">
          I’m Roy Lowe — an Identity & Access Management professional and
          front‑end developer focused on building secure, intuitive, and
          scalable digital experiences. My work blends enterprise‑level security
          principles with modern UI engineering, creating applications that feel
          effortless while staying robust behind the scenes.
        </p>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="portfolio-section">
        <h2>Featured Projects</h2>

        <div className="project-card">
          <div className="project-content">
            <h3>Portfolio Platform (React + Vite + Node)</h3>
            <p>
              A fully responsive developer portfolio built with React Router v7,
              modular layouts, reusable components, and a Node backend.
            </p>
            <ul>
              <li>Custom layout system using &lt;Outlet&gt;</li>
              <li>Global navigation with active route states</li>
              <li>Brand-driven UI with deep blue + amber palette</li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>IAM Workflow Visualizer</h3>
            <p>
              A tool that maps identity lifecycle events—provisioning, access
              requests, approvals, and deprovisioning—into a visual flow.
            </p>
            <ul>
              <li>Role‑based access logic</li>
              <li>Event‑driven UI updates</li>
              <li>Secure data modeling</li>
            </ul>
          </div>
        </div>

        <div className="project-card">
          <div className="project-content">
            <h3>Contact API (Node + Express)</h3>
            <p>
              A lightweight backend service powering the portfolio’s contact
              form.
            </p>
            <ul>
              <li>Input validation</li>
              <li>Email delivery</li>
              <li>Clean REST structure</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="portfolio-section">
        <h2>Skills & Technologies</h2>

        <div className="skills-grid">
          <div>
            <h4>Front‑End</h4>
            <ul>
              <li>React (Hooks, Router v7)</li>
              <li>JavaScript / ES6+</li>
              <li>HTML5 / CSS3</li>
              <li>Responsive design</li>
              <li>Component architecture</li>
            </ul>
          </div>

          <div>
            <h4>Back‑End</h4>
            <ul>
              <li>Authentication flows</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>REST APIs</li>
            </ul>
          </div>

          <div>
            <h4>IAM Expertise</h4>
            <ul>
              <li>Identity lifecycle management</li>
              <li>Access provisioning & deprovisioning</li>
              <li>RBAC</li>
              <li>SSO, MFA, directory services</li>
              <li>Security‑first design principles</li>
            </ul>
          </div>

          <div>
            <h4>Tools</h4>
            <ul>
              <li>Prettier, Husky, Commitlint</li>
              <li>Tableau / Crystal Reports</li>
              <li>Git & GitHub</li>
              <li>Jira</li>
              <li>VS Code</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CURRENT WORK */}
      <section className="portfolio-section">
        <h2>What I’m Working On</h2>
        <p>
          I’m actively building out a full‑stack developer portfolio that
          demonstrates modern React architecture, Node‑powered backend services,
          clean commit history using Conventional Commits, automated formatting
          and linting, and IAM‑inspired applications. My long‑term goal is to
          become a .NET expert and integrate full‑stack identity‑driven
          applications into my portfolio.
        </p>
      </section>

      {/* CTA */}
      <section className="portfolio-section cta-section">
        <h2>Let’s Build Something</h2>
        <p>
          I’m always exploring new technologies, refining my craft, and creating
          tools that make systems more secure and more human. If you’re
          interested in collaborating or discussing IAM workflows or front‑end
          engineering ideas, reach out.
        </p>
      </section>
    </div>
  )
}
