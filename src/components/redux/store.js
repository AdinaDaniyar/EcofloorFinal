import {configureStore} from "@reduxjs/toolkit"
import telegramSlice from "./slicers/telegramSlice";



export default configureStore({
    reducer:{

        telegram:telegramSlice
    }
})