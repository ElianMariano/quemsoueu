import React from "react";
import { Route, BrowserRouter,  Routes} from 'react-router-dom';

import Home from './pages/Home';
import History from './pages/History';
import Experience from './pages/Experience';
import Interests from './pages/Interests';

function Router(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/minha-historia" element={<History/>}/>
                <Route exact path="/meus-interesses" element={<Interests/>}/>
                <Route exact path="/minha-experiencia" element={<Experience/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;