import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Health Care Website"
          des=" This is wordpress website designed and developed by considering clients requirement and done SEO optimization for same. "
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" This project is E-commerce website designed for client showcasing product manufactured in there company"
          src={projectTwo}
        />
        <ProjectsCard
          title="Health Care Website"
          des="This is wordpress website designed and developed by considering clients requirement and done Digital Marketing for there services."
          src={projectThree}
        />
        
      </div>
    </section>
  );
}

export default Projects