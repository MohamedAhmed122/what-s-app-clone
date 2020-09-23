import React from 'react'

import { SearchOutlined } from '@material-ui/icons'

import './SidebarSearch.css'

export default function SidebarSearch() {
    return (
        <div className='search'>
            <div className='search-container'>
                <SearchOutlined />
                <input placeholder='Search Or Start new Chat' type='text' />
            </div>
        </div>
    )
}
