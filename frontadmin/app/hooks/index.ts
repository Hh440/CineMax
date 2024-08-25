import axios from "axios";
import { lazy, use, useEffect, useState } from "react";
import { DateTime } from "next-auth/providers/kakao";
import { BACKEND_URL } from "@/config";


export interface Theater{
  "name":string,
  "seats":number,
  "ticketPrice":number,
  "city":string,
  "image":string,
  "Address":string,
  "id":string,
  "description":string,
  "startDate":string,
  "endDate":string,
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



export const useTheatre = ({id} : {id : string}) => {
    const [loading,setLoading]= useState(true)
    const [theatre,setTheatre]= useState(undefined)

    useEffect(()=>{

        axios.get(`${BACKEND_URL}/api/theatre/${id}`)
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

export const useMovie = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movies | undefined>(undefined);
  const [error, setError] = useState<string | null>(null); // New error state

  useEffect(() => {
    if (id) {
      const fetchMovie = async () => {
        try {
          const response = await axios.get(`${BACKEND_URL}/api/movie/${id}`);
          if (response.data.movie) {
            setMovie(response.data.movie);
            setError(null); // Reset any previous errors
          } else {
            setError('Movie not found'); // Handle 404-like case
          }
        } catch (error) {
          console.error("Error fetching movie details:", error);
          setError('An error occurred while fetching the movie details');
        } finally {
          setLoading(false);
        }
      };

      fetchMovie();
    } else {
      setLoading(false);
    }
  }, [id]);

  return {
    loading,
    movie,
    error, // Return the error state
  };
};


export const useAllMovie = () => {
  const [loading,setLoading]= useState(true)
  const [movies, setMovies] = useState<Movies[]>([]);

  useEffect(() => {
          try {
            axios.get(`${BACKEND_URL}/api/movie/movies`)
            .then(response => {
              setMovies(response.data.movies || []);
              console.log(response.data.movies);
              setLoading(false);
            }) 
          } catch (error) {
            console.error("Error fetching movies: ", error);
            setLoading(false);
          }

    }, []);

  return {
      loading,
      movies
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
}


export const useAllTheatres = () => {
  const [loading, setLoading] = useState(true);
  const [theatres, setTheatres] = useState<Theater[]>([]);

  useEffect(() => {
      axios.get(`${BACKEND_URL}/api/theatre/theatres` )
          .then(response => {
              setTheatres(response.data.theaters);
              setLoading(false);
          })
          .catch(error => {
              console.error('Error fetching showtimes:', error);
              setLoading(false);
          });
  }, []);
  console.log(theatres);
  return {
      theatres,
      loading
  };
}