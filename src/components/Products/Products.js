import React from 'react';
import './Products.css'
import pic from '../../assets/images/Products/1485936815222.jpeg'
import pic1 from '../../assets/images/Products/Marmoleum Modular.webp'
import pic2 from '../../assets/images/Products/1180x664_Set20_Horizon_63496_62523_62418 (1).webp'
import pic3 from '../../assets/images/Products/1180x664_Eternal-colour-40062-umber-Eternal-wood-11912-whitewash-oak_decor.webp'
import pic4 from '../../assets/images/Products/1180x664_Colorex_SD150201_pharma.webp'
import pic5 from '../../assets/images/Products/1180x664_Sphera_EC-450007.webp'
import pic6 from '../../assets/images/Products/1180x664_Flotex_planks_Triad_Roomshot_131005_131006_131011-C.webp'
import pic7 from '../../assets/images/Products/Needlefelt_Roomshot_96000_96038 (1).webp'
import pic8 from '../../assets/images/Products/1484748066058.jpeg'
import pic9 from '../../assets/images/Products/kovriki1.jpeg'
import pic10 from '../../assets/images/Products/potolki.png'
import pic11 from '../../assets/images/Products/акустич.webp'

const Products = () => {
    return (
        <section id='products'>
            <div className="container">
                <div data-aos="zoom-in">
                    <h2 className='products__title '>Продукция EcoFloor</h2>
                    <br/>
                    <p className='products__text '>Forbo Flooring Systems - мировой лидер в производстве
                        высококачественных,экологически чистых коммерческих напольных покрытий.
                        <br/>
                        Подвесные потолки AMF-Knauf - крупный производитель, изготавливающий функциональные модульные
                        потолки и панели из твердого минерального волокна.
                        <br/>
                        Входные грязезащитные ковры ARFEN - это решения в соответствии с высокими стандартами
                        качества для нужд строительного и промышленного сектора.
                    </p>
                    <br/>
                    <div className="row">
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic} alt=""/>
                                <h2>Натуральный мармолеум</h2>
                                <p>Настоящий победитель!Наши натуральные покрытия под брендом Marmoleum ассоциируются с
                                    экологичностью, долговечностью, высоким качеством и инновационным дизайном. Наше
                                    предложение включает решение для любого типа помещения. Откройте удивительный мир
                                    натурального мармолеума с более чем 300 цветами и более чем 12 различными
                                    структурами на
                                    выбор, предлагаемые как в плитке так и в рулоне.</p>

                                <li>Marmoleum Marbled</li>
                                <li>Marmoleum Solid</li>
                                <li>Marmoleum Modular в плитке</li>
                                <li>Нарезка Aquajet</li>
                                <li>Спортивные покрытия Marmoleum Sport</li>
                                <li>Токорассеивающий Marmoleum</li>
                                <li>Акустический marmoleum</li>
                                <li>Marmoleum Mendini</li>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic2} alt=""/>
                                <h2>Дизайнерская виниловая плитка</h2>
                                <p>Коллекция дизайнерской виниловой плитки Allura компании Форбо привносит эстетику
                                    натурального дерева и камня в Ваш интерьер, при этом, обеспечивая Вас преимуществами
                                    износостойкого и качественного материала: теплый под ногами, звукопоглощающий,
                                    прочный,
                                    легок в укладке и уходе.</p>
                                <li>Effekta Professional дизайн плитка</li>
                                <li>Effekta Intense</li>
                                <li>Allura Dryback</li>
                                <li>Allura Flex</li>
                                <li>Allura Puzzle</li>
                                <li>Allura Ease</li>
                                <li>Allura Decibel акустическая версия</li>
                                <li>Allura Click Pro</li>
                                <li>Enduro</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic3} alt=""/>
                                <h2>Проектный винил</h2>
                                <p>Проектный винил Форбо доступен как в плитке, так и в рулоне широкий выбор
                                    реалистичных
                                    деревянных дизайнов, имитаций под камень, метал и стекло, отлично подходит для
                                    учреждений здравоохранения, образования, офисов и торговых
                                    помещений износостойкий,
                                    высококачественный и легкий в уборке.</p>
                                <li>Eternal проектный винил</li>
                                <li>Emerald Spectra</li>
                                <li>Eternal Origina</li>
                                <li>Sarlon 15dB</li>
                                <li>Emerald Standart new</li>
                                <li>Акустический винил Sarlon</li>
                                <li>Emerald Wood FR</li>
                                <li>Sarlon Complete Step</li>
                                <li>Sportline</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic4} alt=""/>
                                <h2>Токопроводящие полы и чистые помещения</h2>
                                <p>Защитите свои технологии. Colorex - это высокотехнологичная система напольных
                                    покрытий,
                                    разработанная специально для отвода заряда из помещений ,чувствительных к
                                    статическому
                                    электричеству, таких как чистые" помещения, операционные залы и помещения для сборки
                                    электроники.</p>
                                <li>Colorex EC</li>
                                <li>Colorex SD</li>
                                <li>Sphera EC</li>
                                <li>Sphera SD</li>
                                <li>Marmoleum Ohmex</li>
                                <li>Colorex Plus</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic6} alt=""/>
                                <h2>Флокированное ковровое покрытие Flotex</h2>
                                <p>Flotex сочетает в себе практичность гибкого напольного покрытия с противоскользящими
                                    и
                                    акустическими свойствами. Flotex является
                                    износостойким и гипоаллергенным материалом. Не боится воды и является единственным
                                    текстильным покрытием, которое можно мыть.</p>
                                <li>Flotex в рулоне</li>
                                <li>Flotex в планках</li>
                                <li>Дизайнерские коллекции</li>
                                <li>Flotex в плитках</li>
                                <li>Flotex под заказ</li>
                                <li>Flotex H&L для сферы развлечений и гостеприимства</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic7} alt=""/>
                                <h2>Иглопробивной ковролин</h2>

                                <p>Прекрасные свойства сопротивления истиранию делают иглопробивной материал идеальным
                                    вариантом для зон, где предусмотрено интенсивное движение или использование мебели
                                    на
                                    колесиках, т.е. в офисных помещениях, административных зонах и торговых залах.</p>

                                <li>Forte</li>
                                <li>Akzent</li>
                                <li>Markant</li>
                                <li>Showtime Flotex Vision</li>
                                <li>Showtime Graphic</li>
                                <li>Showtime Colour</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic8} alt=""/>
                                <h2>Ковровая плитка</h2>
                                <p>Ковровая плитка славится своим эстетичным внешним видом, а также отличными
                                    показателями
                                    износостойкости даже в самых загруженных зонах. Предлагает клиентам
                                    непревзойденное качество.Ковровая
                                    плитка Tessera Высококачественная тафтинговая плитка Tessera выпускается в различных
                                    дизайнах.Ковровая плитка Tessera представляет собой эстетичный вид покрытия с
                                    превосходными функциональными свойствами для зон с высокой
                                    проходимостью.
                                </p>
                                <li>Tessera в плитках</li>
                                <li>Tessera в планках</li>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic5} alt=""/>
                                <h2>Гомогенный винил</h2>
                                <p> Виниловые полы очень популярны благодаря своей долговечности, низким
                                    эксплуатационным
                                    расходам и удобству. Гомогенный винил состоит из 1 слоя, который обеспечивает
                                    яркость и
                                    глубину цвета. </p>

                                <li>Sphera гомогенный винил</li>
                                <li>Sphera SD | EC токопроводящий винил</li>
                                <li>Sphera Elite</li>
                                <li>Sphera Element</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic1} alt=""/>
                                <h2>Натуральная Дизайн Плитка</h2>
                                <p>Категория натуральной плитки представляет собой Marmoleum в плитках и плашках,
                                    изготовленных из натуральных возобновляемых ресурсов. Современный дизайн
                                    сочетающийся с
                                    функциональностью, способствующий созданию безопасной среды внутри помещения, а
                                    также
                                    бережно использующий ресурсы планеты. Новая категория покрытий подходит также для
                                    зон
                                    высокой нагрузки. Откройте для себя мир натуральной дизайнерской плитки Marmoleum
                                    Modular и Marmoleum Click. </p>

                                <li>Marmoleum Modular</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic11} alt=""/>
                                <h2>Акустические покрытия</h2>
                                <p>Шум может оказать неблагоприятное воздействие на состояние человека такие например
                                    как: плохой сон,стресс,головная боль,потеря памяти и т.д. Вот почему акустические
                                    характеристики столь важны при строительстве новых зданий и при реконструкции
                                    существующих.Forbo Flooring специалист с 32 летним опытом производства акустических
                                    напольных покрытий. В нашей акустической линейке вы найдете такие высокие показатели
                                    снижение шума 15, 17 и 19 дБ.</p>

                                <li>Surestep Wood Decibel</li>
                                <li>Sarlon Complete Step</li>
                                <li>Modul'up 19 dB loose lay vinyl</li>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic10} alt=""/>
                                <h2>Подвесные потолки AMF-Knauf</h2>
                                <p>AMF-Knauf – крупный производитель, изготавливающий функциональные модульные потолки и
                                    панели из твердого минерального волокна. Продукция выпускается в Германии.
                                    Неизменное немецкое качество и стильный вид – ключевые характеристики, благодаря
                                    которым изделия пользуются высоким спросом. Их используют при обустройстве офисов,
                                    медицинских учреждений, кинотеатров,
                                    аудиторий, детских садов, бассейнов и квартир.</p>
                                <li>Плиты Ecomin</li>
                                <li>Плиты Thermatex</li>
                                <li>Подвесные системы</li>

                            </div>
                        </div>
                        <div className="col-4">
                            <div className="box__products ">
                                <img src={pic9} alt=""/>
                                <h2>Входные системы грязезащиты</h2>
                                <p>Влаговпитывающие коврики способны собирать пыль, песок и впитывать влагу, снимать с
                                    обуви уличную грязь и пыль, предотвращая, таким образом, появление в помещении
                                    грязных следов и разводов, а также защищая основное покрытие пола от разрушения. Для
                                    того чтобы коврики не задирались ногами и плотно прилегали к полу, они оснащены по краям
                                    бортиками из ПВХ. Алюминиевые коврики со вставкой из коврового покрытия. </p>
                                <li>KK 06</li>
                                <li>HH 01</li>
                                <li>Leila 42</li>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};


export default Products;