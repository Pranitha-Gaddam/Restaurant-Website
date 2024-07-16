import React from 'react';
import Navigation from './Nav';
import Header from './Header';
import AboutUs from './About';
import Menu from './Menu';
import Reservation from './Reservation';

function App() {
        
    return (
        <div className='block h-screen scroll-smooth'>
        <Navigation />
        <Header />
        <AboutUs />
        <Menu />
        <Reservation />
        </div>
    );
}

export default App;