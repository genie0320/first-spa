import { useState } from 'react'
import style from './AddNew.css'

export default function AddNew() {

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    // 아래와 같이 진행할 수도 있지만... 이렇게 되면 결국 title, date의 change에 대한 처리를 하기 위해 더 복잡한 과정을 거쳐야 하므로... inline으로 넣기로 한다.
    // const handleChange = (e) => {
    //     console.log(e.target.value)
    // }

    return (
        < div >
            {/* 방법1
            <form className="add-new-event">
                <label htmlFor="">Event title</label>
                <input type="text" id="title" />
            </form>  */}

            < form className="add-new-event" >
                <label>
                    <span>Event Name</span>
                    {/* <input type="text" onChange={handleChange} /> */}
                    <input type="text" onChange={(e) => setTitle(e.target.value)} />
                </label>
                <label>
                    <span>Event Date</span>
                    <input type="Date" onChange={(e) => setDate(e.target.value)} />
                </label>
                <p>Title - {title}, Date - {date} </p>
            </form >
        </div >
    )
}
