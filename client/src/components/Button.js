import React from 'react'

const Button = ({ buttonTitle, buttonType, width, margin }) => {
    const classes = `btn ${buttonType} ${margin}`
    return (
        <button className={classes} style={{ width: width }} > {buttonTitle}</button >
    )
}

export default Button


Button.defaultProps = {
    margin: '0px'
}