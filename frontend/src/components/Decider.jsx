import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Links from "./Links";
import { Menu, X } from "lucide-react";
import { useApp } from "../context/AppContext";

function Decider() {
    const { isMenuOpen, toggleMenu, setMenuOpen } = useApp();

    // Close menu when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('nav')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen, setMenuOpen]);

    return (
        <nav className="flex basis-full" role="navigation" aria-label="Main navigation">
            <motion.a 
                href="#hero" 
                className={`text-amber-200 text-xl md:hidden p-3 pl-4 ${isMenuOpen ? 'hidden': 'block' } shadow-letters crimson-text-bold alt-title small-shadow-letters`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                Indian Restaurant
            </motion.a>
            
            <AnimatePresence>
                {(isMenuOpen || window.innerWidth >= 768) && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col basis-full md:flex-row items-center justify-center text-amber-200 p-2"
                    >
                <Links />
                    </motion.div>
                )}
            </AnimatePresence>
            
            <div className="fixed md:hidden text-amber-200 pt-3 right-3 z-50">
                <motion.button 
                    onClick={toggleMenu}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full hover:bg-amber-200 hover:bg-opacity-10 transition-colors"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </motion.button>
            </div>
        </nav>
    );
}

export default Decider;