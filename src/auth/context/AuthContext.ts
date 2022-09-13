import { createContext } from "react";

export interface AuthState {
    user?: User,
    isChecking: boolean,
    isAuthenticated: boolean
}

export interface User {
    id: string,
    fullName: string,
    email: string,
    image?: string,
    isOnline: boolean
}

export const AuthContext = createContext<any>(null);



export const initialState: AuthState = {
    isChecking: true,
    isAuthenticated: false,
}


