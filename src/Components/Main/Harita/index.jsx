import React from 'react';
import Map from './Map'
const Harita = () =>{
    return (
        <div className="container-fluid text-center text-muted border border-top mt-5 shadow-sm" id="map">
            <h2>Markazimiz xaritada</h2>
            <Map />  
        </div>
    )
}

export default Harita; 