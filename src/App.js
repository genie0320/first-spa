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
  }
  // 진짜... 미치겠네...ㅠㅜ 함수의 { }은 잘 챙겨주자...

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={handleClick}>Change name</button>

      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
        </div>
      ))}
    </div>
  );
}
// key는 처리 대상이 되는 element의 template 마다 붙여야 한다. 나중에 지우거나 할 때 h2만 지우고 div를 남겨둘 생각이 아니라면.
// 생각해보면, index는 events 그 자체에 포함된 뭔가가 아니다. 배열에 소속되면서 붙게 된 속성.
// {/* {events.map()} */}
// {/* () => {} 가 아니라, () => () 이유는... map()을 통해서 반환된 값이 JSX에서 사용되어야 할 값이기 때문이다.  */}
// {/* JSX안에 js를 넣을 때에는 {}로 감싼다. */}

// return이 없다거나, { }가 없다거나... 하면 제발 함수부터 다 닫아보자. 말도 안되게 } 부터 추가할 생각하지말고!!!!

export default App;