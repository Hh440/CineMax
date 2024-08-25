'use client'

import { TicketIcon } from "lucide-react";
import { useShowtime } from "@/app/hooks";
import { Movies } from "@/app/hooks";
import { useParams } from "next/navigation";
import Link from "next/link";



const Selection = () => {
  const { id } = useParams(); 
  const movieId = Array.isArray(id) ? id[0] : id  || '';

  const { loading: showtimesLoading, showtimes } = useShowtime({ id:movieId });

  if (showtimesLoading) {
    return <p>Loading showtimes...</p>; 
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 py-12 px-4">
      <div className="container mx-auto max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-12 text-sky-900">
          Select Your Theater
        </h1>
        <div className="space-y-6">
          {showtimesLoading ? (
            <p className="text-center text-gray-500">Loading showtimes...</p>
          ) : showtimes !== null && showtimes !== undefined && showtimes.length > 0 ? (
            <div className="space-y-6">
              {showtimes.map(showtime => (
                <Link href={`/payment/${movieId}`}>
                <div
                  key={showtime.id}
                  className="w-full bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden border-sky-100 border p-6"
                >
                  <div className="bg-sky-50 py-4 mb-4">
                    <p className="font-bold text-xl text-sky-900">
                      {showtime.theatre.name}
                    </p>
                  </div>
                  <div className="mb-4">
                    <p className="text-lg">
                      Ticket Price: <span className="font-semibold text-green-600">${showtime.ticketPrice.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500">No showtimes available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Selection;
