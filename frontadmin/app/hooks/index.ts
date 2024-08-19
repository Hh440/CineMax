import axios from "axios";
import { lazy, use, useEffect, useState } from "react";


export const useTheatre = ({id} : {id : string}) => {
    const [loading,setLoading]= useState(true)
    const [theatre,setTheatre]= useState(undefined)

    useEffect(()=>{

        axios.get(`http://localhost:5000/api/theatre/${id}`)
        .then(response=>{
        setTheatre(response.data.theatre)
        console.log(response.data.theatre)
        setLoading(false)
        })
        .catch(e=>{
        console.error("Error while fetching",e)
        })

    },[id])


    return{
        loading,
        theatre
    }
}