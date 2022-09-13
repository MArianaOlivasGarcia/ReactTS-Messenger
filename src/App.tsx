import { AuthProvider } from "./auth/context/AuthProvider"
import { ChatProvider } from "./chat/context/ChatProvider"
import { AppRouter } from "./router/AppRouter"
import { SocketProvider } from "./sockets/context/SocketProvider"




export const App = () => {
  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  )
}
