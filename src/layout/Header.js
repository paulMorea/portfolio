import '../styles/Header.css'
import Welcome from '../assets/welcome-sign.png'

import {Link} from 'react-router-dom'

function Header(){
    return(
        <div className='header container-fluid'>
            <div className="row headerRow">
                <div className="col-12 col-md-5">
                    <p>Bonjour, je suis <span className='headerWords'>Paul MOREA,</span></p>
                    <p>Étudiant <span className='headerWords'>développeur Web</span> et web mobile à l'AFPA Rouen.</p>
                    <p>Je serais disponible pour un <span className='headerWords'>emploi</span> à partir du mois de Mai 2022. 😉</p>
                    <p><span className='headerWords'>En savoir plus</span> 👉 <Link to="/bio" className='text-link'><span id='headerBio'>Ma biographie</span></Link></p>
                </div>
                <div className="col-12 col-md-7 d-flex justify-content-center">
                    <div className='col-7'>
                        <img src={Welcome} class="img-fluid" alt="Welcome"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header