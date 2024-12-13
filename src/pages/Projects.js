import React from "react";
import projectsBg from "../assets/projects-bg.jpg"; // Background image
import project1 from "../assets/project1.jpg"; // Project 1 image
import project2 from "../assets/project2.jpg"; // Project 2 image
import project3 from "../assets/project3.jpg"; // Project 3 image
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Cyberpunk",
      description: "Poster made in 12/09/2024.",
      image: project1, // Path to image
    },
    {
      title: "Illusion",
      description: "Creative Artwork made in 11/15/2024.",
      image: project2, // Path to image
    },
    {
      title: "Chaos",
      description: "Selfie Art made in 10/27/2024.",
      image: project3, // Path to image
    },
  ];

  return (
    <div
      className="projects"
      style={{
        backgroundImage: `url(${projectsBg})`, // Dynamically set background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <h1>My Projects</h1>
      <p>Here are some of my favorite projects.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            {/* Image tag with dynamic src */}
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
