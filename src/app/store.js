import { configureStore } from '@reduxjs/toolkit';
import financeReducer from '../features/finance/financeSlice.js'

export const store = configureStore({
    reducer: {
        finance: financeReducer,
    },
})