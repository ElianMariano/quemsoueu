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
                title="Interesses pessoais">
                Possuo diversos interesses em vários assuntos além de tecnologia, desde <strong>livros à música</strong>. Falando especificamente sobre música, embora eu não saiba tocar nenhum instrumento, durante grande parte da minha vida eu pude escutar músicas dos mais diversos gêneros, e a banda que mais gosto são os Beatles. Grande parte do que eu <strong>aprendi de inglês deve-se às séries</strong>, filmes e as músicas que eu costumo escutar ao longo desses anos todos.
            </FloatingBar>
            <StripedBars
                Image={Image2}
                title="Programação">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti eveniet nihil amet doloribus? <strong>Ipsum fugiat incidunt sunt laborum</strong> iure saepe, fugit culpa voluptate quae alias, aperiam vero iusto minima aliquid ullam <strong>numquam aut similique nobis eveniet</strong> natus blanditiis ea accusamus? Aliquam nulla beatae delectus aspernatur, nemo debitis culpa? Eveniet.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolorem fugit deleniti accusamus suscipit libero ea maxime ut a perspiciatis nemo voluptas ipsum, excepturi inventore distinctio error, corrupti explicabo atque veritatis asperiores quis qui optio! <strong>Nemo quo incidunt vero fugiat voluptatibus</strong>, ipsam excepturi, ab aliquam reiciendis consectetur, nam nesciunt alias cumque sapiente placeat culpa asperiores tempora molestias voluptas reprehenderit magni?
            </StripedBars>
            <FixedBar
                Image={Image5}
                title="Área de Atuação">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloribus dignissimos <strong>provident omnis id atque eos corporis</strong> assumenda optio aut, dolorum sint dolor, illum ipsum debitis! Rerum praesentium <strong>dignissimos quas non, atque nemo totam corrupti unde sunt</strong> illo fugit perspiciatis sequi iure. Iusto ullam amet mollitia eius ipsa <strong>officia voluptatibus dolores</strong> similique quaerat laboriosam doloremque numquam provident iste sit cupiditate, ratione necessitatibus, soluta odio magni excepturi id accusantium. Ea, vero!
            </FixedBar>
        </PageDefault>
    )
}

export default Interests;