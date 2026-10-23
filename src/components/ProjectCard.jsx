
import { Link } from "react-router";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <p className="eyebrow">{project.category}</p>

      <h2>{project.title}</h2>

      <p>{project.summary}</p>

      <ul className="tag-list" aria-label="Technologies used">
        {project.technologies.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>

      <Link
        className="text-link"
        to={`/projects/${project.slug}`}
      >
        View project details →
      </Link>
    </article>
  );
}
