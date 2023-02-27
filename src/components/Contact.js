import {React, useRef} from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_SERVICE_ID}`, `${process.env.REACT_APP_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_USER_ID}`)
      .then((result) => {                        
          Swal.fire({
            title: 'Email Sent',
            icon: 'success'
          })
          e.target.reset()          
          
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
  <section id='contact' className='lg:section py-16'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row '>

        <motion.div
        variants={fadeIn('right', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.3}} 
        className='flex-1 flex justify-center items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
              Let's work <br /> together!
            </h2>
          </div>
        </motion.div>
        
        
        <motion.form
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.3}} 
          className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          ref={form}
          onSubmit={sendEmail}
          >
          <input 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type="text" 
            placeholder='Your Name'
            name="user_name"
            required              
          />
          <input 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
            type="text" 
            placeholder='Your Email'
            name="user_email"
            required            
          />
          <textarea 
          className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
          placeholder='Your Message'
          name="message"
          required
          >          
          </textarea>
          <button type="submit" value="Send" className='btn btn-lg'>Send Message</button>
        </motion.form>
      </div>     
    </div>  
  </section>
  );
};

export default Contact;
