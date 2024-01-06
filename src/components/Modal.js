import React from 'react'
import { FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants'

const Modal = ({ onclose }) => {


    return (
        <div className='relative rounded-lg flex justify-center items-center  inset-0  '>
            <motion.div className='gap-3 flex flex-col absolute top-4 -left-48 '
                variants={fadeIn('down', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, ammount: 0.3 }}
            >
                <div className='  text-2xl place-self-end '>
                    <IoCloseCircleOutline onClick={onclose} />
                </div>

                <div className='flex  py-4 text-[2rem] gap-x-6 max-w-max mx-auto lg:mx-0 modal-box px-5   ' >
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
                </div>
            </motion.div>
        </div>
    )
}

export default Modal