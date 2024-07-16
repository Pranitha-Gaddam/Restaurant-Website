import React from "react";

function Links() {
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: "smooth",
          });
        }
      };
    return (
        <>
        <a className="p-3 text-stroke-3 crimson-text-bold" onClick={handleSmoothScroll} href="#about-us">About Us</a>
        <a className="text-stroke-3 p-3 crimson-text-bold" onClick={handleSmoothScroll} href="#menu">Menu</a>
        <a className="text-stroke-3 p-3 crimson-text-bold" onClick={handleSmoothScroll} href="#reservations">Reservations</a>
        </>
    );
}

export default Links;
