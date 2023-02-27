import React from 'react';
import Logo from '../assets/logo1.png'

const Header = () => {
  const resume = 'https://drive.google.com/file/d/1tv8eCwnAe0SWnD1IvFEnjMu_jlBom5hQ/view?usp=share_link'
  
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-centers'>
        <a href="#">
          <img src={Logo} alt=""/>
        </a>
        <button className='btn btn-sm'>
          <a href={resume} target='_blank'>
            Resume
          </a>
        </button>
      </div>
    </div>
  </header>;
};

export default Header;
