import React from 'react';
import {BsArrowUpRight} from "react-icons/bs"
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import {Link} from 'react-scroll'

const services = [
  {
    name: 'Front-End Development',
    description:'HTML, CSS, Tailwind, Bootstrap & Javascript',
    link: 'Learn more'
  },
  {
    name: 'Back-End Development',
    description:'Javascript, Node.Js with Express.Js, MongoDB & Postman',
    link: 'Learn more'
  },
  {
    name: 'Full-Stack Development',
    description:'MongoDB, Express.Js, React.Js & Node.Js',
    link: 'Learn more'
  },
]

const Services = () => {
  return <section id='services' className='section'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
         className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'>
        <h2 className='h2 text-accent mb-6'>What I Do.</h2>
        <h3 className='h3 max-w-[455px] mb-16'>I'm a Full-Stack Developer. Knowlegable in Front-end and Back-end Development</h3>
        <button className='btn btn-sm'><Link to='work' smooth={true}>See my work</Link></button>
        </motion.div>

        <motion.div
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <div>
            {services.map((service,index)=> {
              const {name, description, link} = service;
              return(
                <div className='border-b border-white/20 h-[146px] mb-[38px] flex' key={index}>
                  <div className='max-w-[476px]'>
                    <h4 className='text-[20px] tracking-wider font-primary font-ssemibold mb-6'>{name}</h4>
                    <p className='font-secondary leading-tight'>{description}</p>
                  </div>
                  <div className='flex flex-col flex-1 items-end'>
                  
                  <Link to='work' smooth={true} className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                  <BsArrowUpRight/>
                  </Link>
                  
                  <Link to='work' smooth={true} className='text-gradient text-sm'>{link}</Link>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </div>
  </section>;
};

export default Services;
