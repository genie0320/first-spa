import { useState } from 'react'
import style from './AddNew.css'

export default function AddNew({ addEvent }) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const resetValue = () => {
        setTitle('')
        setDate('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
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
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event Date</span>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <button>Submit</button>
        </form >
    )
}
