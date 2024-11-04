"use client";
import React, { useTransition, useState, useEffect } from "react";
import Image from "next/image";
import Tabbutton from "./tabbutton";
import develop from "../../../public/logo/dev.png";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid md:grid-cols-2 gap-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React js</li>
        <li>Next js</li>
        <li>Bootstrap</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Computer Application (BCA)</li>
        <li>Master of Computer Science In Information Technology (MSci - IT)</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Aug 2023: Frontend Developer @ AeonX Digital Solutions</li>
        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
          Present
        </span>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  useEffect(() => {
    const mode = document.body.classList.contains("dark-mode");
    setIsDarkMode(mode);

    const observer = new MutationObserver(() => {
      const updatedMode = document.body.classList.contains("dark-mode");
      setIsDarkMode(updatedMode);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const textColor = isDarkMode ? "text-white" : "text-black";
  const inactiveTabColor = isDarkMode ? "text-gray-400" : "text-gray-700";

  return (
    <section className={`text-black dark:text-white`} id="about">
      <div className="mt-16 sm:mt-8 md:mt-12 xl:mt-16 md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex justify-center items-center">
          <Image
            src={develop}
            width={400}
            height={400}
            style={{ borderRadius: "20px" }}
            alt="developer image"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className={`text-4xl font-bold mb-4 ${textColor}`} style={{ marginTop: "60px" }}>
            About Me
          </h2>
          <p className={`text-base lg:text-lg ${textColor}`}>
            Hello! I’m Yashvi, a passionate Front-End Developer dedicated to creating visually appealing
            and user-friendly web applications. With expertise in HTML, CSS, and JavaScript, I thrive on
            turning design concepts into functional and responsive interfaces. My experience includes
            working with modern frameworks like React and Next.js, allowing me to build seamless user
            experiences that engage and inspire. Let’s connect and create something amazing together!
          </p>
          <div className="flex flex-row justify-start mt-8">
            {TAB_DATA.map((tabInfo) => (
              <Tabbutton
                key={tabInfo.id}
                selectTab={() => handleTabChange(tabInfo.id)}
                active={tab === tabInfo.id}
                isDarkMode={isDarkMode}
                inactiveTabColor={inactiveTabColor}
              >
                {tabInfo.title}
              </Tabbutton>
            ))}
          </div>
          <div className={`mt-8 ${textColor}`}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

