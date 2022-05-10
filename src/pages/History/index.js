import React, {useEffect} from "react";
import ReactGA from 'react-ga';

import PageDefault from "../../components/PageDefault";
import FixedBar from '../../components/FixedBar';
import FloatingBar from '../../components/FloatingBar';
import StripedBars from '../../components/StripedBars';

import Office from '../../assets/office.jpg';
import Pedestrians from '../../assets/pedestrians.jpg';
import Audience from '../../assets/audience.jpg';

import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'

function History(){
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <PageDefault>
            <FixedBar
                Image={Image1}
                title="Quem sou eu">
                    Meu nome é Elian, tenho 20 anos e atualmente curso o <strong>7º período de Sistemas de Informação no IFES</strong> (Instituto Federal do Espírito Santo). Me considero uma pessoa <strong>criativa e curiosa</strong> que está sempre em busca de <strong>novos desafios</strong>. Quando eu tinha 15 anos, eu conheci o mundo da programação e desde então, <strong>me apaixonei pela área de tecnologia</strong>. Durante esta época, eu <strong>estudava programação de maneira autodidata</strong> através da criação de diversos <strong>projetos pessoais</strong>. Ao entrar na faculdade em 2019, então com 17 anos de idade, pude <strong>aperfeiçoar os meus conhecimentos e aprender diversas coisas novas</strong> as quais agregarão muito na minha carreira profissional futuramente.
            </FixedBar>

            <StripedBars
                Image={Image2}
                title="Como cheguei até aqui">
                Nasci e moro em <strong>Marataízes</strong> no <strong>Espírito Santo</strong>. Desde cedo me dediquei firmemente aos meus estudos, e ainda mais quando eu comecei a programar. Na programação em si, eu tive interesse em estudar diversas áreas, porém atualmente me interesso mais na área de programação <strong>Web e Mobile</strong>. Devido o interesse de aprender sobre a área de <strong>Inteligência artificial</strong>, eu pude iniciar o desenvolvimento do meu TCC me baseando fortemente no tema, mais especificamente na parte de <strong>Deep Learning.</strong>
            </StripedBars>
        </PageDefault>
    )
}

export default History;