import axios from "axios";
import { DateTime } from "next-auth/providers/kakao";
import { lazy, use, useEffect, useState } from "react";

export interface Theater{
    "name":string,
    "seats":number,
    "ticketPrice":number,
    "image":string,
    "Address":string,
    "id":string,
    "movies":Movies[]
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

    axios.get(`http://localhost:5000/api/theatre/${id}`)
    .then(response=>{
      setTheater(response.data.theatre)
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
        .get('http://localhost:5000/api/theatre/theatres')
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
    axios.get('http://localhost:5000/api/movie/movies')
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
      axios.get(`http://localhost:5000/api/showtimes/${id}` )
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
      axios.get(`http://localhost:5000/api/showtimes/${theaterId}` )
          .then(response => {
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