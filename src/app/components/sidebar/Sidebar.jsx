import React from 'react'

import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarSearch from './SidebarSearch/SidebarSearch'

import './SidebarStyles.css'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SidebarHeader />
            <SidebarSearch />
        </div>
    )
}
