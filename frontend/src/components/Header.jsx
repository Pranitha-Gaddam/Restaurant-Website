import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function Header() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    return (
        <section className="h-full w-full min-w-min m-0 border-solid border-amber-200 relative" id='hero' role="banner">
            
            <motion.div 
                className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div className='heading block md:flex items-center justify-center text-amber-200 font-serif flex-row-reverse'>
                    <motion.h1 
                        className='title text-pretty text-center cinzel-decorative-bold big-shadow-letters text-[5vw] lg:text-[4vw]'
                        variants={itemVariants}
                    >
                        Welcome to <br /> Indian Restaurant
                    </motion.h1>
                </motion.div>

                <motion.div 
                    className='absolute bottom-14 md:bottom-20'
                    variants={itemVariants}
                    animate={{ 
                        y: [0, -10, 0],
                        transition: { 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }
                    }}
                >
                    <motion.a 
                        href='#about-us' 
                        className="arrow-button flex items-center text-amber-200 p-3 border-amber-200 hover:bg-amber-200 hover:text-black rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-red-900"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        aria-label="Scroll to About Us section"
                    >
                        <ChevronDown size={22} />
                    </motion.a>
                </motion.div>

            </motion.div>
        </section>
    );
}

export default Header;