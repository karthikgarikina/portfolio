export default function ProjectsSection() {
  return (
    <div className="my-projects" id="projects">
      <h1>Things I&apos;ve Built</h1>
      <div className="projects">
        <div data-aos="fade-up" className="project-1">
          <div className="image-1" />
          <div className="info-1">
            <p>
              Cartick Meet is for group chat and video conferencing for teams, supporting up to 4 participants with low-latency communication.
            </p>
            <p>Duration : 2 Weeks</p>
            <p>Technology : React.js, Node.js, Express.js, Socket.IO, WebRTC, JavaScript</p>
          </div>
          <div className="buttons">
            <a href="https://cartickmeet.onrender.com" className="preview" target="_blank" rel="noreferrer">
              Preview <i className="fas fa-external-link-alt" />
            </a>
            <a href="https://github.com/karthikgarikina/video-chat-app" className="github" target="_blank" rel="noreferrer">
              GitHub <i className="fab fa-github" />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-2">
          <div className="image-2" />
          <div className="info-2">
            <p>
              Student Skill Predictor is a ML tool that predicts coding skill levels using metrics from coding
              platforms like LeetCode, GeeksforGeeks, etc.
            </p>
            <p>Duration : 2 days</p>
            <p>Technology : Python, Machine Learning, streamlit</p>
          </div>
          <div className="buttons">
            <a
              href="https://codingskillpredictor-fusudw95jpr5vogbmhdu2m.streamlit.app/"
              className="preview"
              target="_blank"
              rel="noreferrer"
            >
              Preview <i className="fas fa-external-link-alt" />
            </a>
            <a href="https://github.com/karthikgarikina/coding_skill_predictor" className="github" target="_blank" rel="noreferrer">
              GitHub <i className="fab fa-github" />
            </a>
          </div>
        </div>
        <div data-aos="fade-up" className="project-3">
          <div className="image-3" />
          <div className="info-3">
            <p>
              InsightFlow is a multi-tenant SaaS analytics dashboard built for scalable business intelligence.
            </p>
            <p>Duration : 3 Weeks</p>
            <p>Technology : Django, React.js, PostgreSQL, Redis, OAuth, REST APIs</p>
          </div>
          <div className="buttons">
            <a href="https://github.com/karthikgarikina/multi-tenant-analytics-dashboard-with-Django" className="github" target="_blank" rel="noreferrer">
              GitHub <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
