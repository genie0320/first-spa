export default function Title(props) {
    // App.js에서 이쪽으로 넘겨준 프로퍼티들은 props에 모두 담기게 된다. 키:값의 형태로.
    return (
        // 여기서도 역시나 하나의 div 안에 모든 것을 넣어야 한다.
        <div>
            {/* <h1 className='title'>Hello Event Genie</h1> */}
            <h1 className='title'>{props.title}</h1>
            <br />
            {/* <h2 className='subtitle'>Now these event opening</h2> */}
            <h2 className='subtitle'>{props.subtitle}</h2>
        </div>
    )
}