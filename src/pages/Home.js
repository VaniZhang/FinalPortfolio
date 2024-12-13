import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <motion.div
      className="home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="home-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }} // Gradual appearance over 2 seconds
      >
        <motion.h1
          style={{ color: "#8B0000" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }} // Smooth fade-in with upward motion
        >
          Welcome to Vani's World
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 1 }} // Delay for gradual appearance
        >
          Explore my work and get to know me better!
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Home;