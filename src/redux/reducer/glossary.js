import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    glossary: [],
};

export const getWords = createAsyncThunk(
    "glossary/getWords",
    async (_, { rejectWithValue, dispatch }) => {
        const res = await axios.get(
            "https://62dfdd2198dd9c9df6087ec8.mockapi.io/glossary"
        );
        dispatch(setWords(res.data));
    }
);

export const glossaryWord = createSlice({
    name: "glossary",
    initialState,
    reducers: {
        setWords: (state, action) => {
            state.glossary = action.payload;
        },
    },
});

export const { setWords } = glossaryWord.actions;
export default glossaryWord.reducer;
