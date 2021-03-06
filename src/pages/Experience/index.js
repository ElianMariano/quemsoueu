import React, {useEffect} from 'react';
import ReactGA from 'react-ga';

import PageDefault from '../../components/PageDefault';
import FixedBar from '../../components/FixedBar';
import FloatingBar from '../../components/FloatingBar';
import MobileProject from '../../components/MobileProject';
import DesktopProject from '../../components/DesktopProject';
import TechLevel from '../../components/TechLevel';

import Office from '../../assets/office.jpg';
import Image6 from '../../assets/images/image6.png'
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
                Image={Image6}
                title="Pr??ximos Passos">
                Pretendo continuar me desenvolvendo cada vez mais na ??rea de tecnologia, principalmente em seguimentos que sejam relacionados com <strong>intelig??ncia de dados</strong> e <strong>IA</strong>. Al??m disso, atualmente pretendo terminar o desenvolvimento do meu projeto de TCC com ??xito, o qual se baseia em <strong>Deep Learning</strong> e tem como objetivo auxiliar os profissionais da ??rea de fonoaudiologia ?? realizar a avalia????o de seus pacientes, portanto <strong>acredito que este projeto seja de grande valia para o meu desenvolvimento profissional.</strong>
            </FloatingBar>

            <h2 className='techTitle'>Linguagems em que j?? Desenvolvi</h2>

            <TechLevel
                Image={Html}
                language="HTML"
                level="Intermedi??rio"/>
            
            <TechLevel
                Image={Css}
                language="CSS"
                level="Intermedi??rio"/>

            <TechLevel
                Image={Javascript}
                language="Javascript"
                level="Intermedi??rio"/>

            <TechLevel
                Image={Python}
                language="Python"
                level="Intermedi??rio"/>

            <TechLevel
                Image={Java}
                language="Java"
                level="Intermedi??rio"/>
            
            <TechLevel
                Image={Typescript}
                language="Typescript"
                level="B??sico"/>

            <TechLevel
                Image={Php}
                language="PHP"
                level="B??sico"/>

            <h2 className='techTitle'>FrameWork's/API's</h2>

            <TechLevel
                Image={NodeJS}
                language="NodeJs"
                level="Intermedi??rio"/>
            
            <TechLevel
                Image={ReactImg}
                language="ReactJS"
                level="Intermedi??rio"/>

            <TechLevel
                Image={Android}
                language="Java"
                level="B??sico"/>

            <MobileProject
                Left={GoPlacesLeft}
                Midle={GoPlacesCenter}
                Right={GoPlacesRight}
                title="GoPlaces">
                O <strong>GoPlaces</strong> ?? um aplicativo o qual foi desenvolvido para a mat??ria de <strong>empreendedorismo</strong> na faculdade. Este aplicativo tem por objetivo <strong>conectar estabelecimentos que realizam diversos eventos</strong> como restaurantes, shows e festas com o cliente final, podendo fornecer at?? mesmo <strong>promo????es e cupons de desconto</strong>.
            </MobileProject>

            <MobileProject
                Left={BeTheHeroLeft}
                Midle={BeTheHeroCenter}
                Right={BeTheHeroRight}
                title="BeTheHero">
                O <strong>BeTheHero</strong> ?? um projeto que foi desenvolvido a partir de um evento online chamado semana <strong>Omnistack 11</strong>, organizado pela empresa <strong>RocketSeat</strong>. Este projeto possui <strong>Backend, Frontend e Mobile</strong>, e visa conectar pessoas que precisam de algum tipo de ajuda com outras pessoas que pretendem fornecer este tipo de ajuda.
            </MobileProject>

            <MobileProject
                Left={InstantFormulasLeft}
                Midle={InstantFormulasCenter}
                Right={InstantFormulasRight}
                title="InstantFormulas">
                O <strong>InstantFormulas</strong> ?? um aplicativo para <strong>Android</strong> nativo desenvolvido em <strong>Java</strong>. Este aplicativo busca reunir diversas formulas comuns de <strong>matem??tica, f??sica e qu??mica</strong>, e tem por objetivo <strong>ajudar o estudante de ensino m??dio ?? aprender e entender</strong> a solu????o destas formulas.
            </MobileProject>

            <DesktopProject
                Image={Admf}
                title="ADMF (Administra????o Financeira)">
                <strong>ADMF</strong> ?? uma aplica????o de <strong>FrontEnd</strong> que resolve formulas para a ??rea de <strong>Administra????o Financeira</strong>. Esta aplica????o foi desenvolvida em <strong>ReactJS</strong> em conjunto com <strong>TypeScript</strong>. Nesta aplica????o, foram implementadas as principais pr??ticas de responsividade para <strong>Desktop e Mobile</strong>.
            </DesktopProject>

            <DesktopProject
                Image={Ecoleta}
                title="Ecoleta">
                A projeto <strong>Ecoleta</strong> busca organizar pontos de <strong>coleta de materiais recicl??veis</strong>, a fim de facilitar a reciclagem de lixo de uma pessoa comum. Este projeto foi desenvolvido na semana <strong>NextLevelWeek</strong> organizada pela empresa <strong>RocketSeat</strong>. Este projeto possui <strong>BackEnd, FrontEnd e Mobile completo</strong>. O FrontEnd e o Mobile foram desenvolvidos com <strong>TypeScript</strong>.
            </DesktopProject>

            <DesktopProject
                Image={Proffy}
                title="Proffy">
                O <strong>Proffy</strong> ?? uma plataforma que busca <strong>conectar</strong> professores particulares e alunos. Esta plataforma tamb??m foi desenvolvida na semana <strong>NextLevelWeek</strong> organizada pela empresa <strong>RocketSeat</strong>. Esta plataforma possui <strong>BackEnd, FrontEnd e Mobile</strong>, e foi desenvolvida utilizando <strong>TypeScript</strong>.
            </DesktopProject>
        </PageDefault>
    )
}

export default Experience;