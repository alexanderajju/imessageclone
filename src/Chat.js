import { IconButton } from '@material-ui/core'
import { MicNone } from '@material-ui/icons'
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
            {/* input */}
            <div className="chat__input">
                <form action="">
                    <input value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Message" type="text"/>
                    <button onClick={sendMessage} >Send Message</button>

                </form>
                <IconButton>
            <MicNone className="chat__mic"/>
            </IconButton>
            </div>
         
           
        </div>
    )
}

export default Chat
