import React from 'react'
import ChatBody from './ChatBody/ChatBody';
import ChatHeader from './ChatHeader/ChatHeader';

import './ChatStyles.css';
import MessageSender from './MessageSender/MessageSender';

export const Chat = () => {
    return (
        <div className='chat'>
            <ChatHeader />
            <ChatBody />
            <MessageSender />
        </div>
    )
}
