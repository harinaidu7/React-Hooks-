import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export default function Hook6(){
    
    const phone = useContext(AppContext)
    return (
        <div>
            <h1>useContext Hook</h1>
            <h2>Phone:{phone} </h2>
        </div>
    )
}