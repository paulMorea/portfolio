import '../styles/BioTxt.css'

import Me from '../assets/ma-bio.gif'

function BioTxt(){
    return(
        <div className="row bioTxt">
            <div className="col-12 col-md-6 meTxt">
                <h3 className='title text-center'>MA BIO</h3>
               <div className="col-12 text">
                   <p>Passionné d'informatique et de nouvelles technologies au sens large depuis mon plus jeune, et après une expérience professionnelle en conseiller de commmunication, je décide aujourd'hui de me reconvertir.</p>
                   <p>J'ai d'abord commmencer à me former en autodidacte (via des sites comme OpenClassRoom, Grafikart, Code Wars etc). J'ai mûri mon projet à travers une "préparation aux métiers de l'informatique" au GRETA de Cherbourg. Je suis actuellement en formation  "développeur Web et Web mobile" à l'AFPA de Rouen afin de valider un titre professionnel (bac +2). Mes qualités : curieux, capacité à apprendre continuellement, esprit d'équipe, créativité et esprit critique. Je serais disponible pour un emploi à partir du mois de Mai 2022.</p>
               </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center meImg">
                <div className="col-12 col-md-8 d-flex justify-content-center"><img src= {Me} className="img-fluid me" alt="" /></div> 
            </div>
        </div>
    )
}

export default BioTxt