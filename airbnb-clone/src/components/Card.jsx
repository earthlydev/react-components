import Star from "../assets/star.png"

function Card(props) {
    return (
        <section className="card fs-300">
            <img src={`../src/assets/${props.coverImg}`} className="card--img"/>
            <div className="card--stats flex">
                    <img src={Star} alt="red star" className="card--star"/>
                <span>{props.rating}</span>
                <span className="text-grey">({props.reviewCount}) •</span>
                <span className="text-grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="fw-bold">From ${props.price} </span>/ person</p>
        </section>
    )
}

export default Card;