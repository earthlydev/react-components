import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "../data.js"

function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id || index}
                {...item}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero /> 
            <section className="card--list flex">
                {cards}
            </section>
        </div>
    )
}

export default App