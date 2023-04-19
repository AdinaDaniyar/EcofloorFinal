import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {bot} from "../../../utils/constans";


export const telegramAsync = createAsyncThunk(
    'telegram/telegramAsync',
    async (payload, {rejectWithValue, dispatch}) => {
        try {
            const response = await axios.get(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${payload}`)
            console.log(response)
            if(response.data.ok){
                dispatch (handleMessage(response.data.ok))
            }
        } catch (e) {

            console.log(e)
            return rejectWithValue(e.message)
        }
    }
)


const telegramSlice = createSlice({
    name: 'telegram',
    initialState: {
        login: {
            name: '',
            phone:''

        },
        status: null,
        error: null,
        toggleEr:false,
    },
    reducers: {
        handleLogin(state, action) {
            state.login = action.payload
        },
        handleMessage(state,action){
            state.toggle = action.payload
        },
        handleErrors(state,action){
            state.error=action.payload
        }
    },
    extraReducers: builder => {
        builder.addCase(telegramAsync.fulfilled, (state, action) => {
            console.log('fulfilled')
            state.status = 'fulfilled';
        })
        builder.addCase(telegramAsync.rejected, (state, action) => {
            console.log('rejected')
            state.status = 'rejected'
            state.error = action.payload
        })
        builder.addCase(telegramAsync.pending, (state, action) => {
            console.log('pending')
            state.status = 'pending';
            state.error = null
        })
    }
})

export const {handleLogin,handleMessage,handleErrors} = telegramSlice.actions
export default telegramSlice.reducer


