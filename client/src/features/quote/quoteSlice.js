import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'


export const quoteSlice = createSlice({
    name: 'quote',
    initialState : {
      
    },
    reducers: {
        getQuote : (state, action) => {
            
            state.quoteData = action.payload

        }
    }
})

export const {getQuote} = quoteSlice.actions

export default quoteSlice.reducer