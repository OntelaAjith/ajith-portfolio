
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}
    `;

    const mailtoLink =
      `mailto:ajajith8970@gmail.com` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="contact">
      <h2>Let's Connect</h2>

      <p>
        Looking for a Java Backend Developer for your team?
        Let's connect! I am open to exploring opportunities
        where I can contribute my experience in Java,
        Spring Boot, REST APIs and backend development.
      </p>

      <div className="contact-container">

        <div className="contact-info">
          <h3>Let's Talk</h3>

          <p>
            Have an opportunity, project or question?
            Feel free to reach out. I'd be happy to connect.
          </p>

          <p>
            <strong>📍 Location</strong><br />
            India
          </p>

          <p>
            <strong>✉️ Email</strong><br />
            <a href="mailto:ajajith8970@gmail.com">
              ajajith8970@gmail.com
            </a>
          </p>

          <p>
            <strong>💼 LinkedIn</strong><br />
            <a
              href="https://www.linkedin.com/in/ajith-ontela-22a4a724/"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me on LinkedIn
            </a>
          </p>

          <p>
            <strong>💻 GitHub</strong><br />
            <a
              href="https://github.com/OntelaAjith"
              target="_blank"
              rel="noreferrer"
            >
              Explore my GitHub projects
            </a>
          </p>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message here..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">
              Send Message →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
