import Link from 'next/link'
interface TheaterCardProps{
    name:string,
    seat?:number,
    image?:string,
    id:string,
    ticketPrice?:number
    Address:string
}

export const TheaterCard:React.FC<TheaterCardProps> = ({
    name,
    seat,
    image,
    id,
    ticketPrice,
    Address
}) =>{
    return(
      <Link href={`/theater/${id}`}>
        <div className="rounded-lg bg-background shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
        <img
          src="/placeholder.svg"
          alt="Theater 1"
          width="600"
          height="300"
          className="h-72 w-full rounded-t-lg object-cover"
          style={{ aspectRatio: "600/300", objectFit: "cover" }}
        />
        <div className="p-4">
          <h2 className="mb-2 text-xl font-semibold">{name}</h2>
          <div className="flex items-center gap-2 mb-4">
            <StarIcon className="h-5 w-5 text-primary" />
            <StarIcon className="h-5 w-5 text-primary" />
            <StarIcon className="h-5 w-5 text-primary" />
            <StarIcon className="h-5 w-5 text-muted-foreground" />
            <StarIcon className="h-5 w-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">4.2</span>
          </div>
          <p className="mb-4 text-muted-foreground">12 shows available</p>
          <div className="flex items-center gap-2">
            <LocateIcon className="h-5 w-5 text-muted-foreground" />
            <p className="text-muted-foreground">{Address}</p>
          </div>
        </div>
      </div>
    </Link>  

    )
}




function LocateIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="2" x2="5" y1="12" y2="12" />
        <line x1="19" x2="22" y1="12" y2="12" />
        <line x1="12" x2="12" y1="2" y2="5" />
        <line x1="12" x2="12" y1="19" y2="22" />
        <circle cx="12" cy="12" r="7" />
      </svg>
    )
  }
  
  
  function StarIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    )
  }