import { useEffect, useState } from "react"

export default function Hook2(){
    const [data,setData] = useState([])

    
    useEffect(()=>{

        const fetchData = async()=>{

            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setData(result);
                console.log(result)
            }
            catch(error){
                console.log(error.message)
            }
        }

      
        fetchData();
    },[])

    
    return(
        <div>
            <h1>useEffect Hook</h1>
            <ul>
                {data.slice(0,5).map(item=>(
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}