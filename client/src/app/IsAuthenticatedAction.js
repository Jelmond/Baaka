
import { createSlice } from "@reduxjs/toolkit";

export const storeSlice = createSlice({
    name: 'store',
    initialState: {
        isAuthenticated: false
    },
    reducers: {
        authentication: state => {
            state.isAuthenticated = true
        },
        deauthentification: state => {
            state.isAuthenticated = false
        }
    }
})

export const {authentication} = storeSlice.actions;
export const {deauthentification} = storeSlice.actions;

export const authenticationStatus = state => state.store.isAuthenticated;

export default storeSlice.reducer;