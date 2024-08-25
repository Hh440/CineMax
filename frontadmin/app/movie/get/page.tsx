"use client";

import { useRouter } from "next/navigation";
import { Movies, useAllMovie } from "@/app/hooks";
import { Nav } from "@/app/component/navbar/nav";

const AllMovies = () => {
  const { loading, movies } = useAllMovie();
  const router = useRouter();

  if (loading)
    return <div className="text-center py-20 text-lg">Loading...</div>;

  const handleCardClick = (id : string) => {
    router.push(`/movie/get/${id}`);
  };

  return (
    <div>
      <Nav />
      <div className="text-xl font-semibold mb-2">Movies</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {movies.map((movie : Movies) => (
          <div
            key={movie.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(movie.id)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
              <p className="text-gray-500 text-sm">{movie.language}</p>
              <p className="text-gray-700 mt-2">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
