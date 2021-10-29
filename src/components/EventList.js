import React from "react"

export default function EventList({ events, handleClick }) {
    return (
        <div>
            {/* 아래에서 events.map( ()=>()) 임에 주의. ()=>{}가 아님. */}
            {events.map((event, index) => (
                <React.Fragment key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>Delete</button>
                </React.Fragment>
            ))}
        </div>
    )
}