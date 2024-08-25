import Link from 'next/link';
//import { MapPinIcon, MonitorIcon, UtensilsIcon, StarIcon } from 'lucide-react';

interface TheaterCardProps {
  name: string;
  seat?: number;
  image?: string;
  id: string;
  ticketPrice?: number;
  Address: string;
}

export const TheaterCard: React.FC<TheaterCardProps> = ({
  name,
  seat,
  image,
  id,
  ticketPrice,
  Address,
}) => {
  return (
    <Link href={`/theater/${id}`}>
      <div className="bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
        
          <img
            src={image}
            alt={`${name} image`}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: '16 / 9' }}
          />
        
        <div className="p-4">
          <div className="text-xl font-bold text-teal-800 mb-2">{name}</div>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center gap-2">
             {/* <MapPinIcon className="w-4 h-4 text-teal-600" /> */}
              <span>{Address}</span>
            </div>
            <div className="flex items-center gap-2">
              {/*<MonitorIcon className="w-4 h-4 text-teal-600" />*/}
              <span>{seat} Seats</span>
            </div>
            <div className="flex items-center gap-2">
            {/*  <UtensilsIcon className="w-4 h-4 text-teal-600" />*/}
              <span>Ticket Price: ${ticketPrice}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-3">
            {/*
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-gray-300" />
            <StarIcon className="h-5 w-5 text-gray-300" />
            */}
            <span className="text-gray-500 text-sm ml-2">4.2</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
