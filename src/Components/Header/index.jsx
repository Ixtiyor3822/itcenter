import React from 'react';

const Header = () =>{
    return (
        <div>
            <header className="header text-center h-75 text-white">
                <nav className="navbar navbar-brand">
                    <a className="nav-link text-light p-3" href="https://education.it-park.uz/uz/">Asosiy</a>
                    <a className="nav-link text-light chiziq p-3" href="https://education.it-park.uz/uz/itcenters">IT centers</a>
                    <a className="nav-link text-light p-3" href="https://education.it-park.uz/uz/itacademies">IT academies</a>
                </nav>
                <h1 className="display-2  mt-5 fw-5 pb-4">IT Center Uzbekistan</h1>
                <p className="pb-4">Sening IT karyerang shu yerdan boshlanadi!</p>
                <p className="pb-5"> IT center Turtkul</p>
            </header>
        </div>
    )
}

export default Header;