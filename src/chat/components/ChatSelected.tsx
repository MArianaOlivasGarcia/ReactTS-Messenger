import { useContext, useEffect } from "react"
import { AuthContext } from "../../auth/context/AuthContext";
import { scrollToButtom, scrollToButtomAnimated } from "../../helpers/scrollToBottom";
import { ChatContext } from "../context/ChatContext"
import { ChatForm } from "./ChatForm"



export const ChatSelected = () => {

  const { chatState } = useContext( ChatContext );

  const { auth } = useContext( AuthContext );

  return (
    <div className="h-100 bg-light" >

      <nav className="bg-white shadow-sm d-flex align-items-center">
        <span className="ms-2" style={{ color: 'green' }}>
          <i className="fa-solid fa-circle fa-2xs"></i>
        </span> 
        <h6 className="m-0 ms-2">Mariana Olivas</h6>
      </nav>

      <div className="chatContainer" > 
      {/* Necesito este ID para hacer el scroll */}
        <div id="messages-scroll" className="p-3" style={{ overflow: 'scroll', height: '681px' }}>

          {     
            chatState.messages.map( (message: any) => (
              
                ( message.from.id === auth.user.id ) 
                  ? <div className="myChatContainer" key={message.id}>
                      <div className="p-2 myChat">
                        <span>{ message.content }</span>
                      </div>
                    </div>
                  : <div className="friendChatContainer" key={message.id}>
                    <div className="p-2 friendChat">
                        <span>{ message.content }</span>
                    </div>
                  </div>

            ))
          }


        </div> 
      </div>


      <div className="inputChatContainer d-flex flex-column p-2" style={{ background: '#EBEBEB' }}>
        <ChatForm />
      </div>

    </div>
  )
}
