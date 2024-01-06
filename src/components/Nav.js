import React from 'react';
import { BiHomeAlt, BiUser } from "react-icons/bi";
import { BsClipboardData, BsBriefcase, BsChatSquare } from "react-icons/bs";

import { Link } from 'react-scroll'

const Nav = () => {
  return <div className=' fixed bottom-2 lg:bottom-8 left-[20%] w-[60%] overflow-hidden z-50 py-4  ' >

    <div className='container mx-auto '>
      <div className='w-full bg-black/20  backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px- flex justify-between text-2xl text-white  '>
        <Link to='home'
          className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center '
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-200}

        >
          <BiHomeAlt />
        </Link>
        <Link to='about'
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '

          spy={true}
          smooth={true}

        >
          <BiUser />
        </Link>
        <Link to='service'
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '
          activeClass='active'
          spy={true}
          smooth={true}
        >
          <BsClipboardData />
        </Link>
        <Link to='work'
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '

          spy={true}
          smooth={true}
        >
          <BsBriefcase />
        </Link>
        <Link to='contact'
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center '

          spy={true}
          smooth={true}
        >

          <BsChatSquare />
        </Link>



      </div>

    </div>
  </div>;
};

export default Nav;
