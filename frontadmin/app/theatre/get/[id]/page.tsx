"use client";

import { useState } from 'react';
import { useTheatre } from '@/app/hooks';
import { useParams } from "next/navigation";
import MoviesShowtimes from '@/app/component/MoviesShowtime'; 
import CreateShowtimeForm from '@/app/component/CreateShowtimeForm';

export default function Home() {
  const { id } = useParams<{ id: string }>();
  const { loading, theatre } = useTheatre({ id: id || "" });
  const [movieId, setMovieId] = useState('');

  const addMovie = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/theatre/${id}/add-movie`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId }),
      });

      const data = await res.json();
      console.log("Movie added:", data);
      // Optionally, refresh theatre details after adding a movie
    } catch (error) {
      console.error("Error adding movie:", error);
    }
  };

  const handleShowtimeCreated = () => {
    alert("Showtime added. Refresh to fetch the latest details");
  };  

  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-4xl transform transition duration-500 hover:scale-105">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={theatre.image === '' ? "https://t3.ftcdn.net/jpg/03/74/28/58/240_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg" : theatre.image}
            alt={theatre.name}
            className="w-full md:w-1/2 h-auto rounded-lg object-cover mb-6 md:mb-0 md:mr-6 shadow-lg"
          />
          <div className="flex flex-col justify-between text-gray-800">
            <h1 className="text-4xl font-extrabold mb-4">{theatre.name}</h1>
            <p className="text-lg mb-4">{theatre.description}</p>
            <p className="mb-2">
              <strong>City:</strong> {theatre.city}
            </p>
            <p className="mb-2">
              <strong>Seats:</strong> {theatre.seats}
            </p>
            <p className="mb-2">
              <strong>Ticket Price:</strong> ${theatre.ticketPrice}
            </p>
            <p className="mb-2">
              <strong>Start Date:</strong> {new Date(theatre.startDate).toLocaleDateString()}
            </p>
            <p className="mb-2">
              <strong>End Date:</strong> {new Date(theatre.endDate).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* MoviesShowtimes Component */}
        <MoviesShowtimes movies={theatre.movies} />

        {/* Form to Add Movie */}
        <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Movie to Theatre</h2>
          <input
            type="text"
            placeholder="Enter Movie ID"
            value={movieId}
            onChange={(e) => setMovieId(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={addMovie}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300 w-full"
          >
            Add Movie
          </button>
        </div>

        <CreateShowtimeForm
          movieId={movieId}
          theatreId={id}
          onShowtimeCreated={handleShowtimeCreated}
        />
      </div>
    </div>
  );
}
