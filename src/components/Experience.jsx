import React, { useState } from "react";
import { myExperience } from "../data/myExperience";
import BasicParticlesBackground from "../effects/BasicParticlesBackground";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section 
    id="experience" 
    className="relative min-h-screen bg-primary px-6 py-20"
    >
      <BasicParticlesBackground colorVariant="secondary" />
      
      <h2 className="text-3xl font-bold mb-16 text-center text-secondary">
        Experience
      </h2>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-accent/40 transform -translate-x-1/2" />

        {myExperience.map((exp, index) => {
          const isLeft = index % 2 === 0;
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`relative mb-12 flex items-start w-full ${
                isLeft ? "justify-start" : "justify-end"
              }`}
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 top-[42px] z-10">
                <span className="w-4 h-4 bg-accent rounded-full inline-block border-2 border-primary" />
              </div>

              <div
                className={`w-[calc(50%-20px)] p-5 rounded-md bg-secondary/10 shadow-md cursor-pointer transition
                ${isLeft ? "text-right pr-8" : "text-left pl-8"}
                ${isActive ? "bg-secondary/20" : "hover:bg-secondary/15"}`}
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-secondary">
                  {exp.role} <span className="text-accent">—</span>{" "}
                  {exp.company}
                </h3>
                <p className="text-sm text-secondaryOffset">
                  {exp.startDate} - {exp.endDate}
                </p>

                {isActive && (
                  <p className="mt-3 text-secondary transition-all duration-300 ease-in-out">
                    {exp.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
