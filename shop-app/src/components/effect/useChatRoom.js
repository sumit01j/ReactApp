//custom or userdefine hook 

import { useEffect } from "react"
import connectToChatRoom from "./connectTOChatRoom"

export default function useChatRoom(roomId, serverUrl){

    //hiding effect's logic inside custom hook 
    useEffect( ()=>{
        //setup function
        const connection = connectToChatRoom(roomId,serverUrl)
        connection.connect()

        //return cleanup function
        return ()=>{
            connection.disconnect()
        }

    }, [roomId,serverUrl]) // passing dependancies as state and props 
}