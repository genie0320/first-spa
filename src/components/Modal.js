import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose, isSalesModal }) {
    return ReactDOM.createPortal((
        <div className="modal-dim">

            {/* inline styling 1 */}
            <div className="modal" style={{
                border: "4px solid",
                // borderColor: "lightGreen",
                // 이렇게 전통적인 수식을 통해서 간단히 조건적으로 스타일링도 가능함.
                borderColor: isSalesModal ? "lightGreen" : "gray",
                textAlign: "center"
            }}>
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div >
    ), document.body)
}

