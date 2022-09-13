import { types } from "../../types/types";


export interface ChatState {
    id: string,
    activeChat?: string,
    users?: [],
    messages?: []
}

export interface ChatAction {
    type: any;
    payload: any;
}

export const chatReducer = ( state: ChatState, action: ChatAction ) => {

    switch( action.type ) {

        case types.setUsers:
            return {
                ...state,
                users: [...action.payload]
            }

        case types.setActiveChat:

            if ( state.activeChat === action.payload ) return state;
            
            return {
                ...state,
                activeChat: action.payload
            }

        case types.setNewMessage: 
            // Si el chat activo es exactamente igual al que mando el mensaje
            if ( state.activeChat === action.payload.from.id ||
                 state.activeChat === action.payload.to.id) {
                return {
                    ...state,
                    messages: [ ...state.messages!, action.payload ]
                }
            } else {
                return state
            }

        case types.setLast30Messages: 
            return {
                ...state,
                messages: [...action.payload]
            }

        case types.clearChatState: 
            return {
                id: '',
                users: [],
                messages: []
            }    

        default: 
            return state;

    }



}