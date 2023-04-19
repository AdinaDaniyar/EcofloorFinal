import React from 'react';
import './Clients.css'
import plaza from '../../assets/images/dordoi.png'
import ololo from '../../assets/images/OCIF_logo-e1643186883491.png'
import bio from '../../assets/images/logoClient.png'
import avangard from '../../assets/images/avangard.png'
import photo from '../../assets/images/Products/123.webp'

const Clients = () => {
    return (
        <section id='clients'>
            <div className="container">
                <h2 className='clients_title'> Нас выбирают</h2>
                <div className="row">
                    <div className="col-6">
                        <div className="box__clients">

                            <p>Среди клиентов нашей компании - спортивные клубы, учреждения здравоохранения, школы,
                                детские центры, а также компании, офисы которых по всему Кыргызстану.Предлагаем вам
                                ознакомиться с некоторыми нашими клиентами и присоединиться к их числу лучших.</p>
                            <p>Мы продаем европейские напольные покрытия коммерческого класса.
                                На каждый из них имеется свидетельство о сертификации, подтверждающее весь объем
                                заявленных рабочих характеристик.
                                Никаких подделок и аналогов!

                            </p>
                            <p>
                                Наш принцип - максимальная забота об удобстве каждого клиента.
                                Доставим образцы покрытий в ваш офис для того, чтобы Вы могли оценить качество
                                предлагаемых материалов и сделать точный выбор.</p>
                            <p>Мы поставляем лучшие европейские материалы - по лучшим ценам. Никаких лишних
                                промежуточных звеньев между производителем и покупателем.Благодаря тому, что основные
                                поставки идут со склада производителя, под заказ, мы предоставляем Вам
                                минимальные цены, на продукцию великолепного качества.

                            </p>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box__clients">
                            <img className='clients__img' src={photo} alt=""/>

                        </div>
                    </div>


                </div>
                <div className=" box__clients-2">
                    <img src={plaza} alt=""/>
                    <img src={ololo} alt=""/>
                    <img src={bio} alt=""/>
                    <img src={avangard} alt=""/>
                </div>
            </div>

        </section>
    );
};

export default Clients;