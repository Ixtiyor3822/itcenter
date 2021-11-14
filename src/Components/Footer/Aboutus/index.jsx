import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTelegram, faYoutube, faFacebook, faViadeo} from '@fortawesome/free-brands-svg-icons'
import { faMapSigns, faPhone, faMailBulk} from '@fortawesome/free-solid-svg-icons'
const AboutUs = () => {
    return (
        <footer className="container-fluid footer">
            <div className="container ">
                <div className="icons_service text-center">
                   <a href="/"> <FontAwesomeIcon className="iconka" icon={faTelegram}></FontAwesomeIcon></a>
                    <a href="/"><FontAwesomeIcon className="iconka" icon={faYoutube}></FontAwesomeIcon></a>
                    <a href="/"><FontAwesomeIcon className="iconka" icon={faFacebook}></FontAwesomeIcon></a>
                    <a href="/"><FontAwesomeIcon className="iconka" icon={faViadeo}></FontAwesomeIcon></a>
                </div>
                <div className="row h-100">
                    <div className="col-12 col-sm-12 col-md-4 text-light urtaga">
                        <FontAwesomeIcon className="iconka" icon={faMapSigns}></FontAwesomeIcon>
                        Turtkul tumani ... uy
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 text-light urtaga">
                        <FontAwesomeIcon className="iconka" icon={faPhone}></FontAwesomeIcon>
                        +998949044500
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 text-light urtaga">
                        <FontAwesomeIcon className="iconka" icon={faMailBulk}></FontAwesomeIcon>
                        jonquin9999@gmail.com
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default AboutUs;