import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";
import Helmet from "react-helmet";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Frontend Developer.",
      "Video Editor.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Pranav Kharbade</span>
        </h1>
        <Helmet>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Pranav Kharbade</span>
        </h1>
          <meta name="Introduction" content="Introduction of Pranav Kharbade" />
        </Helmet>

        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Strong proficiency in JavaScript, Wordpress, object model and
          Typescript. Complete understanding of ReactJS and its main
          fundamentals like JSX, Virtual DOM, component lifecycle, etc.
          Excellent Communication skills Preceding experience with ReactJS
          workflows like Redux. Understanding of GraphQL, HTML/CSS, code
          versioning tools like GIT, SVN, etc.
        </p>
        <Helmet>
          <meta
            name="Introduction"
            content="Pranav Kharbade is Strong proficient in JavaScript, Wordpress, object model and Typescript.
        Complete understanding of ReactJS and its main fundamentals like JSX, Virtual DOM, component lifecycle, etc.
        Excellent Communication skills
        Preceding experience with ReactJS workflows like Redux.
        Understanding of GraphQL, HTML/CSS,  code versioning tools like GIT, SVN, etc.,"
          />
        </Helmet>
      </div>
      <Media />
    </div>
  );
};

export default LeftBanner;
