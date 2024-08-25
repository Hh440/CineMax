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

  const formattedTime = new Date(time).toLocaleDateString();
  console.log(formattedTime)
  return (
    <div className="container px-6 py-10 bg-white shadow-md overflow-hidden rounded-lg hover:shadow-lg transition-shadow duration-300 max-w-sm mx-auto"> {/* Increased padding */}
      
        <div className="overflow-hidden w-full"> {/* Increased border radius and shadow for larger card appearance */}
          <div className="bg-primary/10 pb-4 px-6"> {/* Increased padding */}
            <h3 className="text-2xl font-bold">{movieName}</h3> {/* Increased font size */}
          </div>
          <div className="pt-6 px-6"> {/* Increased padding */}
            <div className="space-y-4"> {/* Increased space between items */}
              {/* Order ID */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4"> {/* Increased spacing between icon and text */}
                  <TicketIcon className="w-6 h-6 text-primary" /> {/* Increased icon size */}
                  <span className="text-lg font-medium">Order ID:</span> {/* Increased font size */}
                </div>
                <div className="border rounded px-3 py-2 text-lg ml-10">{orderId}</div> {/* Increased padding and font size */}
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
