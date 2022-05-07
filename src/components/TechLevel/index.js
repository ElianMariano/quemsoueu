import React from 'react'

import './styles.css'

function TechLevel({Image, language, level}){
    return (
        <div className="tech-container">
            <img src={Image} alt={language} />
            <h3 className="level">{level}</h3>
        </div>
    )
}

export default TechLevel;