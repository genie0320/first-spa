import './App.css';
import { useState } from 'react'

// Manage React States

function App() {

  const [name, setName] = useState('Genie')
  const const [events, setEvents] = useState([
    ('First event', id:1)
    ('Secend event', id:2)
    ('Third event', id:3)
  ])
  const handleClick = () => {
    setName('Nyao!')
    console.log(name)

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={ handleClick }>Change name</button>

      <div>
        <h2>
          map(event) in events = {() => (
            event, key={event.id}
        )}</h2>
      </div>
      
    </div>
  );
}

export default App;