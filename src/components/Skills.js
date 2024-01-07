import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const services = [
  {
    name: 'HTML5',
    description: 'HTML is the foundational markup language used to create and structure content on the World Wide Web',
    link: 'https://www.w3schools.com/html/',
  },
  {
    name: 'CSS',
    description: 'CSS is a styling language used to control the presentation and layout of HTML documents on the web.',
    link: 'https://www.w3schools.com/css/default.asp',
  },
  {
    name: 'TAILWIND',
    description: 'Tailwind CSS is a utility-first CSS framework simplifying web development through pre-defined classes for streamlined styling.',
    link: 'https://tailwindcss.com/',
  },
  {
    name: 'JAVA SCRIPT',
    description: 'JavaScript is a dynamic scripting language commonly used for web development to create interactive and dynamic user interfaces.',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'REACT JS',
    description: 'React.js is a JavaScript library for building user interfaces, enabling efficient creation of interactive and reusable UI components.',
    link: 'https://legacy.reactjs.org/docs/getting-started.html',
  }
];

const Skills = () => {
  return <div id='service' className='section lg:mt-1 mt-5 ' >

    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row lg:gap-5 '>

        <motion.div
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, ammount: 0.3 }}
          className='flex-1 lg:bg-services lg:bg-bottom  bg-no-repeat mix-blend-lighten sm:mb-2 mb:5 lg:mb-0 '>
          <h2 className='h2 text-yellow-400 font-bold mb-6'> My tech Skills</h2>
          <h3 className='h3 ma-w-[455px] mb-16 t '> I am a Creative frontend developer fluent in HTML, CSS, Tailwind, JavaScript, & React
            dedicated to building sleek, intuitive user interfaces that elevate web experiences. </h3>
          <Link to='projects' >
            <button className='btn btn-sm ' > See My work</button>
          </Link>

        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, ammount: 0.3 }}
          className='my-10 mt-24 skills-part '
        >
          <div className='flex-1'>
            {services.map((service, index) => {
              return (
                <div className=' p-2 skill-part  sm:h-[146px] h-[170px] mb-[0px] flex   ' key={index}>
                  <div className='max-w-[476px]  '>
                    <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6 '>{service.name}</h4>
                    <p className='font-secondary leading-tight '>{service.description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end '>
                    <a href={service.link} className='btn w-9 h-9 mb-[42px] flex justify-center items-center  '>
                      <BsArrowUpRight />
                    </a>
                    <p className='text-gradient text-sm '>
                      Learn More
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>

      </div>

    </div>

  </div>;
};

export default Skills;
