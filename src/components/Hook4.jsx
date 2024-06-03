import { useMemo, useState } from "react"

export default function Hook4(){
   
    const [number,setNumber] = useState(0)
    const [counter, setCounter] = useState(0)

    function cubeNum(num){
        console.log('Calculation Done !');
        return Math.pow(num,3)
    }
    
    const result = useMemo(()=>{ return cubeNum(number)},[number])

    return(
        <div>
            <h1>useMemo Hook</h1>
            <input type="number" value={number} onChange={(e)=>{setNumber(e.target.value)}} />
            <h2>Cube of the number is {result}</h2>
            <button onClick={()=>{setCounter(counter + 1)}}>Counter++</button>
            <h2>Counter : {counter}</h2>
        </div>
    )
}