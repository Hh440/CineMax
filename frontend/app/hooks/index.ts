import axios from "axios";
import { useEffect, useState } from "react";

export interface Theater{
    "name":string,
    "seats":number,
    "ticketPrice":number,
    "image":string,
    "Address":string,
    id:string
}

export const useTheaters=()=>{
    const [loading,setLoading]=useState(true)
    const [theaters,setTheaters]= useState<Theater[]>([]);

    useEffect(()=>{
        axios.get('http://localhost:5000/api/theater/theaters')
        .then(response=>{
            setTheaters(response.data.theater)

        })
    },[])

    return{
        theaters,
        loading
    }
}