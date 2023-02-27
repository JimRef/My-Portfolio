import React from 'react';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
  <section id='about' className='section' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>        
        </motion.div>
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
         className='flex-1'>
          <h2 className='h2 text-accent'>About me.</h2>
          <h3 className='h3 mb-4'>I'm a Full-Stack Developer. From Manila, Philippines</h3>
          <p className='mb-6'>
            I'm knowlegable in Front-end and Back-end Development and eager to learn more tech.
          </p>
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'><Link to='contact' smooth={true}>Contact me</Link></button>
          <a href="#" className='text-gradient btn-link'>
            My Portfolio
          </a>
        </div>
        </motion.div>

        
        
      </div>
    </div>
  </section>
  );
};

export default About;
