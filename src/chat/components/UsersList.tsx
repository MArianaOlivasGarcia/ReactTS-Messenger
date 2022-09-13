import { useContext } from "react"
import { AuthContext, User } from "../../auth/context/AuthContext"
import { types } from "../../types/types"
import { ChatContext } from "../context/ChatContext"
import { UserItem } from "./UserItem"

export const UsersList = () => {

    const { auth, logout } = useContext( AuthContext )

    const { chatState, dispatch } = useContext( ChatContext )

    const handleLogOut = () => {

        dispatch({
          type: types.clearChatState
        })

        logout();

    }

  return (
    <div className="bg-primary col-4 p-0 vh-100" style={{ overflowY: 'scroll' }}>


            <nav className="shadow-sm d-flex align-items-center" 
                style={{ background: '#24a3f2', justifyContent: 'space-between' }}>
                <span className="ms-2">{ auth.user.fullName }</span>
                <button 
                    onClick={ handleLogOut }
                    type="button" 
                    className="btn btn-outline-light btn-sm me-2">Cerrar sesión</button>
            </nav>

          <ul className="nav">


            {
              chatState.users
                .filter( (user: User) => user.id !== auth.user.id )
                .map( (user: User) => (
                 <UserItem key={ user.id } user={ user } />
              ))
            }
           


          </ul>
        </div>
  )
}
