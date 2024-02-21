import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    purchases: [],
    // prices: [],
    // dates: [],
    // category: []
}

export const financeSlice = createSlice({
    name: 'finance',
    initialState,
    reducers: {
        updatePurchases: (state, action) => {
          state.purchases.push(action.payload);
        },
        // sortPurchasesByName: () => {

        // },
        // sortPurchasesByPrice: () => {

        // },
        // sortPurchasesByDate: () => {

        // },
        // sortPurchasesByCategory: () => {

        // },

    }
}
)

export const { updatePurchases } = financeSlice.actions;

export default financeSlice.reducer;