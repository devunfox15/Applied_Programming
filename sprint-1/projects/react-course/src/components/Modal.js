function Modal(props){
    function cancelHandler() {
        props.onCancel();
    }
    function confirmHandler() {
        props.onCancel();
    }
    
    return (
    <div className="modal">
        <p>Are you Sure?</p>
        <button className="btn btn--alt" onClick={cancelHandler}>
            cancel
        </button>
        <button className="btn" onClick={confirmHandler}>
            confirm
        </button>
    </div>
    );
}
export default Modal;