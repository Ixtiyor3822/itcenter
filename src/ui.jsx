import React from 'react';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Main from './Components/Main';

const UI = () =>{
    React.useEffect(() =>{
        document.title="IT-center Turtkul"
    },[])
    return(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )
};


export default UI;