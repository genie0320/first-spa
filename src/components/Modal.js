import ReactDOM from 'react-dom'
import './Modal.css'

export default function Modal({ children, handleClose }) {
    return (
        React.createPortal(<div className="modal-dim">
            <div className="modal">
                {children}
                <button onClick={handleClose}>Close</button>
            </div>
        </div>, Document.getElementById('body'))
    )
}

