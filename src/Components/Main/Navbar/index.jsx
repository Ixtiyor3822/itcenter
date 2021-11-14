import React from 'react';


const Navbar = () =>{
    return(
        <nav className="navbar navbar-brand position-sticky top-0 bg-light">
            <a className="nav-link p-3 text-secondary" href="#uquvkurslari">O`quv kurslari</a>
            <a className="nav-link p-3 text-secondary" href="#kurslar">Kurslar</a>
            <a className="nav-link p-3 text-secondary" href="#map">Bizning manzil</a>
            <a className="nav-link p-3 text-secondary" href="#aboutus">Biz haqimizda</a>
        </nav>
    )
}

export default Navbar;