import { useState } from "react"

interface Props{
    registeredUsers:string[]
    users: string[]
}

export default function UserList({ users, registeredUsers }: Props) {
    // if(users != registeredUsers){
    //     style={{"red"} + "onbekend"}
    // } 

    const [test,setTest] = useState("")
    
    
    return (<>

    <ul>
        
        {users.map((name,index)=>(<li {...users!= registeredUsers ? {`${users} bekend`} :  {`${registeredUsers} onbekend`}}  key={index} style={{users ? ,color:"green",:'red'}}>{name}</li>))}
    </ul>

    </>)
}