import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { Helmet } from 'react-helmet';
const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
      <h3 className="text-3xl font-bold text-white">Pranav Kharbade</h3>
      <Helmet>
      <h3 className="text-3xl font-bold text-white">Pranav Kharbade</h3>
        <meta name="name" content="Pranav Kharbade" />
      </Helmet>
      <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <Helmet>
        <p className="text-lg font-normal text-gray-400">
          Frontend Developer
        </p>
        <meta name="Designation" content="Pranav Kharbade is a Frontend Developer" />
      </Helmet>
      <p className="text-base text-gray-400 tracking-wide">
          76, Manewada, Nagpur, 440027, Maharashtra, India
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8668417006</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">pranav.kharbade@gmail.com</span>
        </p>
      <Helmet>
      <p className="text-base text-gray-400 tracking-wide">
          76, Manewada, Nagpur, 440027, Maharashtra, India
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 8668417006</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">pranav.kharbade@gmail.com</span>
        </p>
        <meta name="address and contact details of Pranav Kharbade" content="76, Manewada, Nagpur, 440027, Maharashtra, India pranav.kharbade@gmail.com" />
        <meta name="email id and contact details of Pranav Kharbade" content="+91 8668417006 pranav.kharbade@gmail.com" />
       
      </Helmet>
        
      </div>
      <div className="flex flex-col gap-4">
      <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
      <Helmet>
      <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <meta name="contact link" content="social media links of Pranav Kharbade" />
      </Helmet>
        
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaFacebookF />
          </span>
          <span className="bannerIcon">
            <FaTwitter />
          </span>
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft