export default function Title({ title, subtitle }) {
    // Destructuring makes simpler
    return (
        // 여기서도 역시나 하나의 div 안에 모든 것을 넣어야 한다.
        // <div> => <> react fragment. html에 inject 되지 않음. 따라서... 영역설정을 위한 확실한 이유가 있다면, <> 가 아닌, <div>를 써야 함.
        <div>
            {/* <h1 className='title'>Hello Event Genie</h1> */}
            <h1 className='title'>{title}</h1>
            <br />
            {/* <h2 className='subtitle'>Now these event opening</h2> */}
            <h2 className='subtitle'>{subtitle}</h2>
            {/* </div> */}
        </div>
    )
}