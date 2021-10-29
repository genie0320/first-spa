import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
import AddNew from './components/AddNew'

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
        <button onClick={() => setShowModal(true)}>Add new</button>
      </div>

      {showModal && <Modal handleClose={handleClose} isSalesModal={true}>
        <h2>Add New Event</h2>
        <hr />
        <AddNew />
        <a href="#">Click</a>
      </Modal>}
    </div >
  );
}
export default App;