import { useState, useRef } from 'react'
import style from './AddNew.css'

// useRef()도 React의 Hook의 하나이다. 
// - useState는 component의 state를 관리하기 위한 것.
// - useRef는 객체를 반환하고 그 내부의 값들에 전통적인 js의 방식으로 접근할 수 있다.
// - 듣기로, 렌더링타이밍과 관련하여 많은 차이가 있다고 한다.

export default function AddNew({ addEvent }) {

    const title = useRef()
    const date = useRef()

    const resetValue = () => {
        title.current.value = ""
        date.current.value = ""
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // console.log(title, date)

        const event = {
            title: title.current.value,
            date: date.current.value,
            id: Math.floor(Math.random() * 10000)
        }

        addEvent(event)
        resetValue()
    }

    return (
        < form className="add-new-event" onSubmit={handleSubmit} >
            <label>
                <span>Event Name</span>
                <input
                    type="text"
                    ref={title}
                />
            </label>
            <label>
                <span>Event Date</span>
                <input
                    type="date"
                    ref={date}
                />
            </label>
            <button>Submit</button>
        </form >
    )
}
