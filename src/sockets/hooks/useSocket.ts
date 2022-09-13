import { useCallback, useEffect, useState } from "react"
import io, { Socket } from "socket.io-client"



export const useSocket = ( serverPath: string ) => {


    // const socket = useMemo(() => io( serverPath , {
    //     transports: ['websocket']
    //  }), [ serverPath ])

    const [socket, setSocket] = useState(null) as any
    const [isOnline, seTisOnline] = useState(false);


    const connectSocket = useCallback( () => {
        
        const accessToken = localStorage.getItem('accessToken');

        const socketTemp = io( serverPath , {
            transports: ['websocket'],
            autoConnect: true,
            forceNew: true,
            query: {
                'Authorization': `Bearer ${ accessToken }`
            }
        })

        setSocket(socketTemp)

    }, [serverPath] )



    const disconnectSocket = useCallback( () => {
        socket?.disconnect();
    }, [ socket ] )



    useEffect(() => {
       seTisOnline( socket?.connected );
    }, [ socket ])


    useEffect(() => {
        socket?.on('connect', () => seTisOnline( true ));
    }, [ socket ])


    useEffect(() => {
        socket?.on('disconnect', () => seTisOnline( true ));
    }, [ socket ])


    return {
        socket,
        isOnline,

        connectSocket,
        disconnectSocket
    }

}
