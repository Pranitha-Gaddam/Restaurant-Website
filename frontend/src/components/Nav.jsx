import React from 'react';
import Decider from './Decider';

function Navigation() {

  return (
    <>    
    <div className='animitem animate-slidein500 w-full fixed top-0 z-50 flex flex-wrap items-center md:justify-center  border-b border-amber-200 font-bold uppercase'>
        <Decider />
    </div> 
  </>
  );
}

export default Navigation;
