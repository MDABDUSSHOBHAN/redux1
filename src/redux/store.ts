import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice"
export const store = configureStore({
    reducer:{
        counter:counterReducer,
    },
});


// counter & store ar modhe angta lege galo ar madhome ______>>>
