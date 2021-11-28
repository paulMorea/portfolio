import '../styles/Footer.css';

import LogoLinkedin from '../assets/logo-linkedin.png'
import LogoGithub from '../assets/logo-github.png'
import LogoTwitter from '../assets/logo-twitter.png'

function Footer(){
    return(
        <div className='container-fluid footer'>
            <div className="row">
                <div className="col-12 col-md-2">
                    <div className="col" id='Name'>Paul MOREA</div>
                    <div className="col fw-bold">Portfolio 2021 v1.0</div>
                </div>
                <div className="col-12 col-md-2 text-start">
                    <div className="col notLavender">Étudiant développeur Web</div>
                    <div className="col notLavender">& Web mobile</div>
                </div>
                <div className="col-12 col-md-7">
                    <div className="row text-center">
                        <div className="col"><a href="https://www.linkedin.com/in/paul-morea/">Linkedin</a></div>
                        <div className="col"><a href="https://github.com/paulMorea">GitHub</a></div>
                        <div className="col"><a href="https://twitter.com/Paul_Morea_">Twitter</a></div>
                    </div>
                    <div className="row text-center">
                        <div className="col logo"><a href="https://www.linkedin.com/in/paul-morea/"><img src={LogoLinkedin} class="img-fluid rounded" alt="..."/></a></div>
                        <div className="col logo"><a href="https://github.com/paulMorea"><img src={LogoGithub} class="img-fluid rounded" alt="..."/></a></div>
                        <div className="col logo"><a href="https://twitter.com/Paul_Morea_"><img src={LogoTwitter} class="img-fluid rounded" alt="..."/></a></div>
                    </div>
                </div>
                <div className="col-12 col-md-1 text-end">
                    <div className="col notLavender">Crédits</div>
                </div>
            </div>
        </div>
    )
}

export default Footer