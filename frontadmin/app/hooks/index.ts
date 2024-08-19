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

export const useMovie = ({id} : {id: string}) => {
    const [loading,setLoading]= useState(true)
    const [movie,setMovie]= useState(undefined)

    useEffect(() => {
        if (id) {
            try {
              axios.get(`http://localhost:5000/api/movie/${id}`)
              .then(response => {
                setMovie(response.data.movie);
              setLoading(false);
              }) 
            } catch (error) {
              console.error("Error fetching movie details:", error);
              setLoading(false);
            }
          };

      }, [id]);

    return {
        loading,
        movie
    }
}
