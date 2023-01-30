import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "../data.js"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id || index}
                coverImg={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <Hero /> 
            {cards}
        </div>
    )
}

export default App