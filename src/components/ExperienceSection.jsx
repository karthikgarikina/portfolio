export default function ExperienceSection() {
  return (
    <div className="experience-section" id="experience">
      <h1>Experience That Shapes Me</h1>
      <div className="experience">
        <div data-aos="fade-left" className="exp-card">
          <h3>Full Stack Development Intern – Technical Hub</h3>
          <span className="exp-date">May – Jun 2025</span>
          <ul>
            <li>
              Developed responsive and visually rich web pages using HTML5, CSS3, Flexbox, and Grid for
              real-time projects.
            </li>
            <li>Applied semantic HTML and accessible design techniques to enhance usability across devices.</li>
            <li>Strengthened JavaScript and React.js skills to contribute to interactive front-end development.</li>
          </ul>
        </div>
        <div className="image" />
      </div>

      <div className="education">
        <h1>My Education</h1>

        <div className="edu-item" data-aos="fade-down">
          <span className="edu-year">2023 – 2027</span>
          <div className="edu-details">
            <h3>Bachelor of Technology</h3>
            <p>
              At <strong>Aditya College of Engineering and Technology</strong>
            </p>
          </div>
          <span className="edu-desc">B.Tech in AIML | Current GPA: 8.26</span>
        </div>

        <div className="edu-item" data-aos="fade-down">
          <span className="edu-year">2021 – 2023</span>
          <div className="edu-details">
            <h3>Higher Secondary Education [M.P.C]</h3>
            <p>
              At <strong>Narayana Junior College</strong>
            </p>
          </div>
          <span className="edu-desc">Percentage: 92%</span>
        </div>
      </div>
    </div>
  );
}
