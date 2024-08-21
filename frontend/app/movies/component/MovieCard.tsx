  import { DateTime } from "next-auth/providers/kakao"
  import Link from "next/link"

  interface MovieCardProps{
    id? :String,
    title?:String,
    image?:String,
    language?:String
    
  }

  export const MovieCard:React.FC<MovieCardProps>=({
    id,
    title,
    image,
    language
    
  })=>{
      return (
        <Link href={`/movie/${id}`}>
          <div className="bg-background rounded-lg overflow-hidden shadow-lg">
              <img src={`${image}`} alt="Loading" width={400} height={400} className="w-full h-[400px] object-cover"/>
              <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{title}</h2>
                  <div className="flex items-center mb-2">
                      <span>UA</span>
                  </div>
                  <div className="flex items-center">
                      <span>{language}</span>
                  </div>
              </div>
          </div> 
        </Link>  
      )
  }

