"use client";

import { useMovie } from "@/app/hooks";
import { useParams } from "next/navigation"

const MovieDetails = () => {
    const {id}=useParams<{ id: string }>()
    const {loading,movie}= useMovie({
        id:id||""
    })  
    console.log(movie);

  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full md:w-1/2 h-auto rounded-md object-cover mb-6 md:mb-0 md:mr-6"
          />
          <div className="flex flex-col justify-between">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{movie.title}</h1>
            <p className="text-gray-600 mb-4">{movie.description}</p>
            <p className="text-gray-700 mb-2">
              <strong>Director:</strong> {movie.director}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Language:</strong> {movie.language}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Genre:</strong> {movie.genre}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Duration:</strong> {movie.duration} minutes
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Start Date:</strong> {new Date(movie.startDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>End Date:</strong> {new Date(movie.endDate).toLocaleDateString()}
            </p>
            <a
              href={movie.trailerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 font-medium mt-4 inline-block"
            >
              Watch Trailer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
