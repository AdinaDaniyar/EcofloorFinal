import React from 'react';
import './About.css'
import about from '../../assets/images/1485856737659.jpeg'
import forbo from '../../assets/images/forbo_flooring_logo.svg'

const About = () => {
    return (
        <section id='about'>
            <div className="container">

                <div className="row">
                    <div className="col-6">
                        <div className="box__about">
                            <img className='about__img' src={about} alt=""/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box__about">
                            <h2 className='title__about'>О нашей компании</h2>

                            {/*<span className='span__about'></span>*/}
                            <p className='text__about'>Компания ОсОО «ЭкоФлоор» начала свою деятельность в 2021г.и
                                является официальным дистрибьютором коммерческих напольных покрытий «Forbo Flooring» в
                                Кыргызстане. Также у нас вы можете преобрести Подвесные потолки AMF-Knauf и входные
                                грязезащитные ковры Arfen Турция. Мы поставляем лучшие европейские материалы - по лучшим ценам.Нашей основной задачей
                                стало вывести на рынок качественные, профессиональные материалы, соответствующие
                                международным стандартам и требованиям. </p>
                            <img className='forbo__img' src={forbo} alt=""/>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default About;