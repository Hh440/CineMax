
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
        <div className="rounded-lg border shadow-sm bg-[#87ceeb] text-[#007bff] w-full md:w-full lg:w-full flex-row">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center justify-center">
                    <h2 className="text-xl font-bold">{name}</h2>
                    <div className="text-sm text-[#6495ed]">{Address}</div>
                </div>
            </div>
        </div>

    )
}