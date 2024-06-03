import { useState } from "react"

export default function Hook1(){
    const [counter,setCounter] = useState(0)
   
    return(
        <div>
            <h1>useState Hook example</h1>
            <h2>Counter : {counter}</h2>
            <button onClick={()=>{setCounter(rev => rev +1)}}>+1</button>
        </div>
    )
}