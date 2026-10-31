
function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2>Certifications</h2>

      <div className="certification-card">
        <div className="certification-icon">
          <span>🏆</span>
        </div>

        <div className="certification-details">
          <h3>Neo4j Certified Professional</h3>
          <p>Issued by Neo4j GraphAcademy</p>
          <p>
            Demonstrated knowledge of graph database concepts,
            Cypher queries and Neo4j fundamentals.
          </p>
          <p className="certification-status">
            Certification Completed
          </p>
        </div>
      </div>

      <div className="certification-card">
        <div className="certification-icon">
          <span>☁️</span>
        </div>

        <div className="certification-details">
          <h3>AWS Certified Cloud Practitioner</h3>
          <p>Amazon Web Services (AWS)</p>
          <p>
            Knowledge of AWS cloud concepts, core services,
            security and cloud computing fundamentals.
          </p>
        </div>
      </div>

      <div className="certification-card">
        <div className="certification-icon">
          <span>📊</span>
        </div>

        <div className="certification-details">
          <h3>Microsoft Power BI</h3>
          <p>Microsoft</p>
          <p>
            Knowledge of data visualization, reporting
            and business intelligence concepts.
          </p>
        </div>
      </div>

      <div className="certification-card">
        <div className="certification-icon">
          <span>💻</span>
        </div>

        <div className="certification-details">
          <h3>SQL Intermediate</h3>
          <p>HackerRank</p>
          <p>
            Demonstrated intermediate SQL skills through
            practical database query challenges.
          </p>
        </div>
      </div>

    </section>
  );
}

export default Certifications;
