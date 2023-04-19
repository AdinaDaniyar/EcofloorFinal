import React from 'react';
import './Footer.css'
import logo from '../../assets/images/logo (1).png'
import whats from '../../assets/images/whatsblack.png'
import instagram from '../../assets/images/inst.jpeg'
import telegram from '../../assets/images/телеграм.webp'
import face from '../../assets/images/facebookblack.png'


const Footer = () => {


    return (
        <section id='footer'>
            <div className="container">


                <div className="box__footer">
                    <ul>
                        <li>О нас</li>
                        <li>Продукция</li>
                        <img className='footer__logo' src={logo} alt=""/>
                        <li>Галерея</li>
                        <li>Сертификаты</li>

                    </ul>

                </div>

                <div className="box__footer">

                    <div className="box__a">
                        <a target="_blank" rel="noreferrer" href="https://wa.me/+996990460046"><img className='whats'
                                                                                                    src='https://cdn-icons-png.flaticon.com/512/160/160200.png' alt=''/></a>
                        <a target="_blank" rel="noreferrer" href="https://t.me/+996990460046"><img className='telegram'
                                                                                                   src='https://static-00.iconduck.com/assets.00/telegram-logo-icon-512x462-x03v2nmi.png'
                                                                                                   alt=''/></a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/ecofloor.kg/"><img
                            className='insta'
                            src='https://static-00.iconduck.com/assets.00/instagram-icon-512x512-37irhf22.png' alt=''/></a>
                        <a target="_blank" rel="noreferrer"
                           href="https://www.facebook.com/people/%D0%9D%D0%B0%D0%BF%D0%BE%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D0%BF%D0%BE%D0%BA%D1%80%D1%8B%D1%82%D0%B8%D1%8F-%D0%91%D0%B8%D1%88%D0%BA%D0%B5%D0%BA/100070869545273/?mibextid=LQQJ4d"><img
                            className='face'
                            src='https://cdn-icons-png.flaticon.com/512/1236/1236842.png' alt=''/></a>

                    </div>

                </div>
                <div className="footer__contact">
                    <h3>Наши контакты:</h3>
                    <p>+996 990 460046 <br/>
                        +996 999 860086</p>

                </div>
            </div>


        </section>
    );
};

export default Footer;