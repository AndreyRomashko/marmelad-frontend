import {createReducer} from "@reduxjs/toolkit";
import {Guest, LOGIN, LOGOUT, SET_USER_DATA, START_LOGIN} from "./actions";

const defaultAccountData = {
    id: "",
    email: "",
    firstName: "",
    lastName: "",
    role: Guest,
};
const defaultState = {
    accountData: defaultAccountData,
    isLogin: false,
    token: "",
    isLoginInProgress: false,
};
export const authReducer = createReducer(defaultState, builder =>
    builder
        .addCase(SET_USER_DATA.type, (state, action) => {
            state.accountData = action.payload
        })
        .addCase(START_LOGIN.type, (state, action) => {
            state.isLoginInProgress = true;
        })
        .addCase(LOGIN.type, (state, action) => {
            state.isLogin = true;
            state.token = action.payload.token;
            state.accountData = action.payload.accountData;
            state.isLoginInProgress = false;
        })
        .addCase(LOGOUT.type, (state, action) => {
            state.isLogin = false;
            state.token = "";
            state.accountData = defaultAccountData;
        })
);
