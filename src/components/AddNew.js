import { useState } from 'react'
import style from './AddNew.css'

export default function AddNew({ addEvent }) {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('Seoul')

    function resetValue() {
        setTitle('')
        setDate('')
        setLocation('Seoul')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const event = {
            title: title,
            date: date,
            location: location,
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
            <label>
                <span>Location</span>
                <select onChange={(e) => { setLocation(e.target.value) }}>
                    <option value="Seoul">Seoul</option>
                    <option value="Busan">Busan</option>
                    <option value="Jeju">Jeju</option>
                </select>
            </label>
            <button>Submit</button>
        </form >
    )
}
