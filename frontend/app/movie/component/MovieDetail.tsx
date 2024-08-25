'use client'

import { Movies } from "@/app/hooks";
import { useShowtime } from "@/app/hooks";
import { useParams, useRouter } from "next/navigation";
import { BuildingIcon } from 'lucide-react';

interface MovieDetailProps {
  movie: Movies | undefined;
}

const extractVideoId = (url: string | null) => {
  if (!url) return null;

  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n]+)|youtu\.be\/([^&\n]+)/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : null;
};

const MovieDetail = ({ movie }: MovieDetailProps) => {
  const { loading: showtimesLoading, showtimes } = useShowtime({ id: movie?.id || '' });
  const router = useRouter();
  const { id } = useParams();

  const handleTheatre = () => {
    router.push(`/selection/${id}`);
  };

  if (!movie) return <div className="max-w-4xl mx-auto p-6 sm:p-8">Loading...</div>;

  return (
    <div className="min-h-screen bg-blue-50 pb-10 relative overflow-hidden flex flex-col">
      {/* Theater curtain effect */}
      <div className="bg-teal-700 h-16"></div>
      <div className="bg-teal-600 h-8 transform -skew-y-3"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold text-teal-700 mb-4">{movie.title}</h1>
            <div className="aspect-video mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${extractVideoId(movie.trailerUrl)}`}
                title={`${movie.title} trailer`}
                className="w-full h-full rounded-lg"
              ></iframe>
            </div>
            <p className="text-gray-600 mb-4">{movie.description}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">{movie.language}</span>
              {movie.genre.map((g, index) => (
                <span key={index} className="px-2 py-1 border border-gray-300 text-gray-800 rounded">{g}</span>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <span>Director: {movie.director}</span>
              </div>
              <div className="flex items-center">
                <span>Duration: {movie.duration} mins</span>
              </div>
              <div className="flex items-center">
                <span>Start Date: {movie.startDate instanceof Date ? movie.startDate.toISOString().slice(0, 10) : "N/A"}</span>
              </div>
              <div className="flex items-center">
                <span>End Date: {movie.endDate instanceof Date ? movie.endDate.toISOString().slice(0, 10) : "N/A"}</span>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-white shadow rounded-lg p-6">
              <img
                src={movie.image}
                alt={movie.title}
                className="w-full h-auto rounded-lg mb-4"
              />
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg"
                onClick={handleTheatre}
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Available in Theaters</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
            {showtimesLoading ? (
              <p className="text-center text-gray-500">Loading showtimes...</p>
            ) : showtimes !== null && showtimes !== undefined && showtimes.length > 0 ? (
              <div className="grid gap-8">
                {showtimes.map(showtime => (
                  <div key={showtime.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between w-full hover:shadow-xl transition-shadow duration-200 ">
                    <div className="mb-4">
                      <p className="font-bold text-xl text-gray-800">{showtime.theatre.name}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-lg">Ticket Price: <span className="font-semibold text-green-600">${showtime.ticketPrice}</span></p>
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>Start Date: <span className="font-medium text-gray-700">{new Date(showtime.startDate).toLocaleString()}</span></p>
                      <p>End Date: <span className="font-medium text-gray-700">{new Date(showtime.endDate).toLocaleString()}</span></p>
                    </div>
                    <button className="mt-4 bg-blue-500 text-white py-2 rounded-lg"
                      onClick={() => { router.push(`/payment/${id}`) }}
                    >
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500">No showtimes available.</p>
            )}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 left-4 text-teal-200 transform -rotate-12 opacity-50">
        <BuildingIcon className="w-24 h-24" />
      </div>
      <div className="absolute bottom-4 right-4 text-teal-300 transform rotate-12 opacity-50">
        <BuildingIcon className="w-32 h-32" />
      </div>
    </div>
  );
}

export default MovieDetail;
