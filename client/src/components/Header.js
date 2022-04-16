import React from 'react'

const Header = ({ title, color, size, margin }) => {
    const headerClass = `${color} ${size} ${margin}`
    return (
        <div>
            <h1 className={headerClass}>{title}</h1>
        </div >
    )
}

export default Header
