import React, {useEffect} from 'react';
import ReactGA from 'react-ga';

import PageDefault from '../../components/PageDefault';
import FixedBar from '../../components/FixedBar';
import FloatingBar from '../../components/FloatingBar';
import StripedBars from '../../components/StripedBars';

import Office from '../../assets/office.jpg';
import Pedestrians from '../../assets/pedestrians.jpg';
import Audience from '../../assets/audience.jpg';

import Image4 from '../../assets/images/image4.png'
import Image2 from '../../assets/images/image2.png'
import Image5 from '../../assets/images/image5.png'

function Interests(){
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <PageDefault>
            <FloatingBar
                Image={Image4}
                title="Interesses Pessoais">
                Possuo diversos interesses em vários assuntos além de tecnologia, desde <strong>livros à música</strong>. Falando especificamente sobre música, embora eu não saiba tocar nenhum instrumento, durante grande parte da minha vida eu pude escutar músicas dos mais diversos gêneros, e a banda que mais gosto são os Beatles. Grande parte do que eu <strong>aprendi de inglês deve-se às séries</strong>, filmes e as músicas que eu costumo escutar ao longo desses anos todos.
            </FloatingBar>
            <StripedBars
                Image={Image5}
                title="Programação e Tecnologia">
                No início do meu aprendizado sobre programação, eu tinha um grande interesse em desenvolver jogos, portanto quando eu estava aprendendo a programar, grande partes das tecnologias que estudei eram e ainda são utilizadas no <strong>mercado de games</strong>. Logo, quando comecei a programar utilizava linguagens como C++ e Javascript. Com o passar do tempo, eu comecei a me interessar por desenvolvimento Web e mobile, então eu pude aprender Java, Html, Css e desde então, não parei de me interessar por aprender a programar e me desenvolver no aprendizado de tecnologia.
            </StripedBars>
        </PageDefault>
    )
}

export default Interests;