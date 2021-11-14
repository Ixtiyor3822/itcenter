import React from 'react';
import Harita from './Harita';
import Kurslar from './Kurslar';
import Navbar from './Navbar';
import UquvKurslari from './UquvKurslari';

const Main = () => {
    return (
        <>
            <div className="container">
                <Navbar />
                {/* O`quv kurslari */}
                <UquvKurslari />
                {/* Kurslar */}
                <Kurslar />
                {/* Biz haqimizda */}
            </div>
            <Harita />
            {/* Bizning manzil */}
        </>
    )
}

export default Main;