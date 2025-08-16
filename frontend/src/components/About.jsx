import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function AboutUs() {
    const {ref: titleRef, inView: titleInView } = useInView( {triggerOnce: true});
    const {ref: contentRef, inView: contentInView } = useInView( {triggerOnce: true});

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen w-screen text-amber-200 py-20" 
      id="about-us"
      aria-labelledby="about-heading"
    >
      <motion.h1 
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="cinzel-decorative-regular text-[5vw] lg:text-[3vw] big-heading font-bold big-shadow-letters m-[3vh] mb-15"
        id="about-heading"
      >
        Our Story
      </motion.h1>
      
      <motion.div 
        ref={contentRef}
        initial={{ opacity: 0, y: 30 }}
        animate={contentInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6"
      >
        <div className="text-[3vw] md:text-[1.8vw] lg:text-[1.4vw] text-center leading-relaxed space-y-6 crimson-text-regular">
          <p>
            Welcome to <span className="crimson-text-semibold-italic text-amber-100">Indian Restaurant</span>, where authentic flavors meet modern dining excellence. 
            Founded in 2018 by Chef Rajesh Kumar, our restaurant brings the rich culinary heritage of India to your table with 
            passion, tradition, and innovation.
          </p>
          
          <p>
            Our kitchen is a symphony of aromatic spices, fresh ingredients, and time-honored cooking techniques passed down through 
            generations. From the bustling streets of Mumbai to the royal kitchens of Rajasthan, we celebrate India's diverse 
            regional cuisines with dishes that tell stories of culture, family, and love.
          </p>
          
          <p>
            Every meal at our restaurant is crafted with the finest ingredients, traditional spices imported directly from India, 
            and the warmth of genuine hospitality. Whether you're savoring our signature butter chicken, indulging in our 
            handcrafted biryanis, or exploring our extensive vegetarian offerings, each bite is a journey through India's 
            magnificent culinary landscape.
          </p>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={contentInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-4"
          >
            <p className="crimson-text-semibold-italic text-amber-100 text-lg">
              "Food is our common ground, a universal experience" - Join us in celebrating the art of Indian cuisine.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default AboutUs;
