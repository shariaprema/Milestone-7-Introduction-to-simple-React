import { useEffect, useState } from "react"

export default function Users(){
    // 1. Declare a sate to hold the data:
    const [user , setUser] = useState([]) //array akare pete chai ty [] deya hoyece
    

    //2. UseEffect function k call krlm----> jeta tuto parameter ney (callback function , dependency)
    //(Anonymous callback function, empty array) 
    useEffect(()=>{
    //3. Use Fetch to load data:
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))//4.setUser a data call/set kore dbo 
        


    },[]) 
    
    
    return(

        <div>
            <h2>Users:{user.length}</h2>
        </div>
    )
}

/**
 * 1. Declare a sate to hold the data.
 * 2. Use Effect with callback and dependency
 * 3. Use Fetch to load data
 * 4. set loaded data to the setUser
 */