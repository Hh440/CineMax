// components/CreateShowtimeForm.tsx

import { useState } from 'react';

export default function CreateShowtimeForm({ movieId, theatreId, onShowtimeCreated }) {
  const [showtimeData, setShowtimeData] = useState({
    startDate: '',
    endDate: '',
    ticketPrice: '',
  });

  const createShowtime = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/movie/${movieId}/showtimes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          startDate: showtimeData.startDate,
          endDate: showtimeData.endDate,
          theatreId,
          ticketPrice: parseFloat(showtimeData.ticketPrice),
        }),
      });

      const data = await res.json();
      console.log("Showtime created:", data);
      onShowtimeCreated();  // Call the callback function to refresh data or show a success message
    } catch (error) {
      console.error("Error creating showtime:", error);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Create Showtime for Movie</h2>
      <input
        type="datetime-local"
        placeholder="Start Date"
        value={showtimeData.startDate}
        onChange={(e) => setShowtimeData({ ...showtimeData, startDate: e.target.value })}
        className="border rounded-lg p-2 mb-4 w-full"
      />
      <input
        type="datetime-local"
        placeholder="End Date"
        value={showtimeData.endDate}
        onChange={(e) => setShowtimeData({ ...showtimeData, endDate: e.target.value })}
        className="border rounded-lg p-2 mb-4 w-full"
      />
      <input
        type="number"
        placeholder="Ticket Price"
        value={showtimeData.ticketPrice}
        onChange={(e) => setShowtimeData({ ...showtimeData, ticketPrice: e.target.value })}
        className="border rounded-lg p-2 mb-4 w-full"
      />
      <button
        onClick={createShowtime}
        className="bg-green-500 text-white py-2 px-4 rounded-lg"
      >
        Create Showtime
      </button>
    </div>
  );
}
