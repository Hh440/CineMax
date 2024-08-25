import axios from "axios";
import { DateTime } from "next-auth/providers/kakao";
import {  useEffect, useState } from "react";
import Theater from "../theater/[id]/page";
import { BACKEND_URL } from "@/config";

export interface Theater{
    "name":string,
    "seats":number,
    "ticketPrice":number,
    "image":string,
    "Address":string,
    "id":string,
    "movies":Movies[]
}

export interface Reservation{
  "movieName":string,
  "Time":Date,
  "orderId":string,
  "ticketPrice":number
}

export interface Movies{
  "id":string,
  "title":string,
  "image":string,
  "language":string,
  "genre":string[],
  "director":string,
  "trailer":string,
  "trailerUrl":string
  "description":string,
  "duration":number,
  "startDate":Date,
  "endDate":Date
  "theatres":Theater[]
}


export interface Showtime {
  "id": string;
  "ticketPrice": number;
  "startDate": Date;
  "endDate": Date;
  "startTime":DateTime
  "endTIme":DateTime
  "theatre": Theater;
  "movie": Movies;
}


export const useTheater = ({id}:{id:string})=>{
  const [loading,setLoading]= useState(true)
  const [theatre,setTheater]= useState<Theater|undefined>(undefined)

  useEffect(()=>{

    axios.get(`${BACKEND_URL}/api/theatre/${id}`)
    .then(response=>{
      const fetchedTheatre = response.data.theatre
      setTheater(fetchedTheatre)
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





export const useTheaters=()=>{
    const [loading,setLoading]=useState(true)
    const [theaters,setTheaters]= useState<Theater[]>([]);

    useEffect(()=>{
        axios
        .get(`${BACKEND_URL}/api/theatre/theatres`)
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
    axios.get(`${BACKEND_URL}/api/movie/${id}`)
    .then(response=>{
      const fetchedMovie = response.data.movie;
      setMovie({
        ...fetchedMovie,
          startDate: fetchedMovie.startDate ? new Date(fetchedMovie.startDate) : undefined,
          endDate: fetchedMovie.endDate ? new Date(fetchedMovie.endDate) : undefined,
          showtime: fetchedMovie.showtime ? new Date(fetchedMovie.showtime) : undefined,
    })
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
    axios.get(`${BACKEND_URL}/api/movie/movies`)
    .then(response=>{
      setMovies(response.data.movies)
      setLoading(false)
    })
    .catch(error => {
      console.error('Error fetching Movies:', error);
      setLoading(false); 
    });
  },[])

  return{
    movies,
    loading
  }
}



export const useShowtime = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [showtimes, setShowtimes] = useState<Showtime[]>([]);

  useEffect(() => {
      axios.get(`${BACKEND_URL}/api/showtimes/${id}` )
          .then(response => {
            
              setShowtimes(response.data.showtimes);
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching showtimes:', error);
              setLoading(false);
          });
  }, [id]);

  return {
      showtimes,
      loading
  };
};


export const useShowTheatertime = ({ theaterId }: { theaterId: string }) => {
  const [loading, setLoading] = useState(true);
  const [showtimes, setShowtimes] = useState<Showtime[]>([]);
  console.log(theaterId)
  useEffect(() => {
      axios.get(`${BACKEND_URL}/api/showtimes/${theaterId}` )
          .then(response => {
            const fetchedShowtime = response.data.showtimes;
              setShowtimes(response.data.showtimes);
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching showtimes:', error);
              setLoading(false);
          });
  }, [theaterId]);

  return {
      showtimes,
      loading
  };
};


export const useReservation = () => {
  const [loading, setLoading] = useState(true);
  const [reservation, setReservation] = useState<Reservation[]>([]);

  useEffect(() => {
    axios.get(`${BACKEND_URL}/api/reservation/get-reservations`)
      .then(response => {
        
        console.log(response.data.reservations);
        setReservation(response.data.reservations || []); // Fallback to an empty array if data is undefined or null
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching reservations:", error);
        setLoading(false); // Ensure loading is set to false even if there is an error
      });
  }, []);

  return {
    reservation,
    loading,
  };
};
