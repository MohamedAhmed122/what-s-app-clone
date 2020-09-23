import React from 'react'

import { Avatar, IconButton } from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './ChatHeader.css'

export default function ChatHeader() {
    return (
        <div className='chat-header'>
            <div className='header-right'>
            <Avatar/>
            <div  className='header-middle'>
                <h3>Mohamed Youssef</h3>
                <p>Last seen at 12:00</p>
            </div>

            </div>
            <div>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>
        </div>
    )
}
