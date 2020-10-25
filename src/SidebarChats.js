import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChats.css'
function SidebarChats() {
    return (
        <div className="sidebarChats" >
            <Avatar/>
            <div className="sidebarChats__info">
                <h3>Channel Name</h3>
                <p>Last Message ....</p>
                <small>timestamp</small>
            </div>
        </div>
    )
}

export default SidebarChats
