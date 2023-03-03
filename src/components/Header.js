import React from 'react';
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll';

const Header = () => {
  const resume = 'https://drive.google.com/file/d/1tv8eCwnAe0SWnD1IvFEnjMu_jlBom5hQ/view?usp=share_link'
  
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-centers'>
        <Link to='home'>
          <img src={Logo} alt=""/>
        </Link>
          
        
        <button className='btn btn-sm'>
          <a href={resume} target='_blank' rel='noreferrer'>
            Resume
          </a>
        </button>
      </div>
    </div>
  </header>;
};

export default Header;
