function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Professional Project */}
        <div className="project-card">
          <h3>Telecom Network Inventory</h3>

          <p className="project-type">
            Professional Project | Tech Mahindra
          </p>

          <p>
            Worked on Ciena Blue Planet Network Inventory
            for Telefónica Germany in the telecom OSS/BSS domain.
          </p>

          <h4>Technologies Used</h4>

          <div className="project-technologies">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>Kafka</span>
            <span>Oracle</span>
            <span>PostgreSQL</span>
            <span>Neo4j</span>
          </div>
        </div>

        {/* Personal Project 1 */}
        <div className="project-card">
          <h3>Product Management System</h3>

          <p className="project-type">
            Personal Project | In Development
          </p>

          <p>
            Building a product management application with
            backend APIs, database integration, validation,
            and frontend connectivity.
          </p>

          <h4>Planned Technologies</h4>

          <div className="project-technologies">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>REST APIs</span>
          </div>
        </div>

        {/* Personal Project 2 */}
        <div className="project-card">
          <h3>Mini E-commerce Application</h3>

          <p className="project-type">
            Personal Project | In Development
          </p>

          <p>
            Building a full-stack e-commerce application
            with product listing, shopping cart, and
            backend integration.
          </p>

          <h4>Planned Technologies</h4>

          <div className="project-technologies">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>React</span>
            <span>MySQL</span>
            <span>REST APIs</span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;