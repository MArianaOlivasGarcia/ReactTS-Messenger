import { createContext } from "react";
import { ChatState } from "./ChatReducer";


export const ChatContext = createContext<any>(null);

export const initialState: ChatState = {
    id: '',
    users: [],
    messages: []
}