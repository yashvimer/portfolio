import Nav from '@/components/home/nav';
import React from 'react'
import HeroSection from '../herosection/page';
import About from '@/components/about/about';
import Footer from '@/components/footer/footer';
import Contact from '@/components/contact/contact';
function Home() {
  return (
    <div>
   <Nav/>
   <HeroSection/>
   <About />
   {/* <Home/> */}
   <Contact/>
   <Footer/>
    </div>
  )
}

export default Home;
