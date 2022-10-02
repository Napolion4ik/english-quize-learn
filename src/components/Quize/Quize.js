import { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import Game from "../Game/Game";
import Result from "../Result/Result";
import "./Quize.css";
import { shuffle } from "../../secondLogic/logic";
import { updateWord } from "../../api/sercvices";

const Quize = () => {
    const questions = useSelector(({ glossary }) => glossary.glossary);
    const cloneQuestions = JSON.parse(JSON.stringify(questions));

    const tenRandomQuestions = useMemo(() => {
        const filterQuestions = cloneQuestions.filter(
            (item) => item.rightAmount !== 3
        );
        shuffle(filterQuestions);
        return filterQuestions.slice(0, 10);
    }, [questions]);

    const [step, setStep] = useState(0);
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const question = tenRandomQuestions[step];

    const onClickVariant = (question, index) => {
        if (question.correct === index) {
            const updateQuestion = {
                ...question,
                rightAmount: question.rightAmount + 1,
            };
            updateWord(question.id, updateQuestion);
        }

        setCorrectAnswer([
            ...correctAnswer,
            {
                ...question,
                respond: index,
            },
        ]);
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <section className="section__quize">
            <div className="section__wrapper">
                <div className="quize-test">
                    {step !== tenRandomQuestions.length ? (
                        <Game
                            step={step}
                            questions={tenRandomQuestions}
                            onClickVariant={onClickVariant}
                            question={question}
                        />
                    ) : (
                        <Result
                            correctAnswer={correctAnswer}
                            questions={tenRandomQuestions}
                        />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Quize;
