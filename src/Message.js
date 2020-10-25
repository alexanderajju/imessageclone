import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import './Message.css'
import { selectUser } from './user/userSlice'

function Message({id,content:{
    timestamp,displayName,email,message,photo,uid

}}) {

    const user=useSelector(selectUser)
    return (
        <div className={`message ${user.email===email && "message__sender"}`}>
            <Avatar   className="message__photo"src={photo}/>
    <p>{message}</p>
    <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message
