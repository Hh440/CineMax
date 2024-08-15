import axios from "axios";
import { useEffect, useState } from "react";

export interface Theater{
    "name":string,
    "seats":number,
    "ticketPrice":number,
    "image":string,
    "Address":string,
    "id":string
}

export const useTheaters=()=>{
    const [loading,setLoading]=useState(true)
    const [theaters,setTheaters]= useState<Theater[]>([]);

    useEffect(()=>{
        axios
        .get('http://localhost:5000/api/theatre/theaters')
        .then(response => {
          setTheaters(response.data.theaters);
          console.log(theaters)
          setLoading(false); 
        })
        .catch(error => {
          console.error('Error fetching theaters:', error);
          setLoading(false); 
        });
    }, []);
    return{
        theaters,
        loading
    }
}