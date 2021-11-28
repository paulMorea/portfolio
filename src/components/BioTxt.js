import '../styles/BioTxt.css'

import Me from '../assets/ma-bio.gif'

function BioTxt(){
    return(
        <div className="row bioTxt">
            <div className="col-12 col-md-6">
                <h3 className='title text-center'>MA BIO</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab. Quae deleniti asperiores cum mollitia quaerat incidunt pariatur corporis corrupti, numquam, ut facere reprehenderit dolor enim accusantium laudantium illo dolorem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab. Quae deleniti asperiores cum mollitia quaerat incidunt pariatur corporis corrupti, numquam, ut facere reprehenderit dolor enim accusantium laudantium illo dolorem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab. Quae deleniti asperiores cum mollitia quaerat incidunt pariatur corporis corrupti, numquam, ut facere reprehenderit dolor enim accusantium laudantium illo dolorem!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, ab. Quae deleniti asperiores cum mollitia quaerat incidunt pariatur corporis corrupti, numquam, ut facere reprehenderit dolor enim accusantium laudantium illo dolorem!</p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
            <div className="col-8"><img src= {Me} class="img-fluid me" alt="" /></div>
                
            </div>
        </div>
    )
}

export default BioTxt