import {Action, createAction} from "@reduxjs/toolkit";

export const Admin = "admin";
export const Editor = "editor";
export const Guest = "guest";
export type UserRoleType = typeof Admin | typeof Editor | typeof Guest;
export const userRoles = [Admin, Editor, Guest];

export interface IUserData {
    id: number;
    email: string;
    firstName?: string;
    lastName?: string;
    role: UserRoleType;
}

export const SET_USER_DATA: Action = createAction<IUserData
    , 'SET_USER_DATA'>('SET_USER_DATA');

export const LOGIN: Action = createAction<{ token: string, accountData: IUserData }, 'LOGIN'>('LOGIN');
export const LOGOUT: Action = createAction<'LOGOUT'>('LOGOUT');
export const START_LOGIN: Action = createAction<'START_LOGIN'>('START_LOGIN');

