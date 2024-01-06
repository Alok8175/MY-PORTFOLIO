import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const clickHandler = (e) => {
    e.preventDefault();
    toast.success('Message Sent')
  }
  return <div id='contact' className='lg:section py-16 ' >
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row  '>

        <motion.div
          variants={fadeIn('right', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, ammount: 0.3 }}
          className='flex-1 flex items-center justify-center gap-4' >
          <div className='' >
            <h4 className='text-xl text-yellow-500  mb-2 tracking-wide font-semibold '>Get In Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 '> Let's work together</h2>
          </div>


        </motion.div>

        <motion.form
          variants={fadeIn('left', 0.5)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, ammount: 0.3 }}
          className='flex-1 contact-form border rounded-2xl flex flex-col gap-y-6 pb-12 p-6 items-start '>
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                focus:border-yellow-500 transition-all ' type='text'
            placeholder='Your Name'
          />
          <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                focus:border-yellow-500 transition-all ' type='mail'
            placeholder='Your mail'
          />
          <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
                focus:border-yellow-500 transition-all resize-none mb-12  '
            placeholder='Your message '></textarea>
          <div className='flex gap-14 items-center '>

            <button className='btn btn-lg' onClick={(e) => { clickHandler(e) }} >
              Send Message
            </button>

          </div>
          <ToastContainer />

        </motion.form>
      </div>

    </div>

  </div>;
};

export default Contact;
