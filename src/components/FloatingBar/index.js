import React from 'react';

import './styles.css';

function FloatingBar({Image, title, children}){
    return (
        <div className="floating-bar">
            <img src={Image} alt="Imagem" />

            <div className="main-bar"></div>

            <div className="bar"></div>

            <div className="main-text">
                <h4>{title}</h4>

                <p>{children}</p>
            </div>
        </div>
    )
}

export default FloatingBar