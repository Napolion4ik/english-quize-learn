import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNewWord } from "../../api/sercvices";
import { getWords } from "../../redux/reducer/glossary";
import "./AddWord.css";

const AddWord = () => {
    const [wordInEnglish, setWordInEnglish] = useState("");
    const [wordInUkraine, setWordInUkraine] = useState("");
    const [showSucces, setShowSucces] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setShowSucces(false);
        }, [2000]);
    }, [showSucces]);

    const handlerChangeEnglish = (e) => {
        setWordInEnglish(e.target.value);
    };
    const handlerChangeUkraine = (e) => {
        setWordInUkraine(e.target.value);
    };

    const handlerSumbit = (english, ukraine, e) => {
        e.preventDefault();
        if (english && ukraine) {
            setNewWord(english, ukraine)
                .then(() => {
                    dispatch(getWords());
                    setShowSucces(true);
                })
                .finally(() => {
                    setWordInEnglish("");
                    setWordInUkraine("");
                });
        } else {
        }
    };

    return (
        <section className="section__add">
            <div className="section__wrapper">
                <form
                    className="form__add"
                    onSubmit={handlerSumbit.bind(
                        this,
                        wordInEnglish,
                        wordInUkraine
                    )}
                >
                    <div className="text-field">
                        <label className="text-field__label">
                            Слово на англійській
                        </label>
                        <div className="text-field__icon-2 text-field__icon-2_email">
                            <input
                                onChange={handlerChangeEnglish}
                                className="text-field__input"
                                value={wordInEnglish}
                            />
                        </div>
                    </div>
                    <div className="text-field">
                        <label className="text-field__label">
                            Слово на українській
                        </label>
                        <div className="text-field__icon-2 text-field__icon-2_search">
                            <input
                                onChange={handlerChangeUkraine}
                                className="text-field__input"
                                value={wordInUkraine}
                            />
                        </div>
                    </div>
                    <div>
                        <button className="form-btn" type="submit">
                            Відправити
                        </button>
                    </div>
                </form>
            </div>
            {showSucces && (
                <div className="popup-success">
                    <p>Успішно відправлено</p>
                </div>
            )}
        </section>
    );
};

export default AddWord;
