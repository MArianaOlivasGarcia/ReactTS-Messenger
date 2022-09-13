import { FC, useReducer } from "react";
import { ChatContext, initialState } from "./ChatContext"
import { chatReducer } from "./ChatReducer";


interface Props {
    children: React.ReactNode; 
}



export const ChatProvider: FC<Props> = ({ children }) => {

    const [chatState, dispatch] = useReducer<any>( chatReducer, initialState)

  return (
    <ChatContext.Provider value={{
        chatState,
        dispatch
    }}>
        { children }
    </ChatContext.Provider>
  )
}
