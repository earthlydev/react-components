import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

function App() {
  const cards = data.map(entry => {
    return (
        <Card  
          {...entry} 
        />
      )} 
   );


  return (
   <div>
      <Navbar />
      <main className="card-list">
        {cards}
      </main>
   </div>
  )
}

export default App
