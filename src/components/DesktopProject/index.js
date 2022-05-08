import React from "react";

import Admf from '../../assets/screenshots/admf_desktop.jpg';
import './styles.css';

function DesktopProject(){
    return (
        <div className="desktop-project">
            <img src={Admf} alt="Admf" />

            <div className="description">
                <h2>Admf</h2>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et nesciunt quisquam commodi beatae pariatur sunt odit animi aliquid perferendis obcaecati reiciendis tenetur dolore rerum eligendi ut non ad, necessitatibus ullam corrupti laboriosam veritatis hic. Labore voluptas non quos aspernatur excepturi! Facilis veritatis animi minus laboriosam explicabo dolores quaerat incidunt officia. Tenetur repudiandae consequuntur iusto dolore. Saepe optio asperiores nihil.
                </p>
            </div>
        </div>
    )
}

export default DesktopProject;