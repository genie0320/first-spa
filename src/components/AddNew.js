import style from './AddNew.css'

export default function AddNew() {
    return (
        <div>
            {/* 방법1
            <form className="add-new-event">
                <label htmlFor="">Event title</label>
                <input type="text" id="title" />
            </form>  */}

            <form className="add-new-event">
                <label>
                    <span>Event Name</span>
                    <input type="text" />
                </label>
                <label>
                    <span>Event Date</span>
                    <input type="Date" />
                </label>
            </form>
        </div>
    )
}
