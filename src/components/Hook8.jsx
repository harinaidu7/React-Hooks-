import { useEffect, useState } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

export default function Hook8 (){
   const [name,setName] = useLocalStorage('username','')
    
    return(
        <div>
            <h1> Custom Hooks</h1>
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name}
                onChange={(e)=>setName(e.target.value)}        
            />
            <h2>Hello,{name}</h2>
        </div>
    )
}