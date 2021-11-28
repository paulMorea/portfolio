import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import Contact from '../components/Contact'

import '../styles/ContactPage.css'


function Bio(){
    return(
        <React.Fragment>
            <div className="firstContainer contactPage">
                <NavBar />
                <Contact />
                <Footer />
            </div>
            
            
        </React.Fragment>
    )
}

export default Bio