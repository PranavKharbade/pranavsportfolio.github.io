import React from 'react'
import { FaFacebookF,  FaLinkedinIn, FaReact } from "react-icons/fa";
import { Helmet } from 'react-helmet';
import { SiCss3, SiHtml5,SiTypescript,SiJavascript, SiWordpress,SiAzuredevops } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          
          <Helmet>
          <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
          </h2>
        <meta name="contact details" content="contact details of pranav kharbade" />
      </Helmet>
            
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://www.facebook.com/pranav.kharbade/" target="_blank" >
              <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a href='https://www.linkedin.com/in/pranavkharbade/' target="_blank" >            
                <FaLinkedinIn />
            </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
            <span className="bannerIcon">
              <SiTypescript />
            </span>
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
          </div>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiCss3 />
            </span>
            <span className="bannerIcon">
              <SiAzuredevops />
            </span>
            <span className="bannerIcon">
              <SiWordpress />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media