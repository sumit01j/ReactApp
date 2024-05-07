import { useEffect, useState } from "react"
import connectToChatRoom from "./connectTOChatRoom"
import useChatRoom from "./useChatRoom"

const ChatRoom = ({roomId}) =>{

    const [serverUrl,setServerUrl] = useState('http://hostname:port/music')

    //call custom hook 
    useChatRoom(roomId,serverUrl)

    /* useEffect( ()=>{
        //setup function
        const connection = connectToChatRoom(roomId,serverUrl)
        connection.connect()

        //return cleanup function
        return ()=>{
            connection.disconnect()
        }

    }, [roomId,serverUrl]) // passing dependancies as state and props  */

    return(
        <div>
            <input value={serverUrl} onChange={e => setServerUrl(e.target.value)}/>
        </div>
    )

}

export default ChatRoom