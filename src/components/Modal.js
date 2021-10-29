import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose }) {
    // return ReactDOM.createPortal( 원래 리턴할 값, 리턴할 것을 보여줄 새로운 영역 )
    return ReactDOM.createPortal((
        <div className="modal-dim">
            <div className="modal">
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>
    ), document.body)
    // 만들어진 portal 요소는, 통상적인 DOM tree 밖에 만들어지는 것이고, 예시와 같은 경우 body tag의 가장 아랫쪽에 위치하게 된다. 즉 App.css 의 스타일링에서 벗어났다는 소리.
    // portal을 만들때에는 이를 위한 스타일링을 따로 고려해주는 것이 좋을 듯
}

