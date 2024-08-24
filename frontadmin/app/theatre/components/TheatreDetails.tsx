import CreateShowtimeForm from "@/app/component/CreateShowtimeForm";
import MoviesShowtimes from "@/app/component/MoviesShowtime";
import { BACKEND_URL } from "@/config";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

type TheatreDetailsProps = {
    id: string;
    theatre: {
        name: string;
        description: string;
        city: string;
        seats: number;
        ticketPrice: number;
        startDate: string;
        endDate: string;
        image: string;
        movies: Array<any>; // Adjust the type according to your movie object structure
    };
};

export function TheatreDetails({ id, theatre }: TheatreDetailsProps) {
    const router = useRouter();

    const [movieId, setMovieId] = useState('');
    const [formData, setFormData] = useState({
        name: theatre.name,
        city: theatre.city,
        seats: theatre.seats,
        ticketPrice: theatre.ticketPrice,
        image: theatre.image,
    });
    const [isEditFormVisible, setIsEditFormVisible] = useState(false);

    const addMovie = async () => {
        try {
            const res = await fetch(`${BACKEND_URL}/api/theatre/${id}/add-movie`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ movieId }),
            });

            const data = await res.json();
            console.log("Movie added:", data);
            window.location.reload();
        } catch (error) {
            console.error("Error adding movie:", error);
        }
    };

    const handleShowtimeCreated = () => {
        alert("Showtime added. Refresh to fetch the latest details");
    };

    const updateTheatre = async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/theatre/update-theatre/${id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            console.log("Theatre updated:", res.data);
            window.location.reload();
        } catch (error) {
            console.error("Error updating theatre:", error);
        }
    };

    const deleteTheatre = async () => {
        try {
            const res = await axios.post(`${BACKEND_URL}/api/theatre/delete-theatre/${id}`,{})
            const data = res.data
            console.log("Theatre deleted:", data);
            alert("Theatre Deleted")
            router.push("/"); // Redirect to the home page or another page after deletion
        } catch (error) {
            console.error("Error deleting theatre:", error);
        }
    };

    return (
        <div className="min-h-screen  flex items-center justify-center p-6">
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

                {/* Conditional Render: Update Theatre Form */}
                {isEditFormVisible && (
                    <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Update Theatre Details</h2>
                        <input
                            type="text"
                            placeholder="Theatre Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="number"
                            placeholder="Seats"
                            value={formData.seats}
                            onChange={(e) => setFormData({ ...formData, seats: parseInt(e.target.value) })}
                            className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="number"
                            placeholder="Ticket Price"
                            value={formData.ticketPrice}
                            onChange={(e) => setFormData({ ...formData, ticketPrice: parseFloat(e.target.value) })}
                            className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={formData.image}
                            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                            className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full focus:outline-none focus:border-blue-500"
                        />
                        <button
                            onClick={updateTheatre}
                            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300 w-full"
                        >
                            Update Theatre
                        </button>
                    </div>
                )}
                <button
                    onClick={() => setIsEditFormVisible(!isEditFormVisible)}
                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors duration-300 w-full mb-4"
                >
                    {isEditFormVisible ? 'Cancel Edit' : 'Edit Theatre'}
                </button>
                {/* Button to Delete Theatre */}
                
                    <button
                        onClick={deleteTheatre}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors duration-300 w-full"
                    >
                        Delete Theatre
                    </button>

                <CreateShowtimeForm
                    movieId={movieId}
                    theatreId={id}
                    onShowtimeCreated={handleShowtimeCreated}
                />
            </div>
        </div>
    );
}
