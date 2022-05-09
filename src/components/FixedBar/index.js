import React from 'react'

import './styles.css';

function FixedBar({Image, title, children}){
    return (
        <div className="fixed-bar">
            <img src={Image} alt="Office" />

            <div className="main-bar"></div>
            <div className="bar"></div>

            <div className="main-text">
                <h4>{title}</h4>

                <p>{children}</p>
            </div>
        </div>
    )
}

export default FixedBar