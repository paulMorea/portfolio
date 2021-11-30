import '../styles/BioLangage.css'
import Boostrap from '../assets/logos-techno/bootstrap.png'
import Git from '../assets/logos-techno/git.png'
import Html from '../assets/logos-techno/html-css.png'
import Js from '../assets/logos-techno/js.png'
import Photoshop from '../assets/logos-techno/photoshop.png'
import Php from '../assets/logos-techno/php.png'
import ReactLogo from '../assets/logos-techno/react.png'
import Symfony from '../assets/logos-techno/symfony.png'
import Wordpress from '../assets/logos-techno/wordpress.png'

function BioLangage(){
    return(
        <div className="row bioLangage">
            <div className="row titleRow">
                <div className="col-12 my-2">
                    <h3 className='title text-center'>Mes technologies</h3>
                </div>
            </div>
            <div className="row d-flex d-flex justify-content-evenly">   
                <div className="col-12 d-flex justify-content-center my-2 logoContainer">
                    <img src={Html} alt="" className="img-fluid logo mx-1 mx-md-5" />
                    <img src={Js} alt="" className="img-fluid logo mx-1 mx-md-5" />
                    <img src={Php} alt="" className="img-fluid logo mx-1 mx-md-5" />
                </div>
            </div>    
            <div className="row d-flex justify-content-evenly">
                <div className="col-12 d-flex justify-content-center my-2 logoContainer">
                    <img src={Git} alt="" className="img-fluid logo mx-1 mx-md-5" />
                    <img src={ReactLogo} alt="" className="img-fluid logo mx-1 mx-md-5" />   
                    <img src={Symfony} alt="" className="img-fluid logo mx-1 mx-md-5" /> 
                </div>
            </div>
            <div className="row d-flex justify-content-evenly">
                <div className="col-12 d-flex justify-content-center my-2 logoContainer">
                    <img src={Boostrap} alt="" className="img-fluid logo mx-1 mx-md-5" />
                    <img src={Wordpress} alt="" className="img-fluid logo mx-1 mx-md-5" />
                    <img src={Photoshop} alt="" className="img-fluid logo mx-1 mx-md-5" />
                </div>
            </div>
        </div>
    )
}

export default BioLangage