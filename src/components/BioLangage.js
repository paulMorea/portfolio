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
            <div className="row d-flex my-2 d-flex justify-content-evenly">   
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Html} alt="" class="img-fluid logo" /></div>
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Js} alt="" class="img-fluid logo" /></div>
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Php} alt="" class="img-fluid logo" /></div>
            </div>    
            <div className="row my-2 d-flex justify-content-evenly">
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Git} alt="" class="img-fluid logo" /></div>
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={ReactLogo} alt="" class="img-fluid logo" /></div>
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Symfony} alt="" class="img-fluid logo" /></div>
            </div>
            <div className="row my-2 d-flex justify-content-evenly">
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Boostrap} alt="" class="img-fluid logo" /></div>
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Wordpress} alt="" class="img-fluid logo" /></div>
                <div className="col-4 d-flex justify-content-center my-2 logoContainer"><img src={Photoshop} alt="" class="img-fluid logo" /></div>
            </div>
        
    </div>
    )
}

export default BioLangage