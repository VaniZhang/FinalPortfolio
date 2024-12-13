import React from "react";
import aboutBg from "../assets/about-bg.jpg";
import profilePic from "../assets/profile-pic.jpg"; // Replace with your profile picture path
import "./About.css";

const About = () => (
  <div
    className="about"
    style={{
      backgroundImage: `url(${aboutBg})`,
    }}
  >
    <div className="about-content">
      <div className="about-image">
        <img src={profilePic} alt="Vani Zhang" />
      </div>
      <div className="about-text">
        <h1>About Me</h1>
        <p>
          <strong>Vani Zhang</strong>
        </p>
        <p>UX/UI Designer</p>
        <p>Cognitive Science in Interaction Design at UCSD</p>
      </div>
    </div>
  </div>
);

export default About;