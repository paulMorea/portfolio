import '../styles/ProjetsCards.css'

function ProjetsCards({title,id,shortDescription, link,cover}){
    return(
        <div class="col">
        <a href={link}>
                <div class="card mx-2 my-3" key={id}>
                <img src={cover} class="card-img-top" alt={`${title}cover`}/>
                <div class="card-body">
                    <h5 class="card-title text-center">{title}</h5>
                    <p class="card-text">{shortDescription}</p>
                </div>
                </div>
                </a>
            </div>
            
    )
}

export default ProjetsCards