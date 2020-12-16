import { combineReducers } from '@reduxjs/toolkit'
import {authReducer} from "../pages/Authorization/utils/reducer";
export const rootReducer = combineReducers({
    user : authReducer
});
export type RootState = ReturnType<typeof rootReducer>
