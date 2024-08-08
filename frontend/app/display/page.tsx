'use client'
import { signOut } from "next-auth/react"

const display = ()=>{
    return(
        <div>
            <button onClick={()=>signOut()}>Logout</button>
        </div>
    )
}

export default display