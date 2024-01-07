import React, { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Modal from './Modal';

const About = () => {

  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  const [showModal, setshowModal] = useState(false);

  return <div id='about' className='section  ' ref={ref}>
    <div className='container mx-auto   ' >
      <div className='flex flex-col sm:gap-y-8 lg:flex-row lg:item-center lg:gap-x-20 h-[100vh] '>
        <motion.div
          className=' flex-1  bg-about bg-contain bg-no-repeat h-[80%] mix-blend-lighten bg-top  '
          variants={fadeIn('right', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, ammount: 0.3 }}
        >
        </motion.div>

        <motion.div className='flex-1 lg:mt-24 '
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, ammount: 0.3 }}
        >
          <h2 className=' h2 text-yellow-400 font-bold '>About Me</h2>
          <h3 className='h3 mb-4 ' >I'm a Frontend Developer </h3>
          <p className='mb-6'>
            Passionate wordsmith and avid explorer of ideas, Driven front-end developer with a flair
            for transforming designs into seamless, user-centric experiences. Proficient in HTML, CSS, Tailwind,
            JavaScript and react I blend technical
            expertise with a keen eye for design aesthetics.
          </p>
          <div className=' mt-4 '>
            <div className=' mt-5' >
              <div className=' text-[40px] font-tertiary text-gradient  mb-2  '>
                {
                  inView ? <CountUp start={0} end={10} duration={4} /> : null
                }
                +
              </div>
              <div className='font-primary text-sm tracking-[2px] '>
                Major & Minor Projects
              </div>
            </div>
          </div>
          <div className=' flex gap-4 items-center py-4 relative'>
            <button className='btn btn-lg' onClick={() => setshowModal(true)} >Contact Me</button>

            {showModal && <Modal onclose={() => setshowModal(false)} />}

          </div>
        </motion.div>


      </div>
    </div>


  </div>;
};

export default About;
