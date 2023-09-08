import { useEffect, useState } from "react"
import Friend from "./friend"

export default function Friends(){
    const [friends, setFriend] = useState([])
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))
   },[]) 

   const friendStyle ={
    border: '4px solid green',
    margin: '20px',
    padding: '15px',
    borderRadius: '10px'
   }

    return(

        <div style={friendStyle} >
            <h2>Friends:{friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
        
    )
}