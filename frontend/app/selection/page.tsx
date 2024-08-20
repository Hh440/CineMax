'use client'
import { TicketIcon } from "lucide-react"
const Selection=()=>{

    const theaters = [
        { name: "Skyview Cinema", ticketPrice: 12.99 },
        { name: "Sunset Plaza", ticketPrice: 10.49 },
        // Add more theaters as needed
      ];
    return (
        <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-light text-center mb-12 text-sky-900">
            Select Your Theater
          </h1>
          <div className="space-y-6">
            {theaters.map((theater, index) => (
              <div key={index} className="w-full bg-white shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg overflow-hidden border-sky-100 border">
                <div className="bg-sky-50 py-4">
                  <h2 className="text-xl text-sky-900 font-medium">
                    {theater.name}
                  </h2>
                </div>
                <div className="pt-4 pb-6 flex justify-between items-center">
                  <div className="flex items-center text-sky-700">
                    <TicketIcon className="w-5 h-5 mr-2" />
                    <span className="text-sm">Ticket Price</span>
                  </div>
                  <p className="text-2xl font-semibold text-sky-900">
                    ${theater.ticketPrice.toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    )
}

export default Selection