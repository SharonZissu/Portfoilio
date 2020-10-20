import React from 'react'

const Sidebar = ({children}) => {
    return (
        <nav className='sidebar'>
            {children}
        </nav>
    )
}

export default Sidebar;
