"use client"


import { useTheatre } from '@/app/hooks';
import { useParams } from "next/navigation"

export default function Home() {
  const {id}=useParams<{ id: string }>()
  const {loading,theatre}= useTheatre({
      id:id||""
  })  
  console.log(theatre);
  
  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <div className="flex flex-col md:flex-row">
          <img
            src={theatre.image}
            alt={theatre.name}
            className="w-full md:w-1/2 h-auto rounded-md object-cover mb-6 md:mb-0 md:mr-6"
          />
          <div className="flex flex-col justify-between">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">{theatre.name}</h1>
            <p className="text-gray-600 mb-4">{theatre.description}</p>
            <p className="text-gray-700 mb-2">
              <strong>City:</strong> {theatre.city}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Seats:</strong> {theatre.seats}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Movies Available:</strong> needs implementation
            </p>
            <p className="text-gray-700 mb-2">
              <strong>ticket Price:</strong> {theatre.ticketPrice} minutes
            </p>
            <p className="text-gray-700 mb-2">
              <strong>Start Date:</strong> {new Date(theatre.startDate).toLocaleDateString()}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>End Date:</strong> {new Date(theatre.endDate).toLocaleDateString()}
            </p>
            <a
              href={theatre.trailerUrl}
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
}

