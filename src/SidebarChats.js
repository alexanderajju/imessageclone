import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import db from './firebase'
import './SidebarChats.css'
import { setChat } from './user/chatSlice'
import * as timeago from 'timeago.js'

function SidebarChats({id,chatName}) {
    const dispatch=useDispatch()
    const   [chatinfo ,setChatinfo]=useState([])


    useEffect(()=>{
db.collection("chats").doc(id).collection("messages").orderBy("timestamp","desc").onSnapshot((snapshot)=>setChatinfo(snapshot.docs.map(doc =>doc.data() )))
    },[id])
    return (
        <div onClick={()=>{
            dispatch(
                setChat({
                    chatId:id,
                    chatName:chatName
                })
            )
        }} className="sidebarChats" >
            <Avatar src={chatinfo[0]?.photo}/>
            <div className="sidebarChats__info">
    <h3>{chatName}</h3>
    <p>{chatinfo[0]?.message}</p>
    <small>{
        timeago.format(
    new Date(chatinfo[0]?.timestamp?.toDate()).toLocaleString())}</small>
            </div>
        </div>
    )
}

export default SidebarChats
