import React from 'react';
import { myProjects } from '../data/myProjects';
import BasicParticlesBackground from '../effects/BasicParticlesBackground';

const Projects = () => {
  return (
    <section id="projects"
     className="relative min-h-screen px-6 py-20 bg-secondary">
      <BasicParticlesBackground colorVariant="primary" />
      <h2 className="text-3xl font-bold mb-8 text-center text-primary">Projects</h2>
      <div className="grid md:grid-cols-2 text-center gap-10 text-secondary">
        {myProjects.map((project, idx) => (
          <div key={idx} className="bg-primary rounded-2xl overflow-hidden shadow hover:scale-105 transition z-10">
            <img src={project.image} alt={project.name}  className="mx-auto mt-4 w-50% max-h-64 object-contain rounded-t-2xl bg-white" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap text-xs text-primary">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-secondary px-2 py-1 rounded-2xl">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="inline-block mt-4 text-secondary hover:underline">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;