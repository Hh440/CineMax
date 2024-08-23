import { useState } from 'react';
import axios from 'axios';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import dayjs, { Dayjs } from 'dayjs';

export default function CreateShowtimeForm({ movieId, theatreId, onShowtimeCreated }) {
  const [showtimeData, setShowtimeData] = useState({
    startDate: '',
    endDate: '',
    ticketPrice: '',
  });

  const [startTime, setStartValue] = useState<Dayjs | null>(dayjs()); // Use Dayjs type
  const [endTime, setEndValue] = useState<Dayjs | null>(dayjs()); // Use Dayjs type

  const createShowtime = async () => {
    const startDate = startTime ? startTime.toISOString() : ""; // Convert to ISO string
    const endDate = endTime ? endTime.toISOString() : ""; // Assuming endDate is the same as startDate

    console.log("Sending showtime data:", { ...showtimeData, startDate, endDate });

    try {
      const response = await axios.post(`http://localhost:5000/api/movie/${movieId}/showtimes`, {
        startDate,
        endDate,
        theatreId,
        ticketPrice: parseFloat(showtimeData.ticketPrice),
      });

      console.log("Showtime created:", response.data);
      onShowtimeCreated(); // Call the callback function to refresh data or show a success message
    } catch (error) {
      console.error("Error creating showtime:", error.response?.data || error.message);
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Create Showtime for Movie</h2>
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
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Select Show Time</h2>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
          <h2 className="text-lg font-semibold mb-4">Start From</h2>

            <DateTimePicker
              label="Controlled picker"
              value={startTime}
              onChange={(newValue) => setStartValue(newValue)} // Correct type for newValue
            />
            <h2 className="text-lg font-semibold mb-4">End At</h2>

            <DateTimePicker
              label="Controlled picker"
              value={endTime}
              onChange={(newValue) => setEndValue(newValue)} // Correct type for newValue
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
      <button
        onClick={createShowtime}
        className="bg-green-500 text-white py-2 px-4 rounded-lg"
      >
        Create Showtime
      </button>
    </div>
  );
}
