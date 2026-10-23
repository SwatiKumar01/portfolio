
import { Link } from "react-router";

export function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">COMPUTER SCIENCE · SOFTWARE · SECURITY</p>
      <h1>Building technology that solves problems.</h1>
      <p>
        I'm a computer science student interested in software development,
        cybersecurity, algorithms, and building useful applications.
      </p>
      <Link className="button-link" to="/projects">
        Explore my projects →
      </Link>
    </section>
  );
}

export function Experience() {
  const skills = [
    "C and C++",
    "JavaScript and React",
    "HTML and CSS",
    "Git and GitHub",
    "Algorithms and data structures",
    "Cybersecurity research",
  ];

  return (
    <section className="page-section">
      <p className="eyebrow">MY BACKGROUND</p>
      <h1>Experience</h1>
      <p>
        My computer science education combines programming, problem-solving,
        systems concepts, and cybersecurity.
      </p>

      <section className="detail-page">
        <h2>Education</h2>
        <article className="project-card">
          <h3>Computer Science</h3>
          <p>Saint Louis University</p>
          <p>
            Relevant areas of study include programming, algorithms,
            web technologies, computer systems, and computing ethics.
          </p>
        </article>
      </section>

      <section>
        <h2>Technical Skills</h2>
        <ul className="tag-list">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Selected Experience</h2>

        <article className="project-card">
          <p className="eyebrow">COURSEWORK</p>
          <h3>Systems Programming and Algorithms</h3>
          <p>
            Developed programming assignments involving file operations,
            data compression, recursion, and algorithm efficiency.
            Practiced debugging, testing, and analyzing program behavior.
          </p>
        </article>

        <article className="project-card">
          <p className="eyebrow">RESEARCH AND TECHNICAL WRITING</p>
          <h3>Cybersecurity Research</h3>
          <p>
            Researched cybersecurity risks, industry frameworks, and
            security incidents and prepared written summaries for technical
            and nontechnical audiences.
          </p>
        </article>
      </section>
    </section>
  );
}

export function Contact() {
  return (
    <section className="page-section">
      <p className="eyebrow">LET'S CONNECT</p>
      <h1>Contact</h1>
      <p>
        I'm a computer science student interested in software development,
        cybersecurity, and opportunities to build practical solutions.
      </p>

      <div className="project-card">
        <h2>Professional Profile</h2>
        <p>
          Explore my repositories and programming projects on GitHub.
        </p>
        <a
          className="text-link"
          href="https://github.com/SwatiKumar01"
          target="_blank"
          rel="noreferrer"
        >
          Visit my GitHub profile →
        </a>
      </div>

      <p>
        Feel free to explore my projects and technical experience.
      </p>
      <Link className="text-link" to="/projects">
        View my projects →
      </Link>
    </section>
  );
}

export function NotFound() {
  return (
    <section className="page-section">
      <h1>Page not found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}
