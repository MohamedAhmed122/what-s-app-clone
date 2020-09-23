import React from 'react'

import { Avatar } from '@material-ui/core'

import './SidebarUser.css'

export default function SidebarUser() {
    return (
        <div className='user'>
            <Avatar />
            <div className='user-container'>
                <h3>Mohamed Youssef</h3>
                <p>Yoo, where are you?</p>
            </div>
            
        </div>
    )
}
