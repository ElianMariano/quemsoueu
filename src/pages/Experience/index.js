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

import BeTheHeroLeft from '../../assets/screenshots/bethehero/bethehero-left.png';
import BeTheHeroCenter from '../../assets/screenshots/bethehero/bethehero-center.png';
import BeTheHeroRight from '../../assets/screenshots/bethehero/bethehero-right.png';

import InstantFormulasLeft from '../../assets/screenshots/instantformulas/instantformulas-left.png';
import InstantFormulasCenter from '../../assets/screenshots/instantformulas/instantformulas-center.png';
import InstantFormulasRight from '../../assets/screenshots/instantformulas/instantformulas-right.png';

import Admf from '../../assets/screenshots/admf_desktop.jpg';
import Ecoleta from '../../assets/screenshots/ecoleta_desktop.jpg';
import Proffy from '../../assets/screenshots/proffy_desktop.jpg';

import Html from '../../assets/logos/html.png';
import Css from '../../assets/logos/css.png';
import Javascript from '../../assets/logos/javascript.png';
import Php from '../../assets/logos/php.png';
import Python from '../../assets/logos/python.png';
import Java from '../../assets/logos/java.png';
import Typescript from '../../assets/logos/typescript.png';

import NodeJS from '../../assets/logos/nodejs.png';
import Android from '../../assets/logos/android.png';
import ReactImg from '../../assets/logos/react.png';

import './styles.css'

function Experience(){
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return (
        <PageDefault>
            <FloatingBar
                Image={Pedestrians}
                title="Próximos Passos">
                Pretendo continuar me desenvolvendo cada vez mais na área de tecnologia, principalmente em seguimentos que sejam relacionados com <strong>inteligência de dados</strong> e <strong>IA</strong>. Além disso, atualmente pretendo terminar o desenvolvimento do meu projeto de TCC com êxito, o qual se baseia em <strong>Deep Learning</strong> e tem como objetivo auxiliar os profissionais da área de fonoaudiologia à realizar a avaliação de seus pacientes, portanto <strong>acredito que este projeto seja de grande valia para o meu desenvolvimento profissional.</strong>
            </FloatingBar>

            <h2 className='techTitle'>Linguagems em que já Desenvolvi</h2>

            <TechLevel
                Image={Html}
                language="HTML"
                level="Intermediário"/>
            
            <TechLevel
                Image={Css}
                language="CSS"
                level="Intermediário"/>

            <TechLevel
                Image={Javascript}
                language="Javascript"
                level="Intermediário"/>

            <TechLevel
                Image={Python}
                language="Python"
                level="Intermediário"/>

            <TechLevel
                Image={Java}
                language="Java"
                level="Intermediário"/>
            
            <TechLevel
                Image={Typescript}
                language="Typescript"
                level="Básico"/>

            <TechLevel
                Image={Php}
                language="PHP"
                level="Básico"/>

            <h2 className='techTitle'>FrameWork's/API's</h2>

            <TechLevel
                Image={NodeJS}
                language="NodeJs"
                level="Intermediário"/>
            
            <TechLevel
                Image={ReactImg}
                language="ReactJS"
                level="Intermediário"/>

            <TechLevel
                Image={Android}
                language="Java"
                level="Básico"/>

            <MobileProject
                Left={GoPlacesLeft}
                Midle={GoPlacesCenter}
                Right={GoPlacesRight}
                title="GoPlaces">
                O <strong>GoPlaces</strong> é um aplicativo o qual foi desenvolvido para a matéria de <strong>empreendedorismo</strong> na faculdade. Este aplicativo tem por objetivo <strong>conectar estabelecimentos que realizam diversos eventos</strong> como restaurantes, shows e festas com o cliente final, podendo fornecer até mesmo <strong>promoções e cupons de desconto</strong>.
            </MobileProject>

            <MobileProject
                Left={BeTheHeroLeft}
                Midle={BeTheHeroCenter}
                Right={BeTheHeroRight}
                title="BeTheHero">
                O <strong>BeTheHero</strong> é um projeto que foi desenvolvido a partir de um evento online chamado semana <strong>Omnistack 11</strong>, organizado pela empresa <strong>RocketSeat</strong>. Este projeto possui <strong>Backend, Frontend e Mobile</strong>, e visa conectar pessoas que precisam de algum tipo de ajuda com outras pessoas que pretendem fornecer este tipo de ajuda.
            </MobileProject>

            <MobileProject
                Left={InstantFormulasLeft}
                Midle={InstantFormulasCenter}
                Right={InstantFormulasRight}
                title="InstantFormulas">
                O <strong>InstantFormulas</strong> é um aplicativo para <strong>Android</strong> nativo desenvolvido em <strong>Java</strong>. Este aplicativo busca reunir diversas formulas comuns de <strong>matemática, física e química</strong>, e tem por objetivo <strong>ajudar o estudante de ensino médio à aprender e entender</strong> a solução destas formulas.
            </MobileProject>

            <DesktopProject
                Image={Admf}
                title="ADMF (Administração Financeira)">
                <strong>ADMF</strong> é uma aplicação de <strong>FrontEnd</strong> que resolve formulas para a área de <strong>Administração Financeira</strong>. Esta aplicação foi desenvolvida em ReactJS em conjunto com <strong>TypeScript</strong>. Nesta aplicação, foram implementadas as principais práticas de responsividade para <strong>Desktop e Mobile</strong>.
            </DesktopProject>

            <DesktopProject
                Image={Ecoleta}
                title="Ecoleta">
                A projeto <strong>Ecoleta</strong> busca organizar pontos de <strong>coleta de materiais recicláveis</strong>, a fim de facilitar a reciclagem de lixo de uma pessoa comum. Este projeto foi desenvolvido na semana <strong>NextLevelWeek</strong> organizada pela empresa <strong>RocketSeat</strong>. Este projeto possui <strong>BackEnd, FrontEnd e Mobile completo</strong>. O FrontEnd e o Mobile foram desenvolvidos com <strong>TypeScript</strong>.
            </DesktopProject>

            <DesktopProject
                Image={Proffy}
                title="Proffy">
                O <strong>Proffy</strong> é uma plataforma que busca <strong>conectar</strong> professores particulares e alunos. Esta plataforma também foi desenvolvida na semana <strong>NextLevelWeek</strong> organizada pela empresa <strong>RocketSeat</strong>. Esta plataforma possui <strong>BackEnd, FrontEnd e Mobile</strong>, e foi desenvolvida utilizando TypeScript.
            </DesktopProject>
        </PageDefault>
    )
}

export default Experience;