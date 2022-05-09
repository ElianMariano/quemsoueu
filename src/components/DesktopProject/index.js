import React from "react";

import './styles.css';

function DesktopProject({Image, title, children}){
    return (
        <div className="desktop-project">
            <img src={Image} alt="Admf" />

            <div className="description">
                <h2>{title}</h2>

                <p>{children}</p>
            </div>
        </div>
    )
}

export default DesktopProject;