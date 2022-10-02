import { useState } from "react";
import "./Result.css";
import { Link } from "react-router-dom";

function Result({ correctAnswer, questions }) {
    const [showResult, setShowResult] = useState(false);
    const sumCurrentAnswer = correctAnswer.reduce(
        (acc, item, index) =>
            item.respond === questions[index].correct ? 1 + acc : acc,
        0
    );
    return (
        <>
            {!showResult ? (
                <div className="result">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
                        alt="congratulate"
                    />
                    <h2>
                        Ви відповили правильно на {sumCurrentAnswer} питання з{" "}
                        {questions.length}
                    </h2>
                    <div className="result__wrapper">
                        <button>
                            <Link to="/">На головну</Link>
                        </button>
                        <button onClick={() => setShowResult(true)}>
                            Переглянути результат
                        </button>
                    </div>
                </div>
            ) : (
                <div className="result-answer">
                    {correctAnswer.map((item) => (
                        <>
                            <h1>Як перекладається слово {item.word} ?</h1>
                            <ul>
                                {item.variants.map((variant, ind) => (
                                    <li
                                        key={variant}
                                        className={
                                            item.correct === ind
                                                ? "right"
                                                : item.respond === ind
                                                ? "not-right"
                                                : null
                                        }
                                    >
                                        {variant}
                                    </li>
                                ))}
                            </ul>
                        </>
                    ))}
                </div>
            )}
        </>
    );
}
export default Result;
