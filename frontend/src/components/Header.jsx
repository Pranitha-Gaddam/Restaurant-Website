import React from 'react';

function Header() {

    return (
        <div className="h-full w-full min-w-min m-0  border-solid border-amber-200" id='hero'>
            
            <div className=" absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center text-white">
                <span className='heading block md:flex items-center justify-center text-amber-200 font-serif flex-row-reverse'>
                    {/* <img src='public/logo.png' className='animitem animate-slidein500 w-1/4 md:m-3 p-2'></img> */}
                    <h1 className='title animitem animate-slidein300 text-pretty text-center cinzel-decorative-bold big-shadow-letters text-[5vw] lg:text-[4vw]'>Welcome to <br></br> Indian Restaurant</h1>
                </span>

                <span className='animitem animate-slidein1300 absolute bottom-14 md:bottom-20'>
                <a href='#about-us' className="arrow-button flex items-center text-amber-200 p-3 border-amber-200 hover:bg-amber-200 hover:text-black rounded-full border-2 animate-bounce"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-chevron-down hover:bg-amber-200 hover:black" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
</svg>
</a>
</span>

            </div>
        </div>
    );
}

export default Header;