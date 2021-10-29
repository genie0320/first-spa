import { useState } from 'react'
import style from './AddNew.css'

export default function AddNew() {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    const resetValue = () => {
        setTitle('')
        setDate('')
    }
    return (
        < form className="add-new-event" >
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
            <p>Title - {title}, Date - {date} </p>
            <p onClick={resetValue}>Reset All</p>
        </form >
    )
}
