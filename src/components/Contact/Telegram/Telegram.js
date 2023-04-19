import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {handleLogin, telegramAsync} from "../../redux/slicers/telegramSlice";
import {Box} from "@mui/material";
import './Telegram.css'
import Modal from "../../Modal/Modal";

const Telegram = () => {


    const dispatch = useDispatch()
    const {login, toggleEr, error} = useSelector(state => state.telegram)

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }


    const handleValues = (prop) => (e) => {
        dispatch(handleLogin({...login, [prop]: e.target.value}))
    }

    // console.log(login)

    const telegramUI = (e) => {
        e.preventDefault()
        console.log(login)
        const message = `Name: ${login.name} Phone: ${login.phone}`
        if (login.name && login.phone) {
            dispatch(telegramAsync(message))
            console.log('check')
            handleToggle()
        } else {
            alert('inputs are empty')
        }
    }



    return (

        <Box
            component='form'
            onSubmit={telegramUI}
            noValidate
            autoComplete="off"
        >

            <div className="telegram">
                <input
                    placeholder='Имя'
                    className='input no-arrows'
                    value={login.name}
                    type="text"
                    onChange={handleValues('name')}/>
                <input id="standard-basic"
                       placeholder='Номер'
                       className='input no-arrows'
                       value={login.phone}
                       type="number"
                       onChange={handleValues('phone')}/>

                <button
                    type='submit'


                >Отправить
                </button>
                {toggle && <Modal
                    handleToggle={handleToggle}
                    toggleEr={toggleEr}
                    error={error}
                />}
            </div>

        </Box>

    );
};
export default Telegram;