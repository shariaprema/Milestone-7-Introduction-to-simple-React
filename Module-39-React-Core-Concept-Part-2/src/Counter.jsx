import { useState } from "react"

export default function Counter(){

    const [count , setCount] = useState(0)

    // add function:
    const handleAdd = ()=>{
        const newCount = count + 1;
        setCount(newCount);
    }

    // Reduce function:
    const handleReduce = ()=>{
        const newReduceCount = count - 1;
        setCount(newReduceCount);
    }




    return(

        <div style={{border:'4px solid purple'}}>
            <h3>Counter: {count} </h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}