import React, { useEffect } from 'react';
import ReactGA from 'react-ga';

import PageDefault from '../../components/PageDefault';
import FixedBar from '../../components/FixedBar';
import FloatingBar from '../../components/FloatingBar';
import StripedBars from '../../components/StripedBars';

import Office from '../../assets/office.jpg';
import Pedestrians from '../../assets/pedestrians.jpg';
import Audience from '../../assets/audience.jpg';

import Image1 from '../../assets/images/image1.png'
import Image2 from '../../assets/images/image2.png'

function Home(){
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti eveniet nihil amet doloribus? <strong>Ipsum fugiat incidunt sunt laborum</strong> iure saepe, fugit culpa voluptate quae alias, aperiam vero iusto minima aliquid ullam <strong>numquam aut similique nobis eveniet</strong> natus blanditiis ea accusamus? Aliquam nulla beatae delectus aspernatur, nemo debitis culpa? Eveniet.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolorem fugit deleniti accusamus suscipit libero ea maxime ut a perspiciatis nemo voluptas ipsum, excepturi inventore distinctio error, corrupti explicabo atque veritatis asperiores quis qui optio! <strong>Nemo quo incidunt vero fugiat voluptatibus</strong>, ipsam excepturi, ab aliquam reiciendis consectetur, nam nesciunt alias cumque sapiente placeat culpa asperiores tempora molestias voluptas reprehenderit magni?
            </StripedBars>
        </PageDefault>
    )
}

export default Home;