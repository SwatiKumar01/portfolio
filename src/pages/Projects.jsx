
import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [filter, setFilter] = useState("");

  const filteredProjects = projects.filter((project) => {
    const searchText = filter.toLowerCase();

    return (
      project.title.toLowerCase().includes(searchText) ||
      project.category.toLowerCase().includes(searchText) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(searchText)
      )
    );
  });

  return (
    <section className="page-section">
      <p className="eyebrow">SELECTED WORK</p>
      <h1>Projects</h1>
      <p>Explore projects that demonstrate my programming and problem-solving skills.</p>

      <div className="filter-control">
        <label htmlFor="project-filter">Filter projects</label>
        <input
          id="project-filter"
          type="search"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
          placeholder="Try C++, algorithms, or web..."
        />
      </div>

      <p aria-live="polite">
        Showing {filteredProjects.length} of {projects.length} projects
      </p>

      {filteredProjects.length > 0 ? (
        <div className="project-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          No projects match “{filter}”. Try a different search.
        </p>
      )}
    </section>
  );
}
