
import './Modal.css'

// export default function Modal(props) {
export default function Modal({ children, handleClose }) {
    return (
        // <div className="modal-dim">
        //     <div className="modal">
        //         <h2>Hello, evenryone!</h2>
        //         <p>My name is Genie</p>
        //     </div>
        // </div>

        // for reuserbility.
        // prop을 통해서 전달하도록 해도 되지만, children prop 을 사용할 수 있다.
        //  앞에서 넘겨받은 함수인 prop은 다음과 같이 사용한다.
        <div className="modal-dim">
            <div className="modal">
                {children}
                <button onClick={handleClose}>Close</button>
                {/* 여기에 btn을 넣을 경우, 모든 모달에는 닫기버튼이 들어가지만(템플릿이니까) prop으로 handleClose를 넘겨주지 않으면, 바보버튼이 된다. 주의 */}
            </div>
        </div>
    )
}

