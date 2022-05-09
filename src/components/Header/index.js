import React from 'react';
import {Link} from 'react-router-dom';

import './styles.css';

function Header(){
    return (
        <header>
            <Link to="/"><h1>Quemsoueu</h1></Link>

            <nav>
                <ul>
                    <li><Link to="/minha-historia">Minha História</Link></li>
                    <li><Link to="/meus-interesses">Meus Interesses</Link></li>
                    <li><Link to="/minha-experiencia">Minha Experiência</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;