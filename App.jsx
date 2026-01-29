import { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";
import profilePic from "./assets/profile.jpg";
import { Linkedin, Github, Mail } from "lucide-react";
import wiprologo from "./assets/wiprologo.png";
import wiproCertificate from "./wiprointern.pdf";
import project1 from "./assets/portfolio.png";
import project2 from "./assets/pizza.png";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container nav-inner">
          <div className="nav-logo">Zeba</div>

          <div
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <div className="page-wrapper">
        {/* HERO */}
        <motion.section
          id="home"
          className="hero"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={profilePic} alt="Zeba Naaz" className="profile-pic"></img>
          <h1>Zeba Naaz</h1>
          <p>MERN Stack Developer | MCA Graduate |project Intern-Wipro </p>
        </motion.section>
         <p className="tagline">
        </p> 
      {/* About Section */}
      <motion.section
        id="about"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>
      <div class= "outerdiv">
        <h2>About Me</h2>
        <p>
          Hi, I’m Zeba Naaz — an MCA graduate and aspiring software developer with a strong interest in web technologies.
          I enjoy building clean, user-friendly applications and turning ideas into functional digital experiences.
          During my internship at Wipro, I worked on real-world tasks that strengthened my problem-solving skills and helped me understand how development works in a professional environment.
          I’m always eager to learn, explore new technologies, and grow as a developer while contributing to meaningful projects.
        </p>
      </div> 
      </motion.section>

      {/* EDUCATION */}
      <motion.section
        id="education"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}>

        <div className="education">
          <h2>Education</h2>
          <div className="edu-card">
            <h3>Master of Computer Applications (MCA)</h3>
            <p>Omega PG college</p>
            <p>CGPA - 8.2</p>
            <span>2023 – 2025</span>
          </div>

          <div className="edu-card">
            <h3>Bachelor of Science (B.Sc)</h3>
            <p> Swami Vivekananda Degree & PG College</p>
            <p>CGPA - 8.8</p>
            <span>2020 – 2023</span>
          </div>
        </div>  
      </motion.section>

      {/* Internship */}
      <section id="experience" className="section">
        <h2>Internship Experience</h2>

        <motion.div
          className="experience-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}>
          <img
            src={wiprologo}
            alt="Wipro"
            className="company-logo" />
          <div className="experience-content">
            <h3>IT Intern</h3>
            <p className="company">Wipro</p>
            <p className="duration"> November 2024 – November 2025</p>
            <ul>
              <li>Developed responsive web pages using <strong>HTML, CSS, and React.js</strong>.</li>
              <li>Built reusable UI components to improve consistency and maintainability.</li>
              <li>Worked on basic frontend logic and state management in React.</li>
              <li>Collaborated with mentors to debug issues and enhance user experience.</li>
              <li>Gained hands-on experience with real-world development workflows.</li>
            </ul>
            <a href={wiproCertificate}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn">
              View Internship Certificate</a>
          </div>
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card">
            <img src={project1} alt="AI E-commerce Pricing" />
            <div className="project-content">
              <h3>Portfolio</h3>
              <p>
                A portfolio website created using ReactJS and CSS to showcase my projects, skills, and learning journey in web development.
                This project reflects my ability to build responsive and user-friendly interfaces.
              </p>
              <div className="tech-stack">
                <span>React.js</span>
                <span>CCS</span>
              </div>
              <a href="https://github.com/Zeba-Naaz-z"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn">
                View on GitHub
              </a>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card">
            <img src={project2} alt="Cricket Dismissal Analytics" />
            <div className="project-content">
              <h3>Pizza Web</h3>
              <p>
                Developed a fully responsive pizza ordering website using HTML, CSS and javaScript.
                Implemented modern UI design, mobile responsiveness, and reusable components to create a smooth user experience.
              </p>
              <div className="tech-stack">
                <span>Html</span>
                <span>Css</span>
                <span>JavaScript</span>
              </div>
              <a href="https://github.com/Zeba-Naaz-z/Pizza-Web.git"
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn">
                View on GitHub
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* Skills Section */}
      <motion.section
        id="skills"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2>Skills</h2>
        <ul className="skills">
          <li>Frontend: HTML, CSS, JavaScript, React.js</li>
          <li>Backend & APIs : Express.js, REST APIs</li>
          <li>Database: MySQL, MongoDB</li>
          <li>Version Control System : Git & GitHub</li>
        </ul>
      </motion.section>

     {/* CONTACT SECTION */}
<section id="contact" className="section contact-section">
  <h2 className="section-title">Get In Touch</h2>

  <div className="contact-card">
    {/* LEFT SIDE */}
    <div className="contact-info">
      <h3>Contact Information</h3>
      <p>
        Feel free to reach out to me via email & connect with me on social media.
        I’m always open to discussing new opportunities and projects.
      </p>

      <div className="contact-item">
        <a href="mailto:naazzeba149@email.com">
      <Mail size={24} />
      <span>naazzeba149@email.com</span>
    </a>
      </div>

      <div className="contact-item">
         <a
      href="https://www.linkedin.com/in/zebanaaz1"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin size={24} />
      <span>LinkedIn</span>
    </a>
      </div>

      <div className="contact-item">
        <a
      href="https://github.com/Zeba-Naaz-z"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github size={24} />
      <span>GitHub</span>
    </a>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <form className="contact-form">
      <label>Full Name</label>
      <input type="text" placeholder="Your name" />

      <label>Email Address</label>
      <input type="email" placeholder="Your email" />

      <label>Message</label>
      <textarea placeholder="Write your message..." rows="4"></textarea>

      <button type="button">Send Message</button>
    </form>
  </div>
</section>

      

    </div>
  </>
  );
}
export default App;
