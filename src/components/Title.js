export default function Title({ title, subtitle }) {
    // Destructuring makes simpler
    return (
        // 여기서도 역시나 하나의 div 안에 모든 것을 넣어야 한다.
        <div>
            {/* <h1 className='title'>Hello Event Genie</h1> */}
            <h1 className='title'>{title}</h1>
            <br />
            {/* <h2 className='subtitle'>Now these event opening</h2> */}
            <h2 className='subtitle'>{subtitle}</h2>
        </div>
    )
}