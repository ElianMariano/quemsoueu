import React from 'react'

import './styles.css'
import Pedestrians from '../../assets/pedestrians.jpg'

function FloatingBar(){
    return (
        <div className="floating-bar">
            <img className='main-image' src={Pedestrians} alt="Imagem" />

            <div className="main-bar"></div>

            <div className="bar"></div>

            <div className="main-text">
                <h4>Titulo</h4>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur ipsam fuga hic iure, <strong>repellendus pariatur eaque</strong> nostrum quibusdam? Natus illo odio deserunt cum iure expedita totam? Magni, voluptatem laboriosam. Assumenda, autem <strong>accusantium aliquam recusandae laudantium</strong> similique facilis? Voluptatum veniam, porro ea recusandae expedita fugit facilis quis nihil libero modi.
                </p>
            </div>
        </div>
    )
}

export default FloatingBar