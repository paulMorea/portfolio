import React from 'react'
import '../styles/Bio.css'
import BioLangage from './BioLangage'
import BioTxt from './BioTxt'

function Bio(){
    return(
        <React.Fragment>
            <div className="container-fluid bio">
                <BioTxt />
            </div>
            <div className="container-fluid ">
                <BioLangage />
            </div>
        </React.Fragment>
    )
}
export default Bio