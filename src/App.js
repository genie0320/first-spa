import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

// React Portal
// Modal을 DOM tree구조에 종속되지 않게 렌더링하여, 불필요한 성능저하를 막기 위함. (특히 애니메이션을 넣을 때...)


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
      <Title title="This is from App" subtitle="Like time machine" />
      <Title title="Can use multiple times" subtitle={subTitleTest} />

      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>Show Event</button>
      )}
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>Hide Event</button>
      )}

      {showEvents && events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete</button>
        </React.Fragment>
      ))}

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>

      {showModal && <Modal handleClose={handleClose}>
        <h2>Warning</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur veniam quae voluptates ratione qui, sequi voluptatem quia consequatur ex quidem perferendis. Dolorum sed qui id laborum veritatis ex, voluptatum minus?</p>
        <a href="#">Click</a>
      </Modal>}
    </div >
  );
}
export default App;