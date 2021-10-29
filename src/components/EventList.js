import style from "./EventList.Module.css"

export default function EventList({ events, handleClick }) {
    return (
        <div>
            {events.map((event, index) => (
                <div className={style.card} key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}