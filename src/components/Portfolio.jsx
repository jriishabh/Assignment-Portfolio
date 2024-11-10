import React from "react";
import Projects from "../Settings/Projects";
import "../Styles/Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio container">
      <h1>Projects</h1>
      <div className="projects">
        {Projects.map((data, index) => (
          <div 
            className="project" 
            key={index} 
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div className="project-content">
              <h3> {data.name} </h3>
              <a href={data.link} target={"_blank"} rel="noopener noreferrer">
                Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
