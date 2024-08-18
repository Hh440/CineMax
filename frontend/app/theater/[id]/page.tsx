'use client'

import { useParams } from "next/navigation"
import TheaterDetail from "../component/TheaterDetail"
import { useTheater } from "@/app/hooks"

const Theater = ()=>{

    const {id} = useParams<{id:string}>()
    const {loading,theater}=useTheater({
        id:id||""
    }); 
    return (
        <div>
            <TheaterDetail theater={theater}/>
            
        </div>
    )
}

export default Theater