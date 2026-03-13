import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>Octanet Services</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Developed and maintained responsive web applications using HTML, CSS,
              JavaScript, and Node.js. Collaborated on version control and project
              workflows using Git and GitHub. Actively participated in sprint meetings,
              requirement gathering, and agile development practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Student Intern / Trainee</h4>
                <h5>DRDO – Gas Turbine Research Establishment</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Working on research-oriented engineering and software-related tasks under
              DRDO scientists and technical staff. Gaining hands-on exposure to
              defense-grade systems, project documentation, and real-world problem-solving
              while adhering to strict confidentiality and organizational protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
