import React from 'react';
import Banner from './Banner';
import Header from './Header';
import Nav from './Nav';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';


const AllRoutes = () => {
  return (
    <div className='flex flex-col gap-y-2 ' >
      <Header />
      <Banner />
      <Nav />
      <About />
      <Skills />
      <Work />
      <Contact />


    </div>
  )
}

export default AllRoutes