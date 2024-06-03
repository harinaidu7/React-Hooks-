import { useEffect, useState } from "react"

export default function useLocalStorage(key,initialvalue){
    const [name,setName] = useState(
        localStorage.getItem(key)?
        localStorage.getItem(key):initialvalue
    )

    useEffect(()=>{
        localStorage.setItem(key,name)
    },[name,key])

   
    return[name,setName]
}