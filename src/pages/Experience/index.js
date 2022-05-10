import React, {useEffect} from 'react';
import ReactGA from 'react-ga';

import PageDefault from '../../components/PageDefault';
import FixedBar from '../../components/FixedBar';
import FloatingBar from '../../components/FloatingBar';
import MobileProject from '../../components/MobileProject';
import DesktopProject from '../../components/DesktopProject';
import TechLevel from '../../components/TechLevel';

import Office from '../../assets/office.jpg';
import Pedestrians from '../../assets/pedestrians.jpg';
import GoPlacesLeft from '../../assets/screenshots/goplaces/goplaces-left.png';
import GoPlacesCenter from '../../assets/screenshots/goplaces/goplaces-center.png';
import GoPlacesRight from '../../assets/screenshots/goplaces/goplaces-right.png';
import Admf from '../../assets/screenshots/admf_desktop.jpg';

function Experience(){
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <PageDefault>
            <FloatingBar
                Image={Pedestrians}
                title="Próximos Passos">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur ipsam fuga hic iure, <strong>repellendus pariatur eaque</strong> nostrum quibusdam? Natus illo odio deserunt cum iure expedita totam? Magni, voluptatem laboriosam. Assumenda, autem <strong>accusantium aliquam recusandae laudantium</strong> similique facilis? Voluptatum veniam, porro ea recusandae expedita fugit facilis quis nihil libero modi.
            </FloatingBar>

            <MobileProject
                Left={GoPlacesLeft}
                Midle={GoPlacesCenter}
                Right={GoPlacesRight}
                title="GoPlaces">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi sed nulla earum est voluptatem cupiditate magni asperiores perferendis eos vitae voluptates alias esse <strong>doloremque ratione eaque similique</strong> a, hic voluptatum? Dolorem deserunt necessitatibus error tempora reiciendis sed ex harum nesciunt eligendi animi iste ducimus magni, <strong>consequatur est veritatis a inventore facilis</strong> obcaecati, odit totam incidunt laborum. Accusantium illo pariatur obcaecati.
            </MobileProject>

            {/* <DesktopProject
                Image={Admf}
                title="Admf">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et nesciunt quisquam commodi beatae pariatur sunt odit animi aliquid perferendis obcaecati reiciendis tenetur dolore rerum eligendi ut non ad, necessitatibus ullam corrupti laboriosam veritatis hic. Labore voluptas non quos aspernatur excepturi! Facilis veritatis animi minus laboriosam explicabo dolores quaerat incidunt officia. Tenetur repudiandae consequuntur iusto dolore. Saepe optio asperiores nihil.
            </DesktopProject> */}
        </PageDefault>
    )
}

export default Experience;