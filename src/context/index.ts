import React from "react";




export interface IAppContext {
    user: {
        accountData: {
            id: number;
            email: string;
            firstName?: string;
            lastName?: string;
        } | null,
        isLogin: boolean,
        token: string,
    };
    beautySalon: {
        mainPhoto: string;
        services: {
            data: [],
            count: number,
        };
        employees: {
            data: [],
            count: number,
        };
        products: {
            data: [],
            count: number,
        };
    }
}

export const defaultAppContext = {
    user: {
        accountData: null,
        isLogin: false,
        token: ""
    },
    beautySalon: {
        mainPhoto: "",
        services: {
            data: [],
            count: 0,
        },
        employees: {
            data: [],
            count: 0,
        },
        products: {
            data: [],
            count: 0,
        }
    }
};
export const AppContext = React.createContext(defaultAppContext);
