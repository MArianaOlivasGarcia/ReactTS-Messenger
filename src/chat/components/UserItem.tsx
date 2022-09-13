import { FC, useContext } from "react"
import { User } from "../../auth/context/AuthContext"
import { axiosWithToken } from "../../helpers/axios"
import { scrollToButtom } from "../../helpers/scrollToBottom"
import { types } from "../../types/types"
import { ChatContext } from "../context/ChatContext"


interface Props {
    user: User
}

export const UserItem: FC<Props> = ({ user }) => {

  const { chatState ,dispatch } = useContext( ChatContext );


  const handleOnClick = async () => {

    // Asignar como chat activo (seleccionar chat)
    dispatch({
      type: types.setActiveChat,
      payload: user.id
    })

    // Obtener sus 30 ultimos mensajes
    const resp = await axiosWithToken(`/messages/${ user.id }`)

    if ( resp.status ) {
      dispatch({
        type: types.setLast30Messages,
        payload: resp.last30
      })
    }
    
    // Mover scroll al final
    scrollToButtom('messages-scroll');

  }


  return (
    <li onClick={ handleOnClick }
      className={`w-100 chatItem ${ ( user.id ===  chatState.activeChat) && 'active-chat' }`}>
      <div className="px-4 py-2 d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
        <div className="d-flex align-items-center">
          <img 
            width={60} 
            height={60} 
            className='me-2'
            style={{ borderRadius: '100%' }}
            src="/images/no-image.webp" 
            alt="" />
          <div className="d-flex flex-column">
            <span className="text-white">{ user.fullName }</span>
            <span className="text-white" style={{ fontSize: 12 }} >{ user.email }</span>
          </div>
        </div>
        <span style={{ color: user.isOnline ? 'green' : 'red' }}>
          <i className="fa-solid fa-circle fa-2xs"></i>
        </span> 
      </div>
    </li>
  )
}
