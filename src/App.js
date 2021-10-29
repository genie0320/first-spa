import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'

function App() {

  const [showModal, setShowModal] = useState(false)

  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    { title: 'First event', id: 1 },
    { title: 'Secend event', id: 2 },
    { title: 'Third event', id: 3 }
  ])

  const handleClose = () => {
    setShowModal(false)
  }

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const subTitleTest = "Course can use like this"

  return (
    <div className="App">
      <Title title="Can use multiple times" subtitle={subTitleTest} />

      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>Show Event</button>
      )}
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>Hide Event</button>
      )}

      {showEvents && <EventList events={events} handleClick={handleClick} />}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>

      {showModal && <Modal handleClose={handleClose} isSalesModal={false}>
        <h2>Warning</h2>
        <hr />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur veniam quae voluptates ratione qui, sequi voluptatem quia consequatur ex quidem perferendis. Dolorum sed qui id laborum veritatis ex, voluptatum minus?</p>
        <a href="#">Click</a>
      </Modal>}
    </div >
  );
}
export default App;