  import { DateTime } from "next-auth/providers/kakao"
  import { useState } from "react"

  import { ImageIcon,ImageOffIcon } from "lucide-react"
  import Link from "next/link"

  interface MovieCardProps{
    id? :String,
    title?:String,
    image?:String,
    language?:String,
    director?:String
    
  }

  export const MovieCard:React.FC<MovieCardProps>=({
    id,
    title,
    image,
    language,
    director
    
  })=>{
    const [imgError, setImgError] = useState(false);
      return (
        <Link href={`/movie/${id}`}>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            {!imgError?(
              <img src={`${image}`} 
              alt="Loading" width={400} height={400} 
              className="w-full h-[400px] object-cover"
              onError={() => setImgError(true)}
              
              />
            ):
            (
              <div className="w-full h-[400px] object-cover bg-gray-200 flex items-center justify-center">
                <ImageOffIcon  width={400} height={400} className=" text-teal-600" />
              </div>
            )}

            
              <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{title}</h2>
                  <div className="flex items-center mb-2">
                      <span>{director}</span>
                  </div>
                  <div className="flex items-center">
                      <span>{language}</span>
                  </div>
              </div>
          </div> 
        </Link>  
      )
  }

