import React from 'react'

import SidebarHeader from './SidebarHeader/SidebarHeader'
import SidebarSearch from './SidebarSearch/SidebarSearch'
import SidebarUser from './SidebarUser/SidebarUser'

import './SidebarStyles.css'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div style={{backgroundColor: '#ededed'}}>
                <SidebarHeader />
                <SidebarSearch />
            </div>
            <SidebarUser />
            <SidebarUser />
        </div>
    )
}
