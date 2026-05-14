export default function Navbar() {
  return (
    <>
      <div className="nav-bar-space" />
      <div className="nav-bar">
        <a href="#tech">
          <span>Tech</span> <i className="fas fa-laptop-code" />
        </a>
        <a href="#projects">
          <span>Projects</span> <i className="fas fa-lightbulb" />
        </a>
        <a href="#home">
          <span>HOME</span>
          <i className="fas fa-home" />
        </a>
        <a href="#experience">
          <span>Experience</span> <i className="fas fa-briefcase" />
        </a>
        <a href="#contact">
          <span>Contact</span>
          <i className="fas fa-envelope" />
        </a>
      </div>
    </>
  );
}
