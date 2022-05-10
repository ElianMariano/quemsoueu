import React from 'react';

import PageDefault from '../../components/PageDefault';
import FixedBar from '../../components/FixedBar';
import FloatingBar from '../../components/FloatingBar';
import StripedBars from '../../components/StripedBars';

import Office from '../../assets/office.jpg';
import Pedestrians from '../../assets/pedestrians.jpg';
import Audience from '../../assets/audience.jpg';

function Home(){
    return (
        <PageDefault>
            <FixedBar
                Image={Office}
                title="Quem sou eu">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates doloribus dignissimos <strong>provident omnis id atque eos corporis</strong> assumenda optio aut, dolorum sint dolor, illum ipsum debitis! Rerum praesentium <strong>dignissimos quas non, atque nemo totam corrupti unde sunt</strong> illo fugit perspiciatis sequi iure. Iusto ullam amet mollitia eius ipsa <strong>officia voluptatibus dolores</strong> similique quaerat laboriosam doloremque numquam provident iste sit cupiditate, ratione necessitatibus, soluta odio magni excepturi id accusantium. Ea, vero!
            </FixedBar>
            <FloatingBar
                Image={Pedestrians}
                title="De onde eu venho">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos tenetur ipsam fuga hic iure, <strong>repellendus pariatur eaque</strong> nostrum quibusdam? Natus illo odio deserunt cum iure expedita totam? Magni, voluptatem laboriosam. Assumenda, autem <strong>accusantium aliquam recusandae laudantium</strong> similique facilis? Voluptatum veniam, porro ea recusandae expedita fugit facilis quis nihil libero modi.
            </FloatingBar>

            <StripedBars
                Image={Audience}
                title="Como cheguei até aqui">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deleniti eveniet nihil amet doloribus? <strong>Ipsum fugiat incidunt sunt laborum</strong> iure saepe, fugit culpa voluptate quae alias, aperiam vero iusto minima aliquid ullam <strong>numquam aut similique nobis eveniet</strong> natus blanditiis ea accusamus? Aliquam nulla beatae delectus aspernatur, nemo debitis culpa? Eveniet.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, dolorem fugit deleniti accusamus suscipit libero ea maxime ut a perspiciatis nemo voluptas ipsum, excepturi inventore distinctio error, corrupti explicabo atque veritatis asperiores quis qui optio! <strong>Nemo quo incidunt vero fugiat voluptatibus</strong>, ipsam excepturi, ab aliquam reiciendis consectetur, nam nesciunt alias cumque sapiente placeat culpa asperiores tempora molestias voluptas reprehenderit magni?
            </StripedBars>
        </PageDefault>
    )
}

export default Home;