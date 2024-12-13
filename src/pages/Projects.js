import React from "react";
import projectsBg from "../assets/projects-bg.jpg";
import project1 from "../assets/project1.jpg"; // Import project images
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Cyberpunk",
      description: "Poster made in 12/09/2024.",
      image: project1, // Use the imported image
    },
    {
      title: "Illusion",
      description: "Creative Artwork made in 11/15/2024.",
      image: project2, // Use the imported image
    },
    {
      title: "Choas",
      description: "Selfie Art made in 10/27/2024.",
      image: project3, // Use the imported image
    },
  ];

  return (
    <div
      className="projects"
      style={{
        backgroundImage: `url(${projectsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1>My Projects</h1>
      <p>Here are some of my favorite projects.</p>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
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
