import { useState } from 'react';
import axios from 'axios';

export default function CreateShowtimeForm({ movieId, theatreId, onShowtimeCreated }) {
  const [showtimeData, setShowtimeData] = useState({
    startDate: '',
    endDate: '',
    ticketPrice: '',
  });

  const createShowtime = async () => {
    console.log("Sending showtime data:", showtimeData);

    try {
      const response = await axios.post(`http://localhost:5000/api/movie/${movieId}/showtimes`, {
        startDate: showtimeData.startDate,
        endDate: showtimeData.endDate,
        theatreId,
        ticketPrice: parseFloat(showtimeData.ticketPrice),
      });

      console.log("Showtime created:", response.data);
      onShowtimeCreated();  // Call the callback function to refresh data or show a success message
    } catch (error) {
      console.error("Error creating showtime:", error.response?.data || error.message);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Create Showtime for Movie</h2>
      <input
        type="datetime-local"
        placeholder="Start Date"
        value={showtimeData.startDate}
        onChange={(e) => {
          console.log("Start Date selected:", e.target.value);
          setShowtimeData({ ...showtimeData, startDate: e.target.value });
        }}
        className="border rounded-lg p-2 mb-4 w-full"
      />
      <input
        type="datetime-local"
        placeholder="End Date"
        value={showtimeData.endDate}
        onChange={(e) => {
          console.log("End Date selected:", e.target.value);
          setShowtimeData({ ...showtimeData, endDate: e.target.value });
        }}
        className="border rounded-lg p-2 mb-4 w-full"
      />
      <input
        type="number"
        placeholder="Ticket Price"
        value={showtimeData.ticketPrice}
        onChange={(e) => {
          console.log("Ticket Price entered:", e.target.value);
          setShowtimeData({ ...showtimeData, ticketPrice: e.target.value });
        }}
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
