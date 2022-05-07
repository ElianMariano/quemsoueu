import React from 'react';

import './styles.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.png'

function Footer(){
    return (
        <footer>
            <div>
                <p>Redes Sociais</p>
                <a href="https://www.linkedin.com/in/elian-mariano-gabriel/" target="_blank" rel="noopener noreferrer">
                    <img className='linkedin' src={linkedin} alt="Meu Perfil do LinkedIn" />
                </a>
                <a href="https://github.com/ElianMariano" target="_blank" rel="noopener noreferrer">
                    <img className='github' src={github} alt="Meu Perfil no GitHub" />
                </a>
            </div>

            <div>
                <p>Contato</p>
                <p>
                    (28) 99995-9494<br/>
                    elianmarianogabriel@gmail.com
                </p>
            </div>

            <div>
                <p>Endereço</p>
                <p>
                    Rua Pedro Coimbra Garcia, 60<br/>
                    Marataízes - Espírito Santo
                </p>
            </div>
        </footer>
    )
};

export default Footer;