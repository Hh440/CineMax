'use client'

import { Movies } from "@/app/hooks";
import { useShowtime } from "@/app/hooks";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { BACKEND_URL } from "@/config";


interface MovieDetailProps {
  movie: Movies | undefined;
}

const extractVideoId = (url: string | null) => {
  if (!url) {
    return null;
  }

  const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n]+)|youtu\.be\/([^&\n]+)/;
  const match = url.match(regex);
  return match ? match[1] || match[2] : null;
};

const MovieDetail = ({ movie }: MovieDetailProps) => {
  const { loading: showtimesLoading, showtimes } = useShowtime({ id: movie?.id || '' });
  const [isEditing, setIsEditing] = useState(false);  // New state for form visibility
  const [formData, setFormData] = useState({
    title: movie?.title || '',
    image: movie?.image || '',
    language: movie?.language || '',
    genre: movie?.genre || [],
    director: movie?.director || '',
    trailerUrl: movie?.trailerUrl || '',
    description: movie?.description || '',
    duration: movie?.duration || '',
    startDate: movie?.startDate ? movie.startDate.toString().slice(0, 10) : '',
    endDate: movie?.endDate ? movie.endDate.toString().slice(0, 10) : '',
  });

  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateMovie = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/movie/update-movie-details/${movie?.id}`, formData);
  
      if (response.status === 200) {
        alert('Movie updated successfully');
        setIsEditing(false); // Close the form after a successful update
        window.location.reload(); // Reload the page to reflect the changes
    } else {
        alert('Failed to update movie');
      }
    } catch (error) {
      console.error('Error updating movie:', error);
      alert('An error occurred while updating the movie');
    }
  };

  const handleDeleteMovie = async () => {
    const confirmDelete = confirm('Are you sure you want to delete this movie?');
    if (confirmDelete) {
      const response = await axios.post(`${BACKEND_URL}/api/movie/delete-movie/${movie?.id}`,{})

      if (response.status == 200) {
        alert('Movie deleted successfully');
        router.push('/'); // redirect to homepage after deletion
      } else {
        alert('Failed to delete movie');
      }
    }
  };

  if (!movie) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-4xl font-bold text-center">
          Loading   
        </div>
      </div>
    );
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <div className="aspect-video mb-4">
            <iframe
              src={`https://www.youtube.com/embed/${extractVideoId(movie.trailerUrl)}`}
              title={`${movie.title} trailer`}
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
          <p className="text-gray-600 mb-4">{movie.description}</p>

          {/* Edit Button */}
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="w-full mb-4 bg-yellow-500 text-white py-2 px-4 rounded-lg"
          >
            {isEditing ? 'Cancel' : 'Edit Movie'}
          </button>

          {/* Update Form - Visible Only When Editing */}
          {isEditing && (
            <div className="bg-white shadow rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-semibold mb-4">Update Movie Details</h2>
              <h3>Title</h3>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder={movie.title}
                className="w-full mb-4 p-2 border"
              />
              <h3>Image URL</h3>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                placeholder={movie.image}
                className="w-full mb-4 p-2 border"
              />
              <h3>Language</h3>
              <input
                type="text"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                placeholder={movie.language}
                className="w-full mb-4 p-2 border"
              />
              <h3>Director</h3>
              <input
                type="text"
                name="director"
                value={formData.director}
                onChange={handleInputChange}
                placeholder={movie.director}
                className="w-full mb-4 p-2 border"
              />
              <h3>Trailer URL</h3>
              <input
                type="text"
                name="trailerUrl"
                value={formData.trailerUrl}
                onChange={handleInputChange}
                placeholder={movie.trailerUrl}
                className="w-full mb-4 p-2 border"
              />
              <h3>Description</h3>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder={movie.description}
                className="w-full mb-4 p-2 border"
              ></textarea>
              <h3>Duration (in hrs)</h3>
              <input
                type="text"
                name="duration"
                value={formData.duration}
                onChange={handleInputChange}
                placeholder={""+movie.duration}
                className="w-full mb-4 p-2 border"
              />
              <h3>Start Date</h3>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border"
              />
              <h3>End Date</h3>
              <input
                type="date"
                name="endDate"  
                value={formData.endDate}
                onChange={handleInputChange}
                className="w-full mb-4 p-2 border"
              />

              <button onClick={handleUpdateMovie} className="w-full bg-green-500 text-white py-2 rounded-lg">
                Update Movie
              </button>
            </div>
          )}

          {/* Delete Movie */}
          <button onClick={handleDeleteMovie} className="w-full bg-red-500 text-white py-2 rounded-lg">
            Delete Movie
          </button>
        </div>

        <div>
          <div className="bg-white shadow rounded-lg p-6">
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-auto rounded-lg mb-4"
            />
            {/* <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Book Tickets</button> */}
          </div>
        </div>
      </div>

      {/* Movie Details and showtimes */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Available in Theaters</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {showtimesLoading ? (
            <p>Loading showtimes...</p>
          ) : showtimes && showtimes.length > 0 ? (
            showtimes.map((showtime) => (
              <div key={showtime.id} className="bg-white shadow rounded-lg p-4">
                <p>Theater: {showtime.theatre.name}</p>
                <p>Ticket Price: {showtime.ticketPrice}</p>
                <p>Start Date: {new Date(showtime.startDate).toLocaleString()}</p>
                <p>End Date: {new Date(showtime.endDate).toLocaleString()}</p>
              </div>
            ))
          ) : (
            <p>No showtimes available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
