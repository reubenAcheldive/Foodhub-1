import React from 'react'
import Header from './Header'

const Input = ({ margin, title, width, helpTitle, placeholder, type }) => {
    return (

        <form className={margin} style={{ width: width }} >
            <label className='form-label'>{title}</label>
            <input type={type} placeholder={placeholder} className='form-control'></input>
            <div id="emailHelp" className="form-text">{helpTitle}</div>


        </form>

    )
}


Header.defaultProps = {
    helpTitle: ' '
}

export default Input
