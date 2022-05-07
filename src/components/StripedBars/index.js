import React from 'react'

import './styles.css';
import Audience from '../../assets/audience.jpg';

function StripedBars(){
    return (
        <div className="striped-bars">
            <img src={Audience} alt="Audience" />

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
                <h4>Titulo</h4>

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti eveniet nihil amet doloribus? <strong>Ipsum fugiat incidunt sunt laborum</strong> iure saepe, fugit culpa voluptate quae alias, aperiam vero iusto minima aliquid ullam <strong>numquam aut similique nobis eveniet</strong> natus blanditiis ea accusamus? Aliquam nulla beatae delectus aspernatur, nemo debitis culpa? Eveniet.

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolorem fugit deleniti accusamus suscipit libero ea maxime ut a perspiciatis nemo voluptas ipsum, excepturi inventore distinctio error, corrupti explicabo atque veritatis asperiores quis qui optio! <strong>Nemo quo incidunt vero fugiat voluptatibus</strong>, ipsam excepturi, ab aliquam reiciendis consectetur, nam nesciunt alias cumque sapiente placeat culpa asperiores tempora molestias voluptas reprehenderit magni?
                </p>
            </div>
        </div>
    )
}

export default StripedBars;