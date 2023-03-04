import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

const Work = () => {
  return( 
  <section id='work' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row gap-x-10'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}  
        className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
          <div>
            <h2 className='h2 leading-tight text-accent'>
            My Latest <br />
            Work.
            </h2>
            <p className='max-w-sm mb-16'>
            This is my current finish projects. feel free to browse my projects please don't hesitate to contact me and let's start working together.
            </p>
            <button className='btn btn-sm'>View all projects</button>
          </div> 

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' src={Img1} alt=''/>

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Front-End Development</span></div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>My Portfolio Website </span>
            </div>
            <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-1000 z-50'>
              <span className='text-3xl text-white'><a href="https://github.com/JimRef/My-Portfolio" target='_blank' rel='noreferrer'><FaGithub/></a></span>
            </div>
          </div>
        </motion.div>    
      
        <motion.div
        variants={fadeIn('left', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} 
        className='flex-1 flex flex-col gap-y-10 '>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

              <img className='group-hover:scale-125 transition-all duration-500' src={Img2} alt=''/>

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Back-End Development</span></div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Ecommerce API</span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-1000 z-50'>
              <span className='text-3xl text-white'><a href="https://github.com/JimRef/Ecommerce-API" target='_blank' rel='noreferrer'><FaGithub/></a></span>
            </div>
          </div>

          <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>

            <img className='group-hover:scale-125 transition-all duration-500' src={Img3} alt=''/>

            <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'><span className='text-gradient'>Full-Stack Development</span></div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50'>
              <span className='text-3xl text-white'>Ecommerce Website</span>
            </div>

            <div className='absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-1000 z-50'>
              <span className='text-3xl text-white inline-block pr-4'><a href="https://github.com/JimRef/Ecommerce-Website" target='_blank' rel='noreferrer'> <FaGithub/> </a></span>
              <span className='text-2xl text-white inline-block pr-4'><a href="https://ecommerce-jimref.vercel.app/" target='_blank' rel='noreferrer'> <FaExternalLinkAlt/> </a></span>
            </div>

          </div>

        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Work;
