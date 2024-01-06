import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from '../assets/proj1.png'
import Img2 from '../assets/proj2.png'
import Img3 from '../assets/proj3.png'
import Img4 from '../assets/proj4.png'
import { FaLink } from "react-icons/fa";
import Img5 from '../assets/proj5.png'
import Img6 from '../assets/proj6.png'


const Projects = () => {
  return (
    <div id='work' className=' my-12 flex flex-col  ' >

      <div className=' mx-auto font-bold text-yellow-500 text-3xl mb-10 ' >HERE MY ALL PROJECTS</div>
      <div className=' container mx-auto'>

        <div className='flex flex-col lg:flex-row gap-x-10 gap-y-10 '>

          <motion.div
            variants={fadeIn('right', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, ammount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10  '>

            <div className=' group pp  relative overflow-hidden border-2 border-white/50 rounded-xl '>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  '> </div>
              <img className='group-hover:scale-125 transition-all duration-500 ' src={Img2} />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient  '>
                  PASSWORD GENERATOR
                </span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 flex gap-4 justify-center items-center '>
                <span className='text-xl text-white '>
                  By using HTML , CSS
                </span>
                <a href='https://github.com/Alok8175/PASSWORD-GENERATOR.git' ><FaLink /></a>
              </div>

            </div>


            <div className=' group pp  relative overflow-hidden border-2 border-white/50 rounded-xl '>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  '> </div>
              <img className='group-hover:scale-125 transition-all duration-500 ' src={Img1} />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient  '>
                  WEATHER APP
                </span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 flex gap-4 justify-center items-center '>
                <span className='text-xl text-white '>
                  By using HTML , CSS & JS
                </span>
                <a href='https://github.com/Alok8175/WEATHER-APP.git' ><FaLink /></a>
              </div>

            </div>


            <div className=' group pp  relative overflow-hidden border-2 border-white/50 rounded-xl '>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  '> </div>
              <img className='group-hover:scale-125 transition-all duration-500 ' src={Img5} />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient  '>
                  TESTIMONIAL SLIDER
                </span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 flex gap-4 justify-center items-center '>
                <span className='text-xl text-white '>
                  By using REACT.JS
                </span>
                <a href='https://github.com/Alok8175/TESTIMONIAL-SLIDER.git' ><FaLink /></a>
              </div>

            </div>

          </motion.div>


          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, ammount: 0.3 }}
            className='flex-1 flex flex-col gap-y-10  '>

            <div className=' group pp relative overflow-hidden border-2 border-white/50 rounded-xl '>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  '> </div>
              <img className='group-hover:scale-125 transition-all duration-500 ' src={Img3} />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient  '>
                  RAZORPAY UI CLONE
                </span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 flex gap-4 justify-center items-center '>
                <span className='text-xl text-white '>
                  By using HTML, TAILWIND
                </span>
                <a href='https://github.com/Alok8175/RAZORPAY-UI-CLONE.git' ><FaLink /></a>
              </div>

            </div>


            <div className=' group pp relative overflow-hidden border-2 border-white/50 rounded-xl '>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  '> </div>
              <img className='group-hover:scale-125 transition-all duration-500 ' src={Img4} />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient  '>
                  DEMO PORTFOLIO UI
                </span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 flex gap-4 justify-center items-center '>
                <span className='text-xl text-white '>
                  By using HTML, CSS
                </span>
                <a href='https://github.com/Alok8175/DEMO-PORTFOLIO-UI.git' ><FaLink /></a>
              </div>

            </div>


            <div className=' group pp  relative overflow-hidden border-2 border-white/50 rounded-xl '>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  '> </div>
              <img className='group-hover:scale-125 transition-all duration-500 ' src={Img6} />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
                <span className='text-gradient  '>
                  TOP COURSES
                </span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 flex gap-4 justify-center items-center '>
                <span className='text-xl text-white '>
                  By using REACT.JS
                </span>
                <a href='https://github.com/Alok8175/TOP-COURSES.git' ><FaLink /></a>
              </div>

            </div>

          </motion.div>

        </div>
      </div>


    </div>
  )
}

export default Projects