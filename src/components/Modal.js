
import './Modal.css'

// export default function Modal(props) {
export default function Modal({ children }) {
    return (
        // <div className="modal-dim">
        //     <div className="modal">
        //         <h2>Hello, evenryone!</h2>
        //         <p>My name is Genie</p>
        //     </div>
        // </div>

        // for reuserbility.
        // prop을 통해서 전달하도록 해도 되지만, children prop 을 사용할 수 있다.
        <div className="modal-dim">
            <div className="modal">
                {children}
            </div>
        </div>
    )
}

