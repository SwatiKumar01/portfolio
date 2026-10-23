
import { Link, useParams } from "react-router";
import { projects } from "../data/projects.js";

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="page-section">
        <h1>Project not found</h1>
        <p>That project doesn't exist or may have been moved.</p>
        <Link to="/projects">Back to all projects</Link>
      </section>
    );
  }

  return (
    <article className="page-section detail-page">
      <p className="eyebrow">{project.category}</p>
      <h1>{project.title}</h1>
      <p className="detail-intro">{project.summary}</p>

      <section>
        <h2>The Problem</h2>
        <p>{project.problem}</p>
      </section>

      <section>
        <h2>My Role</h2>
        <p>{project.role}</p>
      </section>

      <section>
        <h2>Implementation</h2>
        <p>{project.approach}</p>
      </section>

      <section>
        <h2>Outcome and Lessons</h2>
        <p>{project.outcome}</p>
      </section>

      <section>
        <h2>Technologies</h2>
        <ul className="tag-list">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      </section>

      <Link className="text-link" to="/projects">
        ← Back to projects
      </Link>
    </article>
  );
}
