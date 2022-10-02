import "./Seacrh.css";
import searchIcon from "../../image/Search.svg";

const Search = () => {
    return (
        <>
            <button className="btn__search">
                <img src={searchIcon} alt="search" />
            </button>
        </>
    );
};

export default Search;
