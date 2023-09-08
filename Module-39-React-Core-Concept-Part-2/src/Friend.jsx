export default function Friend({friend}){
    const {name, id, email} = friend;

    const friendStyle ={
        border: '4px solid blue',
        margin: '20px',
        padding: '15px',
        borderRadius: '10px',
        backgroundColor: 'tomato'
       }
    
        return(
            
            <div style={friendStyle} >
                <h3>Name: {name} </h3>
                <p>Id: {id}</p>
                <p>Email: {email}</p>
            </div>
            
        )

}