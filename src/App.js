import './App.css';
import { useState } from 'react'

// Manage React States

function App() {

  const [name, setName] = useState('Genie')
  const [events, setEvents] = useState([
    { title: 'First event', id: 1 },
    { title: 'Secend event', id: 2 },
    { title: 'Third event', id: 3 }
  ])
  // 배열안에 들어가는 값은 {}로 감싼다. NOT ()

  const handleClick = () => {
    setName('Nyao!')
    console.log(name)

    return (
      <div className="App">
        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Change name</button>

        {events.map((event) => (
          <div>
            <h2 key={event.id}>{event.index} - {event.title}</h2>
          </div>
        ))}

      </div>
    );
  }
  // {/* {events.map()} */}
  // {/* () => {} 가 아니라, () => () 이유는... map()을 통해서 반환된 값이 JSX에서 사용되어야 할 값이기 때문이다.  */}
  // {/* JSX안에 js를 넣을 때에는 {}로 감싼다. */}
}

export default App;