import { useState } from "react"

export default function Team (){

    const [player, setCount] = useState(0) ;


    const teamStyle = {
        border:'4px solid yellow',
         margin:'40px',
         padding:'40px',
         borderRadius : '20px'
    }


    
    const playersAdd = ()=>{
      const countNew = player + 1;
      setCount(countNew)
      
    }

    const playersRemove = ()=>{
        // const countNew = player - 1;
        setCount(player - 1)
        
      }

    return(
        <div style={teamStyle}>
            <h2>Players: {player}</h2>
            <button onClick={playersAdd}>Add Players</button>
            <button onClick={playersRemove}>Remove Players</button>
        </div>
    )
}