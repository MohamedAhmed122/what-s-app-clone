import React from 'react'

import './ChatBody.css'

export default function ChatBody() {
    return (
        <div className='chat_body'>
            <p className='chat_message'>
                <span className='sender-name'>Mohamed Yousef </span>
                this is message
                <span className='time-stamp'>{new Date().toUTCString()} </span>
            </p>
            <p className='chat_receiver chat_message'>
                <span className='sender-name'>Mohamed Yousef </span>
                this is message
                <span className='time-stamp'>{new Date().toUTCString()} </span>
            </p>
            
        </div>
    )
}
