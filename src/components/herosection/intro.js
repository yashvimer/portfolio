"use client";
import React from 'react';
import { useState, useEffect } from 'react';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Image from 'next/image';
import develop from '../../../public/logo/devloper1.jpg';

const Intro = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        const updateMode = () => {
            const mode = document.body.classList.contains("dark-mode");
            setIsDarkMode(mode);
        };
        updateMode();

        const observer = new MutationObserver(updateMode);
        observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);
    return (
        <section className="lg:py-16 md:py-10 sm:py-10 px-4 sm:px-8 lg:px-12 min-h-[auto] md-min-h-[80vh] relative z-10" id="home">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-12 sm:col-span-7 text-center sm:text-left sm:text-left mt-6 sm:mt-8 md:mt-10 lg:mt-12"
                >
                    <h1
                        className={`mb-4 text-4xl sm:text-5xl lg:text-8xl font-extrabold ${isDarkMode ? "text-white" : "text-black"
                            }`}
                    >
                        <span style={{ color: "#FF00FF" }}>Hello, I&apos;m</span>{" "}
                        <TypeAnimation
                            sequence={["Yashvi", 1000, "Frontend Developer", 1000]}
                            wrapper="span"
                            speed={6}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ff8080] text-base sm:text-lg mb-6 lg:text-xl">
                        {/* I create clean and efficient web designs for a seamless user experience. */}
                        I create responsive and user-friendly web interfaces.
                    </p>
                </motion.div>

                <div className="col-span-12 sm:col-span-5 flex justify-center sm:justify-end m-7 relative image-container">
                    <Image
                        src={develop}
                        alt="developer"
                        className="w-auto h-auto rounded-full"
                    />
                </div>
            </div>
        </section>
    );
};

export default Intro;
