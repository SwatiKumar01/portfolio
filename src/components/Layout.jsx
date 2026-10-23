
import { NavLink, Outlet, Link } from "react-router";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Layout() {
  return (
    <>
      <button
        className="skip-link"
        type="button"
        onClick={() => {
          document.getElementById("main-content")?.focus();
        }}
      >
        Skip to content
      </button>

      <header className="site-header">
        <Link className="brand" to="/">
          Portfolio<span>.</span>
        </Link>

        <div className="header-actions">
          <nav aria-label="Main navigation">
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/experience">Experience</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <ThemeToggle />
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>Designed and built with React and Vite.</p>
      </footer>
    </>
  );
}
