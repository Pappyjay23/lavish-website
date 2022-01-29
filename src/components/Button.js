import React from 'react'
import "./Button.css"

function Button({buttonColor, buttonSize, buttonStyle, onclick, children}) {
    const STYLE =["btn-primary", "btn-outline"]
    const SIZE =["btn-medium", "btn-large", "btn-wide", "btn-mobile"]
    const COLOR =["primary", "blue", "red", "green"]

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle : STYLE[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0]
    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`} onClick={onclick}>{children}</button>
    )
}

export default Button
