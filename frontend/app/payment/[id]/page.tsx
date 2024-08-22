'use client'
import PaymentCard from "../component/PaymentCard"

import { useMovie } from "@/app/hooks"
import { useParams } from "next/navigation"


const Movie=()=>{
    const {id}=useParams<{ id: string }>()
    const {loading,movie}= useMovie({
        id:id||""
    })  

    return (

      
        <div>
            <PaymentCard movie={movie}/>
        </div>
    )
}

export default Movie