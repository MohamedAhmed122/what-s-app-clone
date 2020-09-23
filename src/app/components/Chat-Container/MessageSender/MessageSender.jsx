import React from 'react'

import { IconButton } from '@material-ui/core';

import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';

import './MessageSender.css'

export default function MessageSender() {
    return (
        <div className='msg_sender'>
            <IconButton>
                 <EmojiEmotionsIcon />
            </IconButton>
            <form className='sender-container'>
                <div className='sender'>
                    <input type='text' placeholder='Type a Message '/>
                    <IconButton >
                        <SendIcon className='iconBtn' />
                    </IconButton>
                </div>
            </form>
            <IconButton>
                 <MicIcon />
            </IconButton>
        </div>
    )
}
