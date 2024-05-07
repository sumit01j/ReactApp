export default function connectToChatRoom (roomId, serverUrl){
    return {
        connect: () => console.log(`Connected to ${roomId} at ${serverUrl}`),
        disconnect: () => console.log(`Disconnected from ${roomId} as ${serverUrl}`)
    }
}