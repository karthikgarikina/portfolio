export default function HomeSection() {
  return (
    <div className="home-section" id="home">
      <div className="about-me">
        <div className="img-layout">
          <div className="my-img" />
        </div>
        <div className="my-words">
          <h1>
            Hello, I&apos;m Karthik <br />
            Full Stack Web Developer &amp; AI Engineer
          </h1>
          <a className="deal" href="#contact">
            Make a Deal <i style={{ color: "black" }} className="fas fa-hand-holding" />
          </a>
        </div>
      </div>
      <div className="skills">
        <div data-aos="fade-right" className="front-end">
          <div className="front-end-content">
            <h2>Full Stack Web Development</h2>
            <p>
              <span style={{ color: "green" }}>●</span> Proficient in building scalable, responsive, and high-performance full-stack web applications using React, JavaScript, Node.js, Django, Python and modern development practices.
            </p>
            <p>
              <span style={{ color: "green" }}>●</span> Skilled in designing and developing RESTful APIs, backend architectures, and efficient database solutions using PostgreSQL and MongoDB.
            </p>
            <p>
              <span style={{ color: "green" }}>●</span> Experienced in creating optimized end-to-end systems with Git/GitHub collaboration, API integration, authentication, deployment, and performance-focused development.
            </p>
          </div>
        </div>
        <div data-aos="fade-left" className="genai">
          <div className="genai-content">
            <h2>AI Engineering</h2>
            <p>
              <span style={{ color: "green" }}>●</span> Skilled in building AI-powered applications and autonomous agents to automate real-world workflows using modern LLM architectures and AI engineering practices.
            </p>
            <p>
              <span style={{ color: "green" }}>●</span> Hands-on experience with Ollama, OpenAI APIs, Hugging Face, GraphQL, vector databases, prompt engineering, and modern AI orchestration frameworks.
            </p>
            <p>
              <span style={{ color: "green" }}>●</span> Built responsive real-world AI projects including chatbots, AI automation systems, intelligent assistants, and full-stack AI-integrated applications.
            </p>
          </div>
        </div>
        <div data-aos="fade-right" className="cp">
          <div className="cp-content">
            <h2>Competitive Programming</h2>
            <p>
              <span style={{ color: "green" }}>●</span> Strong problem-solving skills with focus on Data
              Structures and Algorithms.
            </p>
            <p>
              <span style={{ color: "green" }}>●</span> Experience on platforms like LeetCode, Codeforces,
              and GeeksforGeeks.
            </p>
            <p>
              <span style={{ color: "green" }}>●</span> Regular participation in contests to improve speed,
              accuracy, and logic-building.
            </p>
            <a
              href="https://codolio.com/profile/karthiiji"
              target="_blank"
              rel="noreferrer"
              style={{ width: "fit-content" }}
              className="send-btn"
            >
              Coding profiles <i className="fas fa-code" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
