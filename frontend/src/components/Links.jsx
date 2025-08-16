import React from "react";
import { motion } from "framer-motion";
import { useApp } from "../context/AppContext";

function Links() {
    const { setMenuOpen, setCurrentSection } = useApp();

    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
            });
            setCurrentSection(targetId.slice(1));
            setMenuOpen(false); // Close mobile menu after navigation
        }
    };

    const linkVariants = {
        hover: { 
            scale: 1.05,
            textShadow: "-1px -1px 0 rgba(75,5,5), 1px -1px 0 rgb(75,5,5), -1px 1px 0 rgb(75,5,5), 1px 1px 0 rgb(253, 230, 138)"
        },
        tap: { scale: 0.95 }
    };

    return (
        <>
            <motion.a 
                className="p-3 crimson-text-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-red-900 rounded" 
                onClick={handleSmoothScroll} 
                href="#about-us"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSmoothScroll(e);
                    }
                }}
            >
                About Us
            </motion.a>
            <motion.a 
                className="p-3 crimson-text-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-red-900 rounded" 
                onClick={handleSmoothScroll} 
                href="#menu"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSmoothScroll(e);
                    }
                }}
            >
                Menu
            </motion.a>
            <motion.a 
                className="p-3 crimson-text-bold cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-red-900 rounded" 
                onClick={handleSmoothScroll} 
                href="#reservations"
                variants={linkVariants}
                whileHover="hover"
                whileTap="tap"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleSmoothScroll(e);
                    }
                }}
            >
                Reservations
            </motion.a>
        </>
    );
}

export default Links;
