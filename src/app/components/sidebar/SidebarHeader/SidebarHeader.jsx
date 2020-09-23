import React from 'react'

import { Avatar, IconButton } from '@material-ui/core';

import './SidebarHeader.css'

import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function SidebarHeader() {
    return (
        <div className='sidebar-header'>
            <Avatar src='https://media.glamour.com/photos/5a20a9dcab3bab6df9652a95/6:7/w_817,h_953,c_limit/Screen%20Shot%202017-11-30%20at%208.00.54%20PM.png'/>
            <div className='sidebar-headerRight'>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>
                <IconButton>
                    <ChatIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}
