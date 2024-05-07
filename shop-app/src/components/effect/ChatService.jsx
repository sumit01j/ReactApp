import { useState } from "react"
import ChatRoom from "./ChatRoom"

const ChatService = () => {

    const[roomId ,setRoomId] = useState('Music')
    const[show,setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }

    //event handler 
    const changeChatRoom = e => setRoomId(e.target.value)

    return(
        <div>
            <label htmlFor="i1">Select Chat Room</label>
            <select id="i1" value={roomId} onChange={changeChatRoom}>
                <option>Music</option>
                <option>News</option>
                <option>Wheather</option>
                <option>Cricket</option>
            </select>
            <button className="btn btn-outline-success ms-2" onClick={handleShow}>{ show? 'Close Chat' : 'Open Chat'}</button>
            { 
                show && <ChatRoom roomId={roomId}/>
            }
        </div>
    )
}

export  default ChatService