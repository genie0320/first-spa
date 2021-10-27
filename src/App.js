import './App.css';
import { useState } from 'react'
import Title from './components/Title'

// Components

function App() {

  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: 'First event', id: 1 },
    { title: 'Secend event', id: 2 },
    { title: 'Third event', id: 3 }
  ])

  const handleClick = (id) => {

    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  return (
    <div className="App">
      <Title />
      <div>
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>Show Event</button>
        )}
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>Hide Event</button>
        )}

      </div>

      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
export default App;