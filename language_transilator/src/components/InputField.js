import React, { useState } from 'react'

export default function InputField() {
    const [value,ChangeValue] = useState('')

    return (
        <div className="row">
            <div>
                Searchbar
            </div>
            <div>
            <form >
                <label> Seach field  </label>
            <input type="text" value={value} onChange={e=>{ChangeValue(e.target.value)}} />  
            </form>  
            </div>
        </div>
    )
}
