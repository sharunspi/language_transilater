import React, { useState } from 'react'

export default function InputField() {
    const [value,ChangeValue] = useState('')

    return (
        <div>
            <form >
            <input type="text" value={value} onChange={e=>{ChangeValue(e.target.value)}}/>  
            </form>          
        </div>
    )
}
