import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChats from './SidebarChats';
import { selectUser,setUser,logout } from './user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import db, { auth } from './firebase'

function Sidebar() {

const user=useSelector(selectUser)
const [chats,setChats]=useState([])

useEffect(()=>{
db.collection('chats').onSnapshot(snapshot=>(setChats(snapshot.docs.map(doc=>({
    id:doc.id,
    data:doc.data()
})))))


})

const addChat = () => {
    const chatName=prompt("Enter your Name")

    if (chatName) {
        db.collection('chats').add({
            chatName:chatName,
        })
    }

}

    return (
        <div className="sidebar">

            <div className="sidebar__header">
                <Avatar onClick={()=>auth.signOut()} src={user.photo} className="sidebar__avatar" />
                <div className="sidebar__input">
                   
                    <SearchIcon />
                  
                   
                    <input type="text" placeholder="search"/>
                </div>
                    <IconButton variant="outlined" className="sidebar__inputButtin">
                    <RateReviewOutlinedIcon onClick={addChat} />
                    </IconButton>

            </div>
            <div className="sidebar__chats">
{
    chats.map(({id,data:{chatName}})=>(
        <SidebarChats key={id} id={id} chatName={chatName} />
    ))
}
            
            
            
            </div>
        </div>
    )
}

export default Sidebar
