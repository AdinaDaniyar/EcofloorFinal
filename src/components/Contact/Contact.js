import React from 'react';
import './Contact.css'
import Telegram from "./Telegram/Telegram";


const Contact = () => {
    return (
        <section id='contact'>
            <div className="container">
                <div className="box__contact">
                    <h2 className='contact__title'>Перезвоните мне</h2>
                    <p className='contact__text'>Оставьте свои контакты и мы вам перезвоним</p>

                    <Telegram/>

                </div>


            </div>


        </section>
    );
};

export default Contact;