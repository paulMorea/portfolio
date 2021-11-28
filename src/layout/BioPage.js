import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import Bio from '../components/Bio'


function BioPage(){
    return(
        <React.Fragment>
            <NavBar />
            <Bio />   
            <Footer />
        </React.Fragment>
    )
}
export default BioPage