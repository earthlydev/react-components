import Photos from "../assets/photo-grid.png"

function Hero() {
    return (
        <section className="hero--feat flex">
            <img src={Photos} alt="photo grid of airbnb experiences" className="hero--photo" />
            <h1 className="fs-500 fw-bold hero--title">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero;