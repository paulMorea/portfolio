import '../styles/Projets.css'

import ProjetsCards from '../components/ProjetsCards'

import {projetsList} from '../datas/projetsList'

function Projets(){
    return(
        <div className="projets container-fluid">
            <div className="row projetsTitle">
                <div className="d-flex flex-row align-items-center" id='mesProjets'>
                    <div className="col fs-1 fw-bold text-center">Mes Projets</div>       
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {projetsList.map(({title,id,shortDescription,link,cover}) => (
                <ProjetsCards 
                    title={title}
                    id={id}
                    shortDescription={shortDescription}
                    link={link}
                    cover={cover}
                />
                ))}
            </div>
            
        </div>
    )
}

export default Projets

