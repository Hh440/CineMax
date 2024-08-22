'use client'

import { Theater } from "@/app/hooks";
import { useShowTheatertime } from "@/app/hooks";
import Link from "next/link";

interface TheaterDetailProps {
  theatre: Theater |undefined;
}

const TheaterDetail = ({ theatre }: TheaterDetailProps) => {

  const { loading, showtimes } = useShowTheatertime({
    theaterId: theatre?.id || ""
  });

  if (!theatre) {
    return <div className="max-w-4xl mx-auto p-6 sm:p-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="p-4">
          <h1 className="text-3xl font-bold">{theatre.name}</h1>
        </div>
        <div className="p-4">
          <img
            src={theatre.image || "/placeholder.svg?height=400&width=800"}
            alt={theatre.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-600">{theatre.Address}</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Now Showing</h2>

      {showtimes && showtimes.length > 0 ? (
        showtimes.map(showtime => (
          
          <Link href={`/movie/${showtime.movie.id}`}>
          <div key={showtime.id} className="bg-white shadow rounded-lg mb-8">
            <div className="p-4 flex items-center justify-between">
              <h3 className="text-xl font-bold">{showtime.movie.title}</h3>
              <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">
                {new Date(showtime.startTime).toLocaleTimeString()}
              </span>
            </div>
            <div className="p-4 flex flex-col md:flex-row gap-6">
              <img
                src={showtime.movie.image || "/placeholder.svg?height=300&width=200"}
                alt={showtime.movie.title}
                className="w-full md:w-48 h-72 object-cover rounded-lg"
              />
              <div className="flex-1">
                <p className="text-gray-600 mb-4">{showtime.movie.description}</p>
                <div className="mb-4">
                  <strong>Showtime:</strong> {new Date(showtime.startTime).toLocaleTimeString()}
                </div>
                <div className="mb-4">
                  <strong>Ticket Price:</strong> ${showtime.ticketPrice.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
          </Link>
        ))
      ) : (
        <p>No movies currently showing.</p>
      )}
    </div>
  );
};

export default TheaterDetail;
