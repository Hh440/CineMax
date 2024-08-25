'use client'
import { useEffect, useState } from 'react';
import { FilmIcon, TicketIcon, PopcornIcon, ClapperboardIcon } from 'lucide-react';
import { Movies } from "@/app/hooks";
import { useShowtime } from '@/app/hooks';
import { useParams } from "next/navigation";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { BACKEND_URL } from '@/config';

interface MovieDetailProps {
  movie: Movies | undefined;
}

const PaymentCard = ({ movie }: MovieDetailProps) => {

  // Fetch showtimes for the selected movie
  const { loading: showtimesLoading, showtimes } = useShowtime({ id: movie?.id || '' });
  
  const router = useRouter();

  // State for selected showtime index and card number input
  const [selectedShowtimeIndex, setSelectedShowtimeIndex] = useState<number | null>(null);
  const [cardNumber, setCardNumber] = useState('');

  // Format card number as the user types
  const formatCardNumber = (input: any) => {
    const cleaned = input.replace(/\D/g, '');
    const formatted = cleaned.replace(/(\d{4})(?=\d)/g, '$1 ');
    return formatted.slice(0, 19);
  };

  const handleCardNumberChange = (e: any) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  // Handle the payment process
  const handlePay = async () => {
    if (selectedShowtimeIndex === null) {
      toast.error("Please select a showtime before proceeding.");
      return;
    }

    try {
      const selectedShowtime = showtimes[selectedShowtimeIndex];
      await axios.post(`${BACKEND_URL}/api/reservation/add-reservation`, {
        ticketPrice: selectedShowtime?.ticketPrice,
        movieName: movie?.title,
        time: selectedShowtime?.startTime,
      });

      toast.success("Payment Done");
      router.push('/showtime');

    } catch (error) {
      console.error("Payment Error:", error);
      toast.error("Payment Failed");
    }
  };

  return (
    <div className="min-h-screen bg-teal-50 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Theater curtain effect */}
      <div className="absolute top-0 left-0 w-full h-16 bg-teal-600"></div>
      <div className="absolute top-16 left-0 w-full h-8 bg-teal-700 transform -skew-y-3"></div>

      <div className="w-full max-w-md bg-white shadow-xl relative z-10 rounded-lg">
        <div className="text-center p-4 border-b">
          <div className="text-3xl font-bold text-teal-600 flex items-center justify-center gap-2">
               <ClapperboardIcon className="w-8 h-8" /> 
            CinePay Gateway
          </div>
          <p className="text-gray-600 mt-1">Complete your movie ticket purchase</p>
        </div>
        <div className="p-4">
          <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-teal-700">
                <TicketIcon className="w-5 h-5" />
              Booking Summary
            </h3>
            <p className="text-sm text-gray-600">Movie: {movie?.title}</p>
            <p className="text-sm text-gray-600">Date: May 15, 2023</p>
            <p className="text-sm text-gray-600">Time: 7:30 PM</p>
            <p className="text-sm text-gray-600">Seats: A1, A2</p>
            <p className="text-lg font-bold mt-2 text-teal-700">Total: 
              {selectedShowtimeIndex !== null && ` $${showtimes[selectedShowtimeIndex]?.ticketPrice}`}
            </p>
          </div>

          {/* Showtime Selection */}
          <div className="mb-6">
            <h4 className="text-lg font-semibold text-teal-700">Select Showtime</h4>
            {showtimes.map((showtime, index) => (
              <div key={index}>
                <input
                  type="radio"
                  id={`showtime-${index}`}
                  name="showtime"
                  value={index}
                  onChange={() => setSelectedShowtimeIndex(index)}
                  checked={selectedShowtimeIndex === index}
                  className="mr-2"
                />
                <label htmlFor={`showtime-${index}`}>
                  {showtime.startTime} - ${showtime.ticketPrice}
                </label>
              </div>
            ))}
          </div>

          <form>
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="cardName" className="text-gray-700">Name on Card</label>
                <input
                  id="cardName"
                  placeholder="John Doe"
                  className="w-full p-2 border rounded-md border-gray-300"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="cardNumber" className="text-gray-700">Card Number</label>
                <input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  maxLength={19}
                  className="w-full p-2 border rounded-md border-gray-300"
                />
              </div>
              <div className="flex space-x-4">
                <div className="space-y-2 flex-1">
                  <label htmlFor="expiry" className="text-gray-700">Expiry Date</label>
                  <input
                    id="expiry"
                    placeholder="MM/YY"
                    className="w-full p-2 border rounded-md border-gray-300"
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <label htmlFor="cvv" className="text-gray-700">CVV</label>
                  <input
                    id="cvv"
                    placeholder="123"
                    className="w-full p-2 border rounded-md border-gray-300"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="p-4">
          <button
            className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
            onClick={handlePay}
            disabled={selectedShowtimeIndex === null} // Disable the button if no showtime is selected
          >
            {/*<TicketIcon className="w-5 h-5" />*/}
            Pay Now
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-32 left-4 text-teal-500 transform -rotate-12">
        <PopcornIcon className="w-16 h-16" /> 
      </div>
      <div className="absolute bottom-4 right-4 text-teal-500 transform rotate-12">
        <FilmIcon className="w-20 h-20" /> 
      </div>
    </div>
  );
}

export default PaymentCard;
