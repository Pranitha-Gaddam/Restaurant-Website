import React from 'react';
import { useInView } from 'react-intersection-observer';

function AboutUs() {
    const {ref: titleRef, inView: titleInView } = useInView( {triggerOnce: true});
    const {ref: contentRef, inView: contentInView } = useInView( {triggerOnce: true});

  return (
    <div
      className="flex flex-col items-center justify-center h-screen w-screen min-h-min text-amber-200 snap-proximity" id="about-us">
      <h1 className={`animitem cinzel-decorative-regular text-[5vw] lg:text-[3vw] big-heading font-bold ${titleInView ? 'animate-slidein100' : ''} animate snap-proximity big-shadow-letters m-[3vh] mb-15`} ref={titleRef}>About Us</h1>
      <p className={`animitem text-[3vw] md:text-[2vw] text-center leading-[5lvh] md:leading-[7lvh] p-4 ${contentInView ? 'animate-slidein200' : ''} animate snap-proximity crimson-text-regular `} ref={contentRef}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
  );
}

export default AboutUs;
