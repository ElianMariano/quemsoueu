import React from 'react'

import Office from '../../assets/office.jpg';
import './styles.css';

function FixedBar(){
    return (
        <div className="fixed-bar">
            <img src={Office} alt="Office" />

            <div className="main-bar"></div>
            <div className="bar"></div>

            <div className="main-text">
                <h4>Titulo</h4>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloribus dignissimos <strong>provident omnis id atque eos corporis</strong> assumenda optio aut, dolorum sint dolor, illum ipsum debitis! Rerum praesentium <strong>dignissimos quas non, atque nemo totam corrupti unde sunt</strong> illo fugit perspiciatis sequi iure. Iusto ullam amet mollitia eius ipsa <strong>officia voluptatibus dolores</strong> similique quaerat laboriosam doloremque numquam provident iste sit cupiditate, ratione necessitatibus, soluta odio magni excepturi id accusantium. Ea, vero!
                </p>
            </div>
        </div>
    )
}

export default FixedBar