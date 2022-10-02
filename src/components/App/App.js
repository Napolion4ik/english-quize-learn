import "./App.css";
import Header from "../Header/Header";
import Home from "../Home/Home";
import AddWord from "../AddWord/AddWord";
import Quize from "../Quize/Quize";
import { useDispatch } from "react-redux";
import { getWords } from "../../redux/reducer/glossary";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWords());
    }, []);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="addWord" element={<AddWord />} />
                <Route path="quize" element={<Quize />} />
            </Routes>
        </div>
    );
}

export default App;
