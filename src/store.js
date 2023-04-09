import { configureStore } from '@reduxjs/toolkit';
import slice from "./store/slice";
import api from "./store/MiddleWare/Api";



export const store =configureStore({
    reducer:{
        slice
    },
    middleware: [
        api
    ]
})