'use client'

import { Theater } from "@/app/hooks";

interface TheaterDetailProps {
  theater: Theater |undefined;
}

const TheaterDetail = ({ theater }: TheaterDetailProps) => {

  if (!theater) {
    return <div className="max-w-4xl mx-auto p-6 sm:p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="p-4">
          <h1 className="text-3xl font-bold">{theater.name}</h1>
        </div>
        <div className="p-4">
          <img
            src={theater.image || "/placeholder.svg?height=400&width=800"}
            alt={theater.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">{theater.Address}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Now Showing</h2>

      {theater.movies && theater.movies.length > 0 ? (
        theater.movies.map(movie => (
          <div key={movie.id} className="bg-white shadow rounded-lg mb-8">
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{movie.title}</h3>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">
                {movie.showtime} {/* Replace this with actual hall info if available */}
              </span>
            </div>
            <div className="p-4 flex flex-col md:flex-row gap-6">
              <img
                src={movie.image || "/placeholder.svg?height=300&width=200"}
                alt={movie.title}
                className="w-full md:w-48 h-72 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-gray-600 mb-4">{movie.description}</p>
                <div className="mb-4">
                  <strong>Showtime:</strong> {new Date(movie.showtime).toLocaleTimeString()}
                </div>
                <div className="mb-4">
                  <strong>Ticket Price:</strong> ${theater.ticketPrice.toFixed(2)}
                </div>
                <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
                <div className="grid grid-cols-8 gap-2 mb-4">
                  {/* Replace these with actual seat data */}
                  {Array(theater.seats).fill(0).map((_, idx) => (
                    <div
                      key={idx}
                      className="w-6 h-6 bg-blue-500 rounded-sm"
                      title="Available"
                    ></div>
                  ))}
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                  Book Tickets
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No movies currently showing.</p>
      )}
    </div>
  );
};

export default TheaterDetail;
