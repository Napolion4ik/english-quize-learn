function Game({ question, questions, onClickVariant, step }) {
    const procentage = Math.round((step / questions.length) * 100);

    return (
        <>
            <div className="progress">
                <div
                    style={{ width: `${procentage}%` }}
                    className="progress__inner"
                ></div>
            </div>
            <h1>Як перекладається слово {question.word} ?</h1>
            <ul>
                {question.variants.map((variant, index) => (
                    <li
                        className="question__item"
                        onClick={onClickVariant.bind(null, question, index)}
                        key={index}
                    >
                        {variant}
                    </li>
                ))}
            </ul>
        </>
    );
}
export default Game;
