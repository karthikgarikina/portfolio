const STACK_ITEMS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    label: "JavaScript",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    label: "Bootstrap",
  },
  { src: "https://cdn-icons-png.flaticon.com/512/2103/2103626.png", label: "Machine Learning" },
  { src: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png", label: "Generative AI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C" },
  { src: "https://cdn-icons-png.flaticon.com/512/4248/4248443.png", label: "DBMS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
];

export default function TechStack() {
  return (
    <div className="tech-stack" id="tech">
      <h1>Technical Stack that I&apos;ve</h1>
      <div className="stack-grid">
        {STACK_ITEMS.map((item) => (
          <div data-aos="fade-up" className="stack-item" key={item.label}>
            <img src={item.src} alt={item.label} loading="lazy" decoding="async" />
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
