import React from 'react';
import Link from 'next/link';
import { FaGithub, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Change to camelCase: currentYear
  return (
    <div id="section_footer">
      <div className="text-center py-4">
        <Link href="/privacy" className="btn btn-link">
          Privacy
        </Link>
        <span className="mx-4">|</span>
        <Link href="/terms" target="_blank" className="btn btn-link">
          Terms
        </Link>
        <span className="mx-4">|</span>
        <Link href="mailto:aryamanatcdac<aryamanm@buffalo.edu>" className="btn btn-link">
          Contact
        </Link>
        <p>Copyright © {currentYear}, Maury, Sarika, Daniya, Kristian, Aryaman. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="https://github.com/AryamanHM" target="_blank" className="btn btn-link">
            <FaGithub size={24} />
          </Link>
          <Link href="https://www.youtube.com/channel/UCt0HCR_1LSKB4YdU5DUrFWg" target="_blank" className="btn btn-link">
            <FaYoutube size={24} />
          </Link>
          <Link href="https://www.linkedin.com/in/aryaman-mishra-hangmansky/" target="_blank" className="btn btn-link">
            <FaLinkedin size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
