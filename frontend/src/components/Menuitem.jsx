import React from "react";
import { motion } from "framer-motion";

function MenuItem({ name, desc, price, index = 0 }) {
    const itemVariants = {
        hidden: { 
            opacity: 0, 
            y: 30,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.article 
            className="px-4 lg:max-w-96 container flex flex-col flex-wrap text-amber-200 group" 
            id="menubox"
            variants={itemVariants}
            whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
            }}
        >
            <motion.div 
                className="border-b border-amber-200 border-opacity-20 pb-2 mb-2 group-hover:border-opacity-40 transition-all duration-300"
            >
                <div className="flex justify-between items-start mb-2">
                    <h4 className="crimson-text-semibold-italic text-lg group-hover:text-amber-100 transition-colors duration-200">
                        {name}
                    </h4>
                    {price && (
                        <span className="crimson-text-bold text-amber-100 ml-4 flex-shrink-0">
                            {price}
                        </span>
                    )}
                </div>
                <div>
                    <p className="crimson-text-regular leading-relaxed text-amber-200 group-hover:text-amber-100 transition-colors duration-200">
                        {desc}
                    </p>
                </div>
            </motion.div>
        </motion.article>
    )
}

export default MenuItem;