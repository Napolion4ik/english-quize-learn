import "./Header.css";
import logo from "../../image/logo.svg";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
const navItem = [
    ["Головна", "/"],
    ["Додати слово", "addWord"],
    ["Повторити слова", "quize"],
];

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(0);

    const handlerClickMenu = (index) => {
        setActiveMenu(index);
    };
    return (
        <header className="header">
            <div className="header__wrapper">
                <div className="header__logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className="header__navigate">
                    <ul className="header__navigate-nav">
                        {navItem.map(([nameMenu, path], index) => (
                            <li
                                onClick={handlerClickMenu.bind(
                                    undefined,
                                    index
                                )}
                                className={
                                    activeMenu === index ? "active-menu" : ""
                                }
                                key={nameMenu}
                            >
                                <Link to={path}>{nameMenu}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="header__logo">
                    <Search />
                </div>
            </div>
        </header>
    );
};

export default Header;
