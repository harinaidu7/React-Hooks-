import { useEffect, useRef, useState } from "react"

export default function Hook3(){
    
    const [name,setName] = useState('')
    const renderCount = useRef(0)

    useEffect(()=>{
        renderCount.current = renderCount.current + 1 
    })

    return(
        <div>
            <h1>useRef Hook</h1>
            <input value={name} onChange={(e)=>{setName(e.target.value)}} />
            <div>My name is {name}</div>
            <div>component rendered : {renderCount.current}</div>
        </div>
    )
}