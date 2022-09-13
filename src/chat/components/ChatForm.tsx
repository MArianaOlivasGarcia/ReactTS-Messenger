import { ChangeEvent, FormEvent, useContext, useState } from "react"
import { AuthContext } from "../../auth/context/AuthContext";
import { SocketContext } from "../../sockets/context/SocketContext";
import { ChatContext } from "../context/ChatContext";




export const ChatForm = () => {

    const { socket } = useContext( SocketContext );
    const { auth } = useContext( AuthContext );
    const { chatState } = useContext( ChatContext );

    const [message, setMessage] = useState('');

    const handleOnChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setMessage( target.value )
    }

    const handleOnSubmit = ( event: FormEvent ) => {
        event.preventDefault();

        if ( message.length === 0 ) { return; }

        socket.emit('personal-message', {
            from: auth.user.id,
            to: chatState.activeChat,
            content: message
        })

        setMessage('');
    }


    return (
        <form noValidate 
            onSubmit={ handleOnSubmit }
            className="d-flex">

            <input 
                type="text" 
                className="form-control me-2" 
                placeholder="Escribe tu mensaje aquí..."
                value={ message }
                onChange={ handleOnChange }
                />

            <button
                disabled={ message.length === 0 }
                className="btn btn-primary">Enviar</button>

        </form>
    )


}
