import React from 'react';
import Link from 'next/link';

type Showtime = {
  id: string;
  startDate: string;
};

type Movie = {
  id: string;
  title: string;
  showtimes?: Showtime[]; // Optional since it can be empty
};

type MoviesShowtimesProps = {
  movies: Movie[];
};

export default function MoviesShowtimes({ movies } : MoviesShowtimesProps) {
  return (
    
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto">
      <h2 className=" text-green-600 text-2xl font-bold mb-4 text-gray-800">Available Movies/Showtimes</h2>
      {movies.length === 0 ? (
        <p className="text-gray-600">No movies available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map(movie => (
            <Link key={movie.id} href={`/movie/get/${movie.id}`} className="block bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
                {!movie.showtimes || movie.showtimes.length === 0 ? (
                  <p className="text-gray-600 text-slate-700">Click To see Showtimes.</p>
                ) : (
                  <ul className="mt-2">
                    {movie.showtimes.map(showtime => (
                      <li key={showtime.id} className="text-gray-600">
                        {new Date(showtime.startDate).toLocaleDateString()} - {new Date(showtime.startDate).toLocaleTimeString()}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
