import axios from "axios";
import translate from "translate";
let randomWords = require("random-words");

translate.engine = "google";
translate.key = process.env.GOOGLE_KEY;

export function getRandomInt(number) {
    return Math.floor(Math.random() * number);
}

export const setNewWord = async (english, ukraine) => {
    const correct = getRandomInt(4);
    const variants = [];
    const randomWord = randomWords(3);
    for (let item of randomWord) {
        const text = await translate(item, "uk");
        variants.push(text);
    }
    variants.splice(correct, 0, ukraine);

    const newWord = {
        word: english,
        variants,
        correct,
        rightAmount: 0,
    };

    await axios.post(
        "https://62dfdd2198dd9c9df6087ec8.mockapi.io/glossary",
        newWord
    );
};

export const updateWord = (id, body) => {
    axios.put(
        `https://62dfdd2198dd9c9df6087ec8.mockapi.io/glossary/${id}`,
        body
    );
};
