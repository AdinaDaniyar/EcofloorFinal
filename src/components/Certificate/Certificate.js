import React from 'react';
import './Certificate.css'
import pic from '../../assets/images/IMG_00001.jpeg'
import pic2 from '../../assets/images/IMG_00002.jpeg'
import pic3 from '../../assets/images/IMG_00003.jpeg'
import pic4 from '../../assets/images/IMG_00004.jpeg'

const Certificate = () => {
    return (
        <section id='certificate'>
            <div className="container">
                <h2 className='certificate__title'>Сертификаты Forbo</h2>

                <p className='certificate__text'>Мы являемся официальными представителями Forbo Flooring
                    Systems,который является мировым лидером в
                    производстве
                    высококачественных коммерческих напольных покрытий.</p>
                <div className="row">

                    <div className="col-6">
                        <div className="box__certificate">
                            <img src={pic} alt=""/>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box__certificate">
                            <img src={pic2} alt=""/>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box__certificate">
                            <img src={pic3} alt=""/>

                        </div>
                    </div>
                    <div className="col-6">
                        <div className="box__certificate">
                            <img src={pic4} alt=""/>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Certificate;