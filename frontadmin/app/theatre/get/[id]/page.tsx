
"use client";

import { useTheatre } from '@/app/hooks';
import { useParams } from "next/navigation";
import { TheatreDetails } from '../../components/TheatreDetails';
import { Nav } from '@/app/component/navbar/nav';

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


export default function Home() {
  const { id } = useParams<{ id: string }>();
  const { loading, theatre } = useTheatre({ id: id || "" });


  if (loading) return <div className="text-center py-20 text-lg">Loading...</div>;

  return (
    <div>
      <Nav/>
      <TheatreDetails id = {id} theatre = {theatre}></TheatreDetails>
    </div>
  );
}
