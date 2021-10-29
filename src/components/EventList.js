export default function EventList(events, handleClick) {
    return (
        events.map(({ title, id }, index) => {
            <div key={id}>
                <h2>{index} - {title}</h2>
                <button onClick={() => handleClick(id)}>Delete</button>
            </div>
        }
        )
    )
}
