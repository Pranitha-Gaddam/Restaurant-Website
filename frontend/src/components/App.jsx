import React from 'react';
import { AppProvider } from '../context/AppContext';
import Navigation from './Nav';
import Header from './Header';
import AboutUs from './About';
import Menu from './Menu';
import Reservation from './Reservation';
import NotificationContainer from './ui/Notification';

function App() {
        
    return (
        <AppProvider>
            <div className='block h-screen scroll-smooth'>
                <Navigation />
                <Header />
                <AboutUs />
                <Menu />
                <Reservation />
                <NotificationContainer />
            </div>
        </AppProvider>
    );
}

export default App;