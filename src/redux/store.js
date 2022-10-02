import { configureStore } from "@reduxjs/toolkit";
import glossary from "./reducer/glossary";
export const store = configureStore({
    reducer: {
        glossary,
    },
});
