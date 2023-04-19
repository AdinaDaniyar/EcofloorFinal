import React, {useEffect} from 'react';
import './Modal.css'
import {handleMessage} from "../../components/redux/slicers/telegramSlice";
import {useDispatch} from "react-redux";

const Modal = ({handleToggle,toggleEr,error}) => {

    const dispatch =useDispatch()

    useEffect(()=>{
        const body = document.body
        // body.style.overflow='hidden'

    },[])

    useEffect(()=>{
        if(error){
            dispatch (handleMessage(false))

        }
    },[])
    return (
        <div className='backdrop__modal'
             onClick={handleToggle}
        >
            <div className="modal"
                 onClick={e=>e.stopPropagation()}
            >
                <p className='exit'
                   onClick={handleToggle}

                >x</p>
                {!error ?<h2>Сообщение отправлено успешно!</h2>:error}
            </div>
        </div>
    );
};

export default Modal;