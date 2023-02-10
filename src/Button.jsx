import React from 'react'
import '../App.css'

const Button = ({name , type , onClick}) => {
    return (
        <button className='History' type={type} onClick = {onClick}>
            {name} 
        </button>
    )
}

export default Button

{/* <button className='History'>
<div >
History
</div>
</button> */}