import { useSelector } from "react-redux";
import "./Glossary.css";
import Loader from "../Loader/Loader";

const Glossary = () => {
    const glossary = useSelector(({ glossary }) => glossary.glossary);

    return (
        <>
            <div className="glossary">
                {!glossary.length ? (
                    <Loader />
                ) : (
                    <div className="section__wrapper">
                        <div className="glossary__information">
                            <p>
                                Якщо рядок зафарбований таким кольором{" "}
                                <span></span> це означає що ви дали правильну
                                відповідь після проходження тесту в кіслькості 3
                                раз.
                            </p>
                        </div>
                        <table>
                            <thead>
                                <tr className="word__item-head">
                                    <th scope="col">Слово</th>
                                    <th scope="col">Переклад</th>
                                </tr>
                            </thead>
                            <tbody>
                                {glossary.map((item) => (
                                    <tr
                                        className={
                                            item.rightAmount >= 3
                                                ? "word__item learned"
                                                : "word__item"
                                        }
                                    >
                                        <td>{item.word}</td>
                                        <td>{item.variants[item.correct]}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </>
    );
};

export default Glossary;
