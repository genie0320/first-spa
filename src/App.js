import './App.css';
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

// React fragment <>

function App() {

  // 결국 handleClose 가 이루어지는 곳은 여기이므로, 이벤트관리는 여기서. modal의 state를 관리하여 닫기 관리
  const [showModal, setShowModal] = useState(true)

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
      {/* 작성한 components는 이렇게 불러다 박아 넣을 수 있다. */}
      {/* <Title /> */}

      {/* 이렇게 포탈처럼... 프로퍼티를 넘길 수도 있다. */}
      <Title title="This is from App" subtitle="Like time machine" />
      <Title title="Can use multiple times" subtitle={subTitleTest} />


      {!showEvents && (
        <button onClick={() => setShowEvents(true)}>Show Event</button>
      )}
      {showEvents && (
        <button onClick={() => setShowEvents(false)}>Hide Event</button>
      )}


      {
        showEvents && events.map((event, index) => (
          // 여기에는 props가 있기에... <>쓸 수 없다.
          // <div key={event.id}>
          <React.Fragment key={event.id}>
            <h2>{index} - {event.title}</h2>
            <button onClick={() => handleClick(event.id)}>Delete</button>
            {/* </div> */}
          </React.Fragment>
          // 이렇게 처리하면... 사실 코딩할 때는 더 길어지지만, html을 이쁘게 유지할 수 있다.
        ))
      }

      <Modal>
        {/* 이렇게 Modal 에 딸린 children 으로 전달할 수 있다. 즉 Modal의 외격만 정해놓고, 내용은 html편집과 거의 유사한 느낌으로 전달할 수 있다는 것. */}
        <h2>Hello, evenryone!</h2>
        <p>My name is Genie</p>
      </Modal>

      {/* prop으로 넘겨줄 수 있는 것은 함수 그 자체도 가능하다.  */}
      {showModal && <Modal handleClose={handleClose}>
        <h2>Warning</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur veniam quae voluptates ratione qui, sequi voluptatem quia consequatur ex quidem perferendis. Dolorum sed qui id laborum veritatis ex, voluptatum minus?</p>
        <a href="#">Click</a>
      </Modal>}
    </div >
  );
}
export default App;