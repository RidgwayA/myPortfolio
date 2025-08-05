import React from "react";
import BasicParticlesBackground from "../effects/BasicParticlesBackground";
import { EvervaultCard } from "../effects/evervault-card";

import { FaJava, FaReact } from "react-icons/fa";
import { SiPostgresql, SiSpringboot, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { mySkills } from "../data/mySkills";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-10 py-20 bg-secondary"
    >
      <BasicParticlesBackground colorVariant="primary" />

      {/* About Me */}
      <div className="md:w-1/2 mb-10 md:mb-0 z-10">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          I’m a software engineer with a passion for building clean, scalable
          web applications that solve real-world problems. With experience in
          full-stack development using Java, Python, React, and Spring Boot, I
          bring ideas to life through elegant, maintainable code. Whether
          freelancing or working on personal projects, I focus on building
          user-friendly and efficient applications that balance both
          functionality and performance.
        </p>
        <p className="mt-4 text-lg">
          My background in banking, business operations, and property management
          gives me a unique lens when approaching software challenges. I
          understand how to align technical solutions with practical
          needs—bridging the gap between code and client goals. Over the past
          five years, I’ve completed 10+ hands-on projects, including Android
          apps, interactive websites with database integration, and
          containerized deployments with Docker.
        </p>
        <p className="mt-4 text-lg"> 
          Grounded in customer service, team collaboration, and process optimization, I bring a well-rounded, analytical approach to every role. With a degree in software development, industry certifications, and a hunger for continuous learning, I’m eager to grow with forward-thinking teams and contribute to impactful, technology-driven solutions.
        </p>
      </div>

      <div className="md:w-1/2 z-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {mySkills.map((item, idx) => (
            <div
              key={idx}
              className="flex text-center items-center justify-center h-[7rem] bg-primary border border-primary rounded-md"
            >
              <EvervaultCard text={item.title} icon={item.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
