import Link from 'next/link';
import { MapPinIcon, MonitorIcon, UtensilsIcon, StarIcon ,ImageIcon} from 'lucide-react';
import { useState,useEffect } from 'react';

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
  const [imgError, setImgError] = useState(false);
  const [fallbackError, setFallbackError] = useState(false);
  const [fallbackImage, setFallbackImage] = useState<string>('');

  useEffect(() => {
    // Array of fallback image paths
    const fallbackImages = [
      '/images/cinema.jpeg',
      '/images/theatre.jpg',
      '/images/screen.avif',
      '/images/box.jpg',
      '/images/buster.jpg'
    ];

    // Select a random fallback image
    const randomImage = fallbackImages[Math.floor(Math.random() * fallbackImages.length)];
    setFallbackImage(randomImage);
  }, []); // Empty dependency array to ensure this runs only once on mount

  const displayImage = imgError ? fallbackImage : image;
  return (

    
    <Link href={`/theater/${id}`}>
      <div className="bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto">
        
      {!imgError || !fallbackError ? (
          <img
            src={displayImage}
            alt={`${name} image`}
            className="w-full h-48 object-cover"
            style={{ aspectRatio: '16 / 9' }}
            onError={() => {
              if (!imgError) {
                setImgError(true); // Try the random fallback image
              } else {
                setFallbackError(true); // Both original and fallback failed
              }
            }}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <ImageIcon className="w-16 h-16 text-teal-600" />
          </div>
        )}
        
        <div className="p-4">
          <div className="text-xl font-bold text-teal-800 mb-2">{name}</div>
          <div className="space-y-2 text-gray-600">
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-teal-600" /> 
              <span>{Address}</span>
            </div>
            <div className="flex items-center gap-2">
              <MonitorIcon className="w-4 h-4 text-teal-600" />
              <span>{seat} Screens</span>
            </div>
            
          </div>
          <div className="flex items-center gap-2 mt-3">
            
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-yellow-400" />
            <StarIcon className="h-5 w-5 text-gray-300" />
            <StarIcon className="h-5 w-5 text-gray-300" />
            
            <span className="text-gray-500 text-sm ml-2">4.2</span>
          </div>
        </div>
      </div>
    </Link>
  );
};
