import './App.css';
import { useState } from 'react'

// Manage React States

function App() {
  const [events, setEvents] = useState([
    { title: 'First event', id: 1 },
    { title: 'Secend event', id: 2 },
    { title: 'Third event', id: 3 }
  ])

  const handleClick = (id) => {
    // setEvents(() => {}
    // filter는 해당 배열의 값을 한개씩 가져와서 처리하므로, 뭘 어떻게 하길 바라는지에 대한 디테일한 주문을 할 수 있는 콜백함수로 넣어줄 수 있다.
    // 콜백(callback, call-after function) 함수는 다른 코드의 인수로서 넘겨주는 실행 가능한 코드를 말한다. 콜백을 넘겨받는 코드는 이 콜백을 필요에 따라 즉시 실행할 수도 있고, 아니면 나중에 실행할 수도 있다.

    // 방법1. 
    // setEvents(events.filter((event) => {
    //   return id !== event.id
    // }))

    // 방법2. 위의 방법으로는, 어떤 형태로든 다른 곳에서 변경된 events의 값을 매번 반영하지 못할 수 있다.
    // ********* 이 부분은... 이해가 잘 안된다... *************
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }
  // setState는 리액트님께 state가 이렇게 변경되었음을 보고하는 것. 보고하지 않으면 화면렌더 안해준다.

  return (
    <div className="App">

      {events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - {event.title}</h2>
          {/* 1. 클릭될 때 handleClick 함수를 발동시켜라. */}
          {/* <button onClick={handleClick}>Delete event</button> */}

          {/* 2. 화면 최초 렌더링시 바로 handleClick 발동됨 */}
          {/* <button onClick={handleClick()}>Delete</button> */}

          {/* 3. 화면 최초 렌더링시 클릭할 때 뭘 해야할지를 기억하고 있어라. = 즉, 실제로 클릭될 때까지는 아무짓도 안함. 그냥 알고만 있는 상태 */}
          {/* <button onClick={() => { handleClick() }}>Delete</button> */}

          {/* 4. 이걸 간단하게 정리하면, 즉 실무에서 많이 쓰이는 것은... 한줄짜리 간단한 코드에서는 {}를 뺀다.*/}
          {/* 여기에 나중에 조작이 쉽도록, 해당 아이템의 key를 기억해둘 수 있도록하면, 화면 렌더링시에 각 클릭버튼은 자기가 담당하고 있는 아이템의 key 값을 기억하고 있는 상태가 된다. */}
          <button onClick={() => handleClick(event.id)}>Delete</button>

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