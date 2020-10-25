import { IconButton } from '@material-ui/core'
import MicNoneOutlinedIcon from '@material-ui/icons/MicNoneOutlined';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import './Chat.css'
import Message from './Message';
import { selectChatName,selectChatId } from './user/chatSlice';

import db from './firebase'
import firebase from 'firebase'
import { selectUser,setUser,logout } from './user/userSlice';



function Chat() {

const [message,setMessage]=useState("")
const [text,setText]=useState([])
const chatName=useSelector(selectChatName)
const chatId=useSelector(selectChatId)
const user=useSelector(selectUser)

useEffect(()=>{
    if(chatId){
       db.collection("chats").doc(chatId).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>(
           setText(snapshot.docs.map((doc)=>({
               id:doc.id,
               data:doc.data(),
           })))
       ))
    }

},[chatId])

    const sendMessage=(e)=>{
        e.preventDefault()
      db.collection("chats").doc(chatId).collection("messages").add({

        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        message:message,
        uid: user.uid,
photo:user.photo,
email:user.email,
displayName: user.displayName
      })
        setMessage("")
    }
    return (
        <div className="chat">
            <div className="chat__header">
    <h4>To: <span className="chat__name"> {chatName}</span></h4>
                <strong>Details</strong>
            </div>

            {/* messages */}
            <div className="chat__messages">
               
               {
                   text.map(({id,data})=>(
                    <Message key={id} content={data}/>
                   ))
               }
               
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
