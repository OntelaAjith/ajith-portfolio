function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="intro-text">HELLO, I'M</p>

        <h1>Ajith Ontela</h1>

        <h2>
  <span className="typing-text">
    Java Backend Developer
  </span>
</h2>

        <p className="home-description">
          Associate Software Engineer with 2+ years of experience building scalable backend applications using Java, Spring Boot, REST APIs, Microservices, and SQL databases. Experienced in telecom domain development, backend data processing, and database integration.
        </p>

        <div className="home-buttons">
          <a href="#projects" className="primary-btn">
            View My Projects
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
         <a
  href="/Ajith_Ontela_Java_Backend_Developer_Resume.pdf"
  download="Ajith_Ontela_resume.pdf"
  className="secondary-btn"
>
  Download Resume
</a>
        </div>
      </div>

      <div className="home-skills">
        <span>Java</span>
        <span>Spring Boot</span>
        <span>REST APIs</span>
        <span>Microservices</span>
        <span>SQL</span>
        <span>React</span>
      </div>
    </section>
  );
}

export default Home;