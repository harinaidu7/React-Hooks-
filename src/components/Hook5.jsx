import { useCallback, useEffect, useState } from "react"

export default function Hook5(){
    const [number,setNumber] = useState(1)
    const [dark,setDark] = useState(false)
    const [items, setItems] = useState([])

    const getItem=useCallback(()=>{
        return[number,number+1,number+2]
    },[number])
    useEffect(()=>{
        setItems(getItem())
        console.log('Updating Items')
    },[getItem])

    const theme ={
        backgroundColor: dark ? '#333' : '#fff',
        color: dark ? '#fff' : '#333'
    }

    return(
        <div style={theme}>
            <h1>useCallback Hook</h1>
            <input type="number" value={number} onChange={e=> setNumber(parseInt(e.target.value))} />
            <button onClick={()=> setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <div>{items.map(item => <div key={item}>{item}</div>)}</div> 
        </div>
    )
}