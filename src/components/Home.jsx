import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Process from './Process';

function Home(){
    return(
        <div>
            <Navbar />
            <Hero />
            <Process />
        </div>
    );
}

export default Home;