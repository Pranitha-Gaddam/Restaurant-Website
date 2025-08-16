import React from 'react';
import { motion } from 'framer-motion';
import Decider from './Decider';

function Navigation() {

  return (
    <>
        <a href="#main-content" className="skip-link">
            Skip to main content
        </a>
        <motion.header 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='w-full fixed top-0 z-50 flex flex-wrap items-center md:justify-center border-b border-amber-200 font-bold uppercase backdrop-blur-sm bg-red-900 bg-opacity-90'
            role="banner"
        >
            <Decider />
        </motion.header>
        <div id="main-content" />
    </>
  );
}

export default Navigation;
