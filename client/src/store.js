import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice.js'
import quoteSlice from './features/quote/quoteSlice.js'
export default configureStore({
    reducer: {
        counter:counterReducer,
        quote: quoteSlice,
    }
})