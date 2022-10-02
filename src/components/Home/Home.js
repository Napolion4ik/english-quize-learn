import "./Home.css";
import arrow from "../../image/arrowright.svg";
import Glossary from "../Glossary/Glossary";

const Home = () => {
    return (
        <>
            <section className="section__home">
                <div className="section__wrapper">
                    <div className="content">
                        <div className="content__info">
                            <h1>LEARN WITH US!</h1>
                            <p>Навчайся в 200% ефективніше з нами!</p>
                            <p>Не лінись, дій!</p>
                        </div>
                        <div className="content__moreinfo">
                            <div className="content__card">
                                <p className="content__card-title">
                                    Навчайся ефективніше
                                </p>
                                <div className="content__car-more">
                                    <p>Більше</p>
                                    <img src={arrow} alt="arrowright" />
                                </div>
                            </div>
                            <div className="content__card content__card-blue">
                                <p className="content__card-title">
                                    Проходь тести
                                </p>
                                <div className="content__car-more">
                                    <p>Більше</p>
                                    <img src={arrow} alt="arrowright" />
                                </div>
                            </div>
                            <div className="content__card content__card-yellow">
                                <p className="content__card-title">
                                    Зручний словник
                                </p>
                                <div className="content__car-more">
                                    <p>Більше</p>
                                    <img src={arrow} alt="arrowright" />
                                </div>
                            </div>
                            <div className="content__card content__card-red">
                                <p className="content__card-title">
                                    План розвитку
                                </p>
                                <div className="content__car-more">
                                    <p>Більше</p>
                                    <img src={arrow} alt="arrowright" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Glossary />
        </>
    );
};

export default Home;
