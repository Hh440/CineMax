import axios from "axios";
import { DateTime } from "next-auth/providers/kakao";
import { lazy, use, useEffect, useState } from "react";

export interface Theater{
    "name":string,
    "seats":number,
    "ticketPrice":number,
    "image":string,
    "Address":string,
    "id":string
}

export interface Movies{
  "id":string,
  "title":string,
  "image":string,
  "language":string,
  "genere":string,
  "director":string,
  "description":string,
  "duration":number,
  "startDate":DateTime
  "showtime":DateTime
}


export const useTheater = ({id}:{id:string})=>{
  const [loading,setLoading]= useState(true)
  const [theater,setTheater]= useState<Theater|undefined>(undefined)

  useEffect(()=>{

    axios.get(`http://localhost:5000/api/theater/${id}`)
    .then(response=>{
      setTheater(response.data.theater)
      setLoading(false)
    })
    .catch(e=>{
      console.error("Error while fetching",e)
    })

  },[id])


  return{
    loading,
    theater
  }

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

export const useMovie = ({id}:{id:string})=>{

  const [loading,setLoading]= useState(true)
  const [movie,setMovie] = useState<Movies| undefined>(undefined)

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/movie/${id}`)
    .then(response=>{
      setMovie(response.data.movie)
      setLoading(false)
    })
    .catch(e=>{
      console.error("Error while fetching",e)
    })
  },[id])

  return{
    movie,
    loading
  }
}













export const useMovies = ()=>{
  const [loading,setLoading] = useState(true);
  const [movies,setMovies] = useState<Movies[]>([])

  useEffect(()=>{
    axios.get('http://localhost:5000/appi/movie/movies')
    .then(response=>{
      setMovies(response.data.moveis)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error fetching theaters:', error);
      setLoading(false); 
    });
  },[])

  return{
    movies,
    loading
  }
}