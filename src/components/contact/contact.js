"use client";
import React,{useState,useEffect} from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mode = document.body.classList.contains("dark-mode");
    setIsDarkMode(mode);

    const observer = new MutationObserver(() => {
      const updatedMode = document.body.classList.contains("dark-mode");
      setIsDarkMode(updatedMode);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });t
    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="contact"
      className="flex justify-center items-center min-h-[60vh] md:min-h-[40vh] lg:min-h-[80vh] py-10 relative z-10"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-64 w-64 md:h-80 md:w-80 z-0 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-10 text-center">
        <h5 className={`text-xl font-bold my-2 ${isDarkMode ? 'text-white' : 'text-black'}`}>
          Let&apos;s Connect
        </h5>
        <p className="text-[#ff8080] mb-4 max-w-md mx-auto">
          Feel free to connect with me through GitHub or LinkedIn!
        </p>
        <div className="socials flex justify-center gap-4">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className={`text-2xl hover:text-gray-400 ${isDarkMode ? 'text-white' : 'text-black'}`} />
          </Link>
          <Link href="https://www.linkedin.com/in/yashvi-mer-b6469a309" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className={`text-2xl hover:text-gray-400 ${isDarkMode ? 'text-white' : 'text-black'}`} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
