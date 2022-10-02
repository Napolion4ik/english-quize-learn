import "./Seacrh.css";
import searchIcon from "../../image/Search.svg";
import { useState } from "react";
import { useSelector } from "react-redux";

const Search = () => {
    const questions = useSelector(({ glossary }) => glossary.glossary);
    const [search, setSearch] = useState("");
    const [showWord, setShowWord] = useState("");

    const handlerShow = () => {
        const [searchWord] = questions.filter((item) => item.word === search);
        console.log(searchWord);
        setShowWord(searchWord.variants[searchWord.correct]);
    };
    const handlerSearch = (e) => {
        setShowWord("");
        setSearch(e.target.value);
    };
    return (
        <>
            <input
                className="search-input"
                type="text"
                value={search}
                onChange={handlerSearch}
            />
            <button onClick={handlerShow} className="btn__search">
                <img src={searchIcon} alt="search" />
            </button>
            {showWord && (
                <div className="show-translete">
                    <h1>{showWord}</h1>
                </div>
            )}
        </>
    );
};

export default Search;
