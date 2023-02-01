import Star from "../assets/star.png"

function Card(props) {
    let badgeText;
    if (props.openSpots === 0 ) {
        badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <section className="card fs-300 flex">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../src/assets/${props.coverImg}`} className="card--img"/>
            <div className="card--stats flex">
                    <img src={Star} alt="red star" className="card--star"/>
                <span>{props.stats.rating}</span>
                <span className="text-grey">({props.stats.reviewCount}) •</span>
                <span className="text-grey">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="fw-bold">From ${props.price} </span>/ person</p>
        </section>
    )
}

export default Card;