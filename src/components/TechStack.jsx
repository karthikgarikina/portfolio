/**
 * One entry per tool (deduped). Icons: Devicon / Simple Icons / Flaticon to match existing card style.
 */
const STACK_ITEMS = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", label: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", label: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", label: "Java" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", label: "Python" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", label: "C" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", label: "C++" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", label: "HTML5" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", label: "CSS3" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", label: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", label: "Bootstrap" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", label: "Node.js" },
  { src: "https://cdn.simpleicons.org/express/393939", label: "Express.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", label: "Django" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", label: "FastAPI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg", label: "GraphQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", label: "REST & OpenAPI" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", label: "PostgreSQL" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", label: "MongoDB" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", label: "Redis" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg", label: "Docker" },
  { src: "https://cdn.simpleicons.org/jenkins/D24939", label: "DevOps & CI/CD" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", label: "Git" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", label: "GitHub" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", label: "Postman" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg", label: "Solidity" },
  { src: "https://cdn.simpleicons.org/remix/121212", label: "Remix IDE" },
  { src: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png", label: "LLMs & GenAI" },
  { src: "https://cdn-icons-png.flaticon.com/512/9433/9433969.png", label: "AI Agents" },
  { src: "https://cdn-icons-png.flaticon.com/512/2103/2103626.png", label: "Machine Learning" },
  { src: "https://cdn-icons-png.flaticon.com/512/1087/1087850.png", label: "System Design" },
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
