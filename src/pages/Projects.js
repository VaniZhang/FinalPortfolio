import React from "react";
import projectsBg from "../assets/projects-bg.jpg";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Cyberpunk",
      description: "Poster made in 12/09/2024.",
      image: `${process.env.PUBLIC_URL}/assets/project1.jpg`, // Updated path
    },
    {
      title: "Illusion",
      description: "Creative Artwork made in 11/15/2024.",
      image: `${process.env.PUBLIC_URL}/assets/project2.jpg`, // Updated path
    },
    {
      title: "Chaos",
      description: "Selfie Art made in 10/27/2024.",
      image: `${process.env.PUBLIC_URL}/assets/project3.jpg`, // Updated path
    },
  ];

  return (
    <div
      className="projects"
      style={{
        backgroundImage: `url(${projectsBg})`, // Updated background path
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
