import React from 'react'

import './styles.css';

function StripedBars({Image, title, children}){
    return (
        <div className="striped-bars">
            <img src={Image} alt={title} />

            <div className="stripe1"></div>
            <div className="stripe2"></div>
            <div className="stripe3"></div>
            <div className="stripe4"></div>
            <div className="stripe5"></div>
            <div className="stripe6"></div>
            <div className="stripe7"></div>
            <div className="stripe8"></div>
            <div className="stripe9"></div>
            <div className="stripe10"></div>
            <div className="stripe11"></div>

            <div className="main-text">
                <h4>{title}</h4>

                <p>{children}</p>
            </div>
        </div>
    )
}

export default StripedBars;