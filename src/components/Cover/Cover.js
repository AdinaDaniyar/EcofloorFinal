import React from 'react';
import './Cover.css'
import cover from '../../assets/images/cover.webp'


const Cover = () => {
    return (
        <section id='cover'>
            <div>
                <img className='cover__img' src={cover} alt=""/>
                <h2 className='cover__title'>
                    Улучшая мир вокруг
                </h2>
                <p data-aos="fade-up" className='cover__text '>Все точки производства, включая эксплуатацию- <br/> наши
                    напольные покрытия отвечают самым <br/>высоким
                    экологическим требованиям.
                </p>

            </div>

        </section>
    );
};

export default Cover;