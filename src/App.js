import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import reactDom from 'react-dom';

// React fragment <>

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

  const subTitleTest = "Course can use like this"
  return (
    <div className="App">
      {/* 작성한 components는 이렇게 불러다 박아 넣을 수 있다. */}
      {/* <Title /> */}

      {/* 이렇게 포탈처럼... 프로퍼티를 넘길 수도 있다. */}
      <Title title="This is from App" subtitle="Like time machine" />
      <Title title="Can use multiple times" subtitle={subTitleTest} />

      <div>
        {!showEvents && (
          <button onClick={() => setShowEvents(true)}>Show Event</button>
        )}
        {showEvents && (
          <button onClick={() => setShowEvents(false)}>Hide Event</button>
        )}

      </div>

      {showEvents && events.map((event, index) => (
        // 여기에는 props가 있기에... <>쓸 수 없다.
        // <div key={event.id}>
        <React.Fragment key={event.id}>
          <h2>{index} - {event.title}</h2>
          <button onClick={() => handleClick(event.id)}>Delete</button>
          {/* </div> */}
        </React.Fragment>
        // 이렇게 처리하면... 사실 코딩할 때는 더 길어지지만, html을 이쁘게 유지할 수 있다.
      ))}
    </div>
  );
}
export default App;