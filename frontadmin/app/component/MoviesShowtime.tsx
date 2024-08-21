import React from 'react';

export default function MoviesShowtimes({ movies }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Movies & Showtimes</h2>
      {movies.length === 0 ? (
        <p className="text-gray-600">No movies available.</p>
      ) : (
        movies.map(movie => (
          <div key={movie.id} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800">{movie.title}</h3>
            {!movie.showtimes || movie.showtimes.length === 0 ? (
              <p className="text-gray-600">No showtimes available.</p>
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
        ))
      )}
    </div>
  );
}
