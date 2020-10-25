import { Avatar } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import './SidebarChats.css'
import { setChat } from './user/chatSlice'

function SidebarChats({id,chatName}) {
    const dispatch=useDispatch()
    return (
        <div onClick={()=>{
            dispatch(
                setChat({
                    chatId:id,
                    chatName:chatName
                })
            )
        }} className="sidebarChats" >
            <Avatar/>
            <div className="sidebarChats__info">
    <h3>{chatName}</h3>
                <p>Last Message ....</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChats
