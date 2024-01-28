import { useState } from 'react';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop'

function Todo(props){
const [ modalIsOpen, setModalIsOpen ] = useState(false); //this is a react hook

    function deleteHandler() {
        setModalIsOpen(true);    
    }
    function closeModalHandler(){
        setModalIsOpen(false)
    }

    return(
 <div className="card">
    <h2>{props.text}</h2>
    <div className="actions">
        <button className="btn" onClick={deleteHandler}>
            Delete
        </button>
    </div>
    {modalIsOpen && (<Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>
    )}

    { modalIsOpen && (<Backdrop onClick={closeModalHandler}/>
    )}
</div>)
}

export default Todo;