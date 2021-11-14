import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMoneyBillAlt, faClock} from '@fortawesome/free-solid-svg-icons'
const Kurs = ({kurs}) =>{
    return (
        <div className="kurs shadow-lg">
            <img src={kurs.imgUrl} alt={kurs.kurs_description} />
            <h3>{kurs.kurs_name}</h3>
            <p>{kurs.kurs_description}</p>

            <div className="vaqt narx">
                <FontAwesomeIcon style={{color:'green', marginRight: 10}} icon={faClock}></FontAwesomeIcon>
                <span>Davomiyligi: </span> <span>{kurs.davomiyligi}</span>
            </div>

            <div className="narx">
                <FontAwesomeIcon style={{color:'green', marginRight: 10}} icon={faMoneyBillAlt}></FontAwesomeIcon>
                <span>Narxi: </span> <span>{kurs.narxi}</span>
            </div>
        </div>
    )
}
 export default Kurs;