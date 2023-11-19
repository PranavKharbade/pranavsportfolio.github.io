import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { Helmet } from 'react-helmet';
const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <Helmet>
        <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        <meta name="Education Quality" content="Education Quality" />
      </Helmet>
          
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor in Computer Engineering"
            subTitle="Nagpur University (2014 - 2017)"
            result="7.64/10"
            des="The training provided by universities in order to prepare people to work in various sectors of IT and Electronics Industry."
          />
          <ResumeCard
            title="Diploma in Computer Engineering"
            subTitle="SuperKing College (2011 - 2014)"
            result="7.74/10"
            des="Higher education is tertiary education leading to award of an academic degree. This course covers basic requirment and knowledge for computer engineering."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Benarasidas Ruiya High-School (2010 - 2011)"
            result="83%"
            des="Secondary education or post-primary education covers basic syllabus required for Higher Education."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="GlobalLogic - (2022 - Present)"
            result="Nagpur,India"
            des="Working as Web Developer in various project domains using React JS, Typescript,Javascript, HTML, CSS."
          />
          <ResumeCard
            title="Sr. Software Engineer "
            subTitle="Xoriant - (2021 - 2022)"
            result="Pune, India"
            des="Worked as Web Developer in Telecommunication project domains using Angular JS,Javascript, HTML, CSS."
          />
          <ResumeCard
            title="System Engineer"
            subTitle="Infosys Ltd. (2019 - 2021)"
            result="Nagpur"
            des="Completed Traning in MEAN and MERN stack and started Work as Web Developer using Angular JS,React JS,Javascript, HTML, CSS."
          />
           <ResumeCard
            title="Web Developer"
            subTitle="Access Multimedia (2018 - 2019)"
            result="Nagpur"
            des="Developed multiple projects base on clients requirement using wordpress"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education