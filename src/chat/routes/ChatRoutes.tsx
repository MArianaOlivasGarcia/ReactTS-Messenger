


import { Navigate, Route, Routes } from 'react-router-dom'
import { ChatPage } from '../pages'

export const ChatRoutes = () => {
  return (
    <Routes>
        <Route path="chat" element={ <ChatPage /> }/>

        <Route path="/*" element={ <Navigate to="/chat" /> }/>
    </Routes>
  )
}
