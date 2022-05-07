import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function PageDefault(props){
    return (
        <>
            <Header/>
                <main>
                    {props.children}
                </main>
            <Footer/>
        </>
    )
}

export default PageDefault