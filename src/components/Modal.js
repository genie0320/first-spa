import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose, dummyClick, isSalesModal }) {

    return ReactDOM.createPortal((

        <div className="modal-dim" onClick={handleClose}>
            {/* inline styling 1 */}
            <div
                className="modal"
                style={{
                    border: "4px solid",
                    // borderColor: "lightGreen",
                    // 이렇게 전통적인 수식을 통해서 간단히 조건적으로 스타일링도 가능함.
                    borderColor: isSalesModal ? "lightGreen" : "gray",
                    textAlign: "center"
                }} onClick={dummyClick}
            >
                {children}
                {/* inline style을 주는 방법 2 : 이렇게 props를 넘겨줄 때, 조건을 걸 수도 있다. */}
                <button
                    className={isSalesModal ? "isSales" : ""}
                    onClick={handleClose}
                >Close</button>
            </div >
        </div >
    ), document.body)
}

