import React from 'react'

import {Sidebar} from '../components/sidebar/Sidebar';
import {Chat} from '../components/Chat-Container/Chat'

import './MainPage.css'

export const MainPage = () => {
    return (
        <div className='app-body'>
            <Sidebar />
            <Chat />
        </div>
    )
}
