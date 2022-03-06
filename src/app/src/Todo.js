import React, { useState } from 'react'
const Todo = ({name}) =>{           //import name using react prop in line 41 of App.js
    return(
        <>
            <div>
                <li>{name}</li>
            </div>
        </>
    )
}

export default Todo