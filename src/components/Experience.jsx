
function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>

      <div className="experience-card">

        <h3>Associate Software Engineer</h3>

        <h4>Tech Mahindra</h4>

        <p className="experience-duration">
          September 2024 – Present
        </p>

        <p>
          <strong>Client:</strong> Telefónica Germany
        </p>

        <p>
          <strong>Platform:</strong> Ciena Blue Planet MDOI
        </p>

        <p>
          <strong>Applications:</strong> NetSite Federation & NMS Federation
        </p>

        <h4>Responsibilities</h4>

        <ul>
          <li>
            Contributed to telecom network inventory and OSS workflows
            across NetSite Federation and NMS Federation applications.
          </li>

          <li>
            Developed and maintained Java backend workflows using
            Spring Boot for processing, validating and synchronizing
            network inventory data.
          </li>

          <li>
            Implemented and maintained REST APIs and backend
            processing logic based on project requirements.
          </li>

          <li>
            Worked with PostgreSQL, Oracle and SQL for database
            operations, data validation and troubleshooting.
          </li>

          <li>
            Used Neo4j, Cypher and APOC to manage and validate
            graph-based network inventory relationships.
          </li>

          <li>
            Modified Drools business rules to support application
            requirements and relationship processing.
          </li>

          <li>
            Worked with Apache Kafka event flows for backend
            data processing and synchronization.
          </li>

          <li>
            Developed unit tests using JUnit and Mockito to
            validate application functionality.
          </li>

          <li>
            Investigated and resolved application defects,
            debugged backend issues and handled Jira bug fixes.
          </li>

          <li>
            Supported application deployments, post-deployment
            validation and issue resolution.
          </li>
        </ul>

        <br />

        <h4>Technologies</h4>

        <div className="experience-technologies">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>REST APIs</span>
          <span>Microservices</span>
          <span>Apache Kafka</span>
          <span>Oracle</span>
          <span>PostgreSQL</span>
          <span>Neo4j</span>
          <span>Cypher</span>
          <span>APOC</span>
          <span>Drools</span>
          <span>JUnit</span>
          <span>Mockito</span>
        </div>

      </div>
    </section>
  );
}

export default Experience;
