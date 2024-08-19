'use client'

import MovieDeatil from "../component/MovieDetail"
import { useMovie } from "@/app/hooks"
import { useParams } from "next/navigation"


const Movie=()=>{
    const {id}=useParams<{ id: string }>()
    const {loading,movie}= useMovie({
        id:id||""
    })  

    return (

      
        <div>
            <MovieDeatil movie={movie}/>
        </div>
    )
}

export default Movie