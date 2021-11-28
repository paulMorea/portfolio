import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';
import Projets from './Projets';

import '../styles/HomePage.css'

function HomePage(){
    return(
        <React.Fragment>
            <div className="firstContainer homePage">
                <NavBar />
                <Header />
            </div>
            <Projets />
            <Footer />
        </React.Fragment>
    )
}

export default HomePage