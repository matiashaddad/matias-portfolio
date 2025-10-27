import PortfolioSection from './components/PortfolioSection.jsx';

const Github = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="4em" height="4em" viewBox="0 0 24 24" {...props}>
    <path fill="#ffffff" d="M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
  </svg>
);

// 1. DATA SCIENCE PROJECTS
const dataProjects = [
  { name: 'Judged',
    description: 'Give FL citizens legal aid when a loved one is arrested.',
    technologies: ['Python', 'React', 'JavaScript', 'Node.js'],
    url: 'https://github.com/TechLabs-Berlin/SS25-Judged' },
  { name: 'Crime Risk Dashboard',
    description: 'Find the safest and riskiest cities in the world.',
    technologies: ['Python', 'SQL'],
    url: 'https://crime-risk-dashboard.onrender.com/' },
  { name: 'Compliance Checker',
    description: 'Find out how long personal data can be legally held.',
    technologies: ['Python', 'SQL'],
    url: 'https://matiashaddad.github.io/Compliance_Checker/' },
];

// 2. WEB DEVELOPMENT PROJECTS
const webProjects = [
  { name: 'Trailflix',
    description: 'Sit down, relax and enjoy this Netflix clone.',
    technologies: ['React', 'Vite', 'Tailwind', 'API'],
    url: 'https://matiashaddad.github.io/trailflix/' },
  { name: 'Spotify Clone',
    description: 'Listen to your favourite tunes on this Spotify clone.',
    technologies: ['React', 'Vite', 'Tailwind'],
    url: 'https://matiashaddad.github.io/spotify-clone/' },
];

function App() {
  return (
    // portfolio-container
    <div className="portfolio-container">

      {/* Header */}
      <header className="portfolio-header flex items-center justify-center">
        <a
          href="https://github.com/matiashaddad?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 text-white hover:text-gray-400 transition duration-300"
          aria-label="GitHub Profile"
        >
          <Github className="size-8" />
        </a>
        <h1 className="header-title">Matias' Portfolio</h1>
      </header>

      <main className="portfolio-main">

        {/* Data Science Section */}
        <PortfolioSection title="Data Projects" projects={dataProjects} />

        {/* Separator */}
        <hr className="divider" />

        {/* Web Development Section */}
        <PortfolioSection title="Web Dev Projects" projects={webProjects} />
      </main>

      {/* Footer */}
      <footer className="portfolio-footer">
        © {new Date().getFullYear()} Matias' Portfolio.
      </footer>
    </div>
  );
}

export default App;
