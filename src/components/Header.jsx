import React from "react";
import Settings from "../Settings/Settings";
import "../Styles/Header.css";

const Header = () => {
  return (
    <div className="header container">
      <h1> {Settings.name} </h1>
   
      <a href="https://rishabhresume17.tiiny.site/" target="_blank" rel="noopener noreferrer" className="resume-link">
        View My Resume
      </a>
      <p> {Settings.position} </p>

      <p className="header_para">
        As a Front-End Developer with a keen eye for design and a solid grasp of
        technical fundamentals, I excel at creating engaging, user-centered
        digital experiences. My proficiency in front-end technologies, including
        React, JavaScript, HTML, CSS, and responsive design frameworks like
        Bootstrap and TailwindCSS, enables me to build intuitive,
        high-performance applications that meet modern UX standards. I am adept
        at transforming design mockups into interactive, scalable, and
        responsive web interfaces that are optimized for both usability and
        functionality. With a background in full-stack foundations and hands-on
        experience managing front-end complexities, I bring an understanding of
        cross-browser compatibility, SEO principles, and web accessibility,
        ensuring that the applications I build reach and serve diverse user
        bases effectively. My commitment to clean, maintainable code and
        adherence to industry best practices make me a valuable team player who
        can collaborate with back-end engineers, UI/UX designers, and
        stakeholders to deliver polished, cohesive products. In addition to my
        technical skills, my role as PR Head of a dance society has strengthened
        my project management and communication abilities, allowing me to bring
        leadership and a collaborative spirit to any team. I am dedicated to
        continuous learning and keeping up with the latest advancements in
        front-end development, including modern frameworks like Next.js and
        tools such as Firebase. Ready to bring innovative ideas to life, I am
        excited to contribute to a team where I can apply my technical expertise
        and creative problem-solving skills to deliver impactful digital
        experiences.
      </p>
    </div>
  );
};

export default Header;
