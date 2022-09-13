import { useContext, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom"
import { AuthContext } from "../auth/context/AuthContext";
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { ChatRoutes } from "../chat/routes/ChatRoutes"



export const AppRouter = () => {

  const { auth, verifyToken } = useContext( AuthContext );

  useEffect(() => {
    verifyToken();
  }, [ verifyToken ])

  if ( auth.isChecking ) {
    return (
      <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <Routes>
      {
          ( auth.isAuthenticated ) 
            ? <Route path="/*" element={ <ChatRoutes /> } />
            : <Route path="/auth/*" element={ <AuthRoutes /> } />
      }
      <Route path="/*" element={ <Navigate to='/auth/login' replace />} />
    </Routes>
  )
}
