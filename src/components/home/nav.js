"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"; 
import develop1 from '../../../public/logo/ymlogo6.png';
import DarkMode from '@/app/darkmode/page';



function Nav({onChange}) {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <> 
    <Navbar className="sticky top-0 z-50 flex justify-between items-center w-full py-4 border-b-2 border-gray-300 bg-black">
      <NavbarBrand className="ml-4">  
        <Image src={develop1} width={70} height={45} alt='developer'/>
      </NavbarBrand>

      {/* Hamburger icon for small screens */} 
      <div className="md:hidden mr-4" onClick={toggleMenu}>
        {menuOpen ? <FaTimes className="text-white text-3xl" /> : <FaBars className="text-white text-3xl" />}
      </div>

      
      <div className={`md:flex md:items-center md:gap-8 ${menuOpen ? "flex" : "hidden"} flex-col md:flex-row absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent`}>
        <NavbarContent className="flex flex-col md:flex-row gap-8 items-center w-full md:w-auto">
          <NavbarItem>
            <Link to="home" smooth={true} duration={500} style={{ cursor: "pointer" }} className="nav-link text-white">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="about" smooth={true} duration={500} style={{ cursor: "pointer" }} className="nav-link text-white">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="contact" smooth={true} duration={500} style={{ cursor: "pointer" }} className="nav-link text-white">
              Contact
            </Link>
          </NavbarItem>

          <div className="flex gap-8 justify-center w-full md:w-auto mt-6 md:mt-0 pr-4">
            <NavbarItem>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-white text-2xl hover:text-gray-400" />
              </a>
            </NavbarItem>
            <NavbarItem>
              <a href="https://www.linkedin.com/in/yashvi-mer-b6469a309" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-2xl hover:text-gray-400" />
              </a>
            </NavbarItem>
            <NavbarItem style={{marginTop:'-12px',marginLeft:'-60px'}}>
             <DarkMode onChange={onChange} />
            </NavbarItem>
          </div>
          
        </NavbarContent>
      </div>
    </Navbar>
    </>
  );
}

export default Nav;




