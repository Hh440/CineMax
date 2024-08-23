"use client";

import { useRouter } from "next/navigation";
import { useAllMovie, useAllTheatres } from "@/app/hooks";
import { Nav } from "@/app/component/navbar/nav";

const AllTheatres = () => {
  const { loading, theatres } = useAllTheatres();
  const router = useRouter();

  if (loading)
    return <div className="text-center py-20 text-lg">Loading...</div>;

  const handleCardClick = (id : string) => {
    router.push(`/theatre/get/${id}`);
  };

  return (
    <div>
      <Nav />
      <div className="text-xl font-semibold mb-2">Movies</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {theatres.map((theatre) => (
          <div
            key={theatre.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
            onClick={() => handleCardClick(theatre.id)}
          >movie
            <img
              src={theatre.image === '' ? "https://t3.ftcdn.net/jpg/03/74/28/58/240_F_374285858_KzJ88FysqJ79AhyNPW2lqnBtsRTokuav.jpg" : theatre.image}
              alt={theatre.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{theatre.name}</h3>
              <p className="text-gray-500 text-sm">{theatre.Address}</p>
              <p className="text-gray-700 mt-2">{theatre.ticketPrice + " Rupees"}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTheatres;
