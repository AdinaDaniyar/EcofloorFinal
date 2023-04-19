import React, {useState} from 'react';
import {Link} from "react-scroll";
import './Header.css'
import logo from '../../assets/images/logo (1).png'
import '../Header/Burger.css'


const Header = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }


    return (
        <header className='header'>
            <div className="container">
                <div className='header__nav'>
                    <Link to='cover'>
                        <img className='header__img' src={logo} alt=""/>
                    </Link>
                    <ul className={`nav ${toggle ? 'show-nav' : ''}`}>
                        <li><Link
                            className='shadow-text'
                            smooth={true}
                            to='about'
                            activeClass={'active'}
                            offset={-100}
                            delay={500}
                            style={{cursor: 'pointer'}}
                        >О нас</Link></li>
                        <li><Link
                            className='shadow-text'
                            smooth={true}
                            to='products'
                            activeClass={'active'}
                            delay={500}
                            offset={-100}
                            style={{cursor: 'pointer'}}

                        >Продукция</Link></li>
                        <li><Link
                            className='shadow-text'
                            smooth={true}
                            to='gallery'
                            activeClass={'active'}
                            delay={500}
                            offset={-100}
                            style={{cursor: 'pointer'}}

                        >Галерея</Link></li>
                        <li><Link
                            className='shadow-text'
                            smooth={true}
                            to='certificate'
                            activeClass={'active'}
                            delay={500}
                            offset={-100}
                            style={{cursor: 'pointer'}}

                        >Сертификаты</Link></li>
                        <li><Link
                            className='shadow-text'
                            smooth={true}
                            to='footer'
                            activeClass={'active'}
                            delay={500}
                            offset={-100}
                            style={{cursor: 'pointer'}}

                        >Контакты</Link></li>
                        <Link className=''
                              smooth={true}
                              to='contact'
                              activeClass={'active'}
                              delay={500}
                              offset={-100}
                              style={{cursor: 'pointer'}}>
                            <button className=''>Связаться</button>
                        </Link>
                    </ul>


                    <div onClick={handleToggle} className={`mobile-btn ${toggle ? 'show-mobile-btn' : ''}`}>
                        <span></span>
                    </div>


                </div>
            </div>
            <div
                onClick={handleToggle}
                className={toggle ? 'backdrop' : 'disappear'}

            ></div>
        </header>
    );
};

export default Header;