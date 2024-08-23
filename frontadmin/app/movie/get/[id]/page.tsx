'use client'

import MovieDetail from "../../component/MovieDetail"
import { useMovie } from "@/app/hooks"
import { useParams } from "next/navigation"
const Movie = () => {
    const { id } = useParams<{ id: string }>();
    const { loading, movie, error } = useMovie({ id: id || "" });
  
    if (loading) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-2xl font-bold text-center">Loading...</div>
        </div>
      );
    }
  
    if (error) {
      return (
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-4xl font-bold text-center text-red-500">{error} :  Movie Not found</div>
        </div>
      );
    }
  
    return (
      <div>
        <MovieDetail movie={movie} />
      </div>
    );
  };
  
  export default Movie;