import '../styles/NavBar.css';

import { Link } from "react-router-dom"; 

function NavBar(){
    return(
        <div className='menu container-fluid'>
            <div className="row menu-row">
                <div className='col-4'>Paul MOREA</div>
                <div className='col-4 text-center'><Link to="/portfolio/" className='text-link '>Portfolio</Link></div>
                <div className='col-4 text-end pulse'><Link to="/contact" className='text-link '><span id='contact'>Contact</span></Link></div>
            </div>
        </div>
    )
}

export default NavBar