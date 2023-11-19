import React from 'react'
import { Helmet } from 'react-helmet';
const FooterBottom = () => {
  return (
    <div className="w-full py-10">
       <Helmet>
       <meta name="copyrights of Pranav kharbade" content="copyrights of Pranav kharbade" />
      </Helmet>
       <p className="text-center text-gray-500 text-base">
        © 2023. All rights reserved by pranavkharbade
      </p>
       
      
    </div>
  );
}

export default FooterBottom