import { CalendarIcon, ClockIcon, TicketIcon, BanknoteIcon } from "lucide-react"

interface ResercationProps {
  movieName: string;
  orderId: string;
  ticketPrice: number;
  time:Date;
}

const Show: React.FC<ResercationProps> = ({
  movieName,
  orderId,
  ticketPrice,
  time
}) => {

  const formattedTime = new Date(time).toDateString();
  console.log(formattedTime)
  return (
    <div className="container px-6 py-10 bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto"> {/* Increased padding */}
      
        <div className="overflow-hidden w-full"> 
          <div className="bg-primary/10 pb-4 px-6">
            <h3 className="text-2xl font-bold">{movieName}</h3> 
          </div>
          <div className="pt-6 px-6">
            <div className="space-y-4"> 
              {/* Order ID */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4"> 
                  <TicketIcon className="w-6 h-6 text-primary" />  
                  <span className="text-lg font-medium">Order ID:</span> 
                </div>
                <div className="border rounded px-3 py-2 text-lg ml-10">{orderId}</div> 
              </div>

              {/* Price */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <BanknoteIcon className="w-6 h-6 text-primary" /> 
                  <span className="text-lg font-medium">Price:</span>
                </div>
                <span className="text-lg">${ticketPrice.toFixed(2)}</span>
              </div>

              {/* Time */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                   <ClockIcon className="w-6 h-6 text-primary" />
                  <span className="text-lg font-medium">Time:</span>
                </div>
                <span className="text-lg">{formattedTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Show
