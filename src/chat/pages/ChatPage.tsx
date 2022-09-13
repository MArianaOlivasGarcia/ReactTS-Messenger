import { useContext } from "react"
import { NoChatSelected, ChatSelected, UsersList } from "../components"
import { ChatContext } from "../context/ChatContext"



export const ChatPage = () => {

  const { chatState } = useContext( ChatContext )

  return (
    <div className="vw-100 vh-100">

      <div className="row m-0">

      
        <UsersList />

        <div className="col-8 p-0">

            {
              chatState.activeChat 
                ? <ChatSelected />
                : <NoChatSelected />
            }
          
          

        </div>

      </div>

    </div>  
  )
}
