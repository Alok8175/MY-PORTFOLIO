import React from 'react';
import Image from '../assets/alokimg.png'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {


  return <div id='home' className='min-h-[85vh] lg:min-h-[78vh] flex items-center  -my-10 lg:my-0 mt-3   ' >
    <div className=' container mx-auto homepage'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12  '>
        <div className=' flex-1 text-center font-secondary lg:text-left  '>
          <motion.h1
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, ammount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px] ' >ALOK <span>MAURYA</span>
          </motion.h1>
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, ammount: 0.7 }}
            className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1] '>
            <span className='text-white mr-4  ' >I am a</span>
            <TypeAnimation sequence={['UI/UX Designer ', 2500, 'Frontend Developer ', 2500, 'Video Editor ', 2500]}
              speed={50}
              className=' text-yellow-400 '
              repeat={Infinity}
            />
          </motion.div>
          <motion.p
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, ammount: 0.7 }}
            className='mb-8 max-w-lg mx-auto lg:mx-0  ' >Computer Science Expert and Tech Enthusiast looking to leverage education through hands-on learning
            and building applications.
          </motion.p>
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, ammount: 0.7 }}
            className=' flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0  ' >
            <button className='btn btn-lg' ><Link to='contact' >Contact Me</Link></button>

          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.7)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, ammount: 0.7 }}
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 ' >
            <a href='https://www.linkedin.com/in/alok-maurya-0372a0229' >
              <FaLinkedinIn />
            </a>
            <a href='https://github.com/Alok8175' >
              <FaGithub />
            </a>
            <a href='https://www.instagram.com/th_a_alok?igsh=MWxyaHY1ZTdoamFraw==' >
              <FaInstagram />
            </a>
            <a href='https://x.com/Alok8175?t=IePBbda_S94jsoWc0nSQbA&s=08' >
              <FaTwitter />
            </a>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
          // viewport={{once: false, ammount:0.7}}
          className='hidden  lg:flex flex-1 max-w-[320px] lg:max-w-[482px]  '>
          <img className='self-img' src={Image} />
        </motion.div>
      </div>

    </div>

  </div>;
};

export default Banner;
