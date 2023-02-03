import { MdLocationOn } from "react-icons/md"

function Card(props) {
   return (
     <section className="card flex">
        <img src={props.imageUrl} alt={props.title} className="card--img"/>
        <article className="card--details flow">
            <div className="card--location flex">
                <p><span><MdLocationOn className="location-icon"/></span> {props.location}</p>
                <a href={props.googleMapsUrl} className="text-grey" target="_blank" rel="noopener noreferrer">View on Google Maps</a>
            </div>
            <h1 className="fs-600 card--title">
                <strong>{props.title}</strong>
            </h1>
            <p className="bold">{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
        </article>
    </section>
    )
}

export default Card;