import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose }) {
    return ReactDOM.createPortal((
        <div className="modal-dim">

            {/* inline styling 1 */}
            <div className="modal" style={{
                border: "4px solid",
                borderColor: "lightGreen",
                textAlign: "center"
            }}>
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div >
    ), document.body)
}

