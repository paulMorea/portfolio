import '../styles/ProjetsCards.css'

function ProjetsCards({title,id,shortDescription, link,cover}){
    return(
        <div className="col">
            <a href={link}>
                <div className="card mx-2 my-3" key={id}>
                    <img src={cover} className="card-img-top" alt={`${title}cover`}/>
                    <div className="card-body">
                        <h5 className="card-title text-center fs-1 fw-bold">{title}</h5>
                        <p className="card-text fs-3 fw-bold">{shortDescription}</p>
                    </div>
                </div>
            </a>
        </div>     
    )
}

export default ProjetsCards