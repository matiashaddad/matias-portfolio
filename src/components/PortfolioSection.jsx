import ProjectCard from './ProjectCard.jsx';

const PortfolioSection = ({ title, projects }) => {
  return (
    // portfolio-section and section-title
    <section className="portfolio-section">
      <h2 className="section-title">
        {title}
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;
