import React from 'react'

import GoPlacesLeft from '../../assets/screenshots/goplaces/goplaces-left.png';
import GoPlacesCenter from '../../assets/screenshots/goplaces/goplaces-center.png';
import GoPlacesRight from '../../assets/screenshots/goplaces/goplaces-right.png';

import './styles.css';

function MobileProject(){
    return (
        <div className="mobile-project">
            <img src={GoPlacesLeft} alt="GoPlaces Left" />
            <img src={GoPlacesRight} alt="GoPlaces Right" />
            <img src={GoPlacesCenter} alt="GoPlaces Center" />

            <div className="description">
                <h2>GoPlaces</h2>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sed nulla earum est voluptatem cupiditate magni asperiores perferendis eos vitae voluptates alias esse <strong>doloremque ratione eaque similique</strong> a, hic voluptatum? Dolorem deserunt necessitatibus error tempora reiciendis sed ex harum nesciunt eligendi animi iste ducimus magni, <strong>consequatur est veritatis a inventore facilis</strong> obcaecati, odit totam incidunt laborum. Accusantium illo pariatur obcaecati.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus culpa ducimus nemo? Reiciendis, laborum sint! Impedit quisquam magnam, iusto, <strong>voluptates debitis voluptatum cumque cum maiores consequuntur</strong> velit officiis nemo natus molestiae fugiat sapiente quam adipisci molestias iste aliquid rem.
                </p>
            </div>
        </div>
    )
}

export default MobileProject;