'use client'

import { Movies } from "@/app/hooks";

interface MovieDetailProps {
  movie: Movies |undefined;
}

const extractVideoId = (url: string | null) => {
    if (!url) {
        return null;  // or a default value, like an empty string, if preferred
    }

    const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:watch\?v=|embed\/|v\/|.+\?v=)?([^&\n]+)|youtu\.be\/([^&\n]+)/;
    const match = url.match(regex);
    return match ? match[1] || match[2] : null;  // Return null if no match is found
};

const MovieDetail = ({movie}:MovieDetailProps) => {
    

   
    if (!movie) return <p>Movie not found</p>;

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
                    <div className="flex flex-wrap gap-4 mb-4">
                        <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">{movie.language}</span>
                        {movie.genre.map((g, index) => (
                            <span key={index} className="px-2 py-1 border border-gray-300 text-gray-800 rounded">{g}</span>
                        ))}
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-8">
                        <div className="flex items-center">
                            <span>Director: {movie.director}</span>
                        </div>
                        <div className="flex items-center">
                            <span>Duration: {movie.duration} mins</span>
                        </div>
                        <div className="flex items-center">
                            <span>Start Date: {movie.startDate instanceof Date ? movie.startDate.toISOString().slice(0, 10) : "N/A"}</span>
                        </div>
                        <div className="flex items-center">
                            <span>End Date: {movie.endDate instanceof Date ? movie.endDate.toISOString().slice(0, 10) : "N/A"}</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-white shadow rounded-lg p-6">
                        <img
                            src={movie.image}
                            alt={movie.title}
                            className="w-full h-auto rounded-lg mb-4"
                        />
                        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Book Tickets</button>
                    </div>
                </div>
            </div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Available in Theaters</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {movie?.theatres?.length > 0 ? (
                        movie.theatres.map(theatre => (
                            <div key={theatre.id} className="bg-white shadow rounded-lg p-4">
                                <h3 className="font-semibold mb-2">{theatre.name}</h3>
                                <p className="text-sm text-gray-600">{theatre.Address}</p>
                            </div>
                            ))
                ) : (
                    <p>No theaters available.</p>
                )}
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
