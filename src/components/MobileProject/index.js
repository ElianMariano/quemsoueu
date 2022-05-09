import React from 'react';

import GoPlacesLeft from '../../assets/screenshots/goplaces/goplaces-left.png';
import GoPlacesCenter from '../../assets/screenshots/goplaces/goplaces-center.png';
import GoPlacesRight from '../../assets/screenshots/goplaces/goplaces-right.png';

import './styles.css';

function MobileProject({Left, Midle, Right, title, children}){
    return (
        <div className="mobile-project">
                <img src={Left} alt="GoPlaces Left" />
                <img src={Midle} alt="GoPlaces Right" />
                <img src={Right} alt="GoPlaces Center"/>

            <div className="description">
                <h2>{title}</h2>

                <p>{children}</p>
            </div>
        </div>
    )
}

export default MobileProject;