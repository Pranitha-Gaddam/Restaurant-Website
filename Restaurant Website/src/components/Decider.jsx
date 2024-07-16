import React from "react";
import Links from "./Links";
import { Menu, X } from "lucide-react";

function Decider() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log('toggle');
    };
    return (
        <>
        <nav className="flex basis-full">
            <a href="" className={`text-amber-200 text-xl md:hidden  p-3 pl-4 ${isMenuOpen ? 'hidden': 'block' } shadow-letters crimson-text-bold alt-title small-shadow-letters`}>Indian Restaurant</a>
            <div className={`flex flex-col basis-full md:flex-row items-center justify-center text-amber-200  p-2 transition duration-500 ease-in-out transform ${isMenuOpen ? 'block': 'hidden' } md:flex `}>
                <Links />
            </div>
            <div className="fixed md:hidden  text-amber-200 pt-3 right-3">
                <button onClick={toggleMenu}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
        </>
    );
}

export default Decider;