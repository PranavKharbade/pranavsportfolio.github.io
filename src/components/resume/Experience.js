import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Senior Software Engineer"
            subTitle="GlobalLogic India Ltd."
            result="Nagpur, India"
            des="We are currently engaged in a client project focused on developing a secure file storage system. Our approach involves building components entirely from the ground up, leveraging micro frontend techniques to manage the core elements, and seamlessly integrating necessary components with various APIs."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="Xoriant Solution Ltd."
            result="Pune, India"
            des="Worked on 1 projects of E-commerce client, in which I have Designed and developed UI of web based applications using Angular, HTML, CSS, JavaScript ."
          />
          <ResumeCard
            title="Senior System Engineer"
            subTitle="Infosys Ltd."
            result="Nagpur, India"
            des="Designed and Developed the UI of 4 web-based applications using ReactJS, HTML, CSS, and javascript for the E-commerce client of Infosys."
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div> */}
      {/* </div> */}
    </motion.div>
  );
};

export default Experience;
