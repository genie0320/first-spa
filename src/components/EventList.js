import style from "./EventList.Module.css"

export default function EventList({ events, handleClick }) {
    return (
        <div>
            {/* class를 지정하기 위해서는, 해당 태그가 렌더링 후에도 살아남아야 하므로, html injection이 이루어지지 않는 fragment를 사용할 수 없다.  
            일반적인 div 를 사용할 것.
            실제로 렌더링된 이후에 부여된 클래스명을 살펴보면, 랜덤넘버링이 붙어서 해당 위치에만 적용되는 특별한 클래스명이 부여된 것을 알 수 있다.
            */}
            {events.map((event, index) => (
                <div className={style.card} key={event.id}>
                    <h2>{index} - {event.title}</h2>
                    <button onClick={() => handleClick(event.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}