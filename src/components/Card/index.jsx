import './style.css'

function Card({value, description, type, className}){
    return(
        <div className={`card ${className}`}>
            <div className="cardHeader">
                <div>
                    <h2>{description}</h2>
                </div>
                <div>
                    <span >{value}</span>
                </div>
            </div>
            <div className="cardFooter">
                <span className="type">{type}</span>
            </div>
            
            
        </div>
    )
}


export default Card