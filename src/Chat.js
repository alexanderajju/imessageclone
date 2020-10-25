import { IconButton } from '@material-ui/core'
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import React, { useState } from 'react'
import './Chat.css'




function Chat() {

const [message,setMessage]=useState("")

    const sendMessage=(e)=>{
        e.preventDefault()
        setMessage("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
                <h4>To: <span className="chat__name"> Channel name</span></h4>
                <strong>Details</strong>
            </div>

            {/* messages */}
            <div className="chat__messages">
                <h2>I am a message </h2>
                <h2>I am a message </h2>
                <h2>I am a message </h2>
                <h2>I am a message </h2>
            </div>
            {/* input */}
            <div className="chat__input">
                <form action="">
                    <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" type="text"/>
                    <button onClick={sendMessage} >Send Message</button>

                </form>
                <IconButton>
            <MicNoneOutlinedIcon className="chat__mic"/>
            </IconButton>
            </div>
         
           
        </div>
    )
}

export default Chat
