  'use client'
  import { Nav } from '@/app/component/navbar/nav'
  import { TheaterCard } from '../component/TheaterCard'
  import { useTheaters } from '../hooks'
  import { BuildingIcon } from 'lucide-react'

  const Display = () => {
    const { loading, theaters } = useTheaters()

    return (
      <div className="min-h-screen bg-blue-50 pb-10 relative overflow-hidden flex flex-col">
        {/* Theater curtain effect */}
        <div className="bg-teal-700 h-16"></div>
        <div className="bg-teal-600 h-8 transform -skew-y-3"></div>

        <Nav />

        <main className='flex-1 py-12 px-4 md:px-6 max-w-6xl mx-auto'>
          <h1 className="text-4xl font-bold text-teal-700 mb-8 flex items-center justify-center gap-3">
            <BuildingIcon className="w-10 h-10" /> 
            Theaters
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {theaters.map(theater => (
              <TheaterCard
                key={theater.id}
                id={theater.id}
                name={theater.name}
                seat={theater.seats}
                ticketPrice={theater.ticketPrice}
                Address={theater.Address}
                image={theater.image}
              />
            ))}
          </div>
        </main>

        {/* Decorative elements  */}
        <div className="absolute top-32 left-4 text-teal-200 transform -rotate-12 opacity-50">
          <BuildingIcon className="w-24 h-24" />
        </div>
        <div className="absolute bottom-4 right-4 text-teal-300 transform rotate-12 opacity-50">
          <BuildingIcon className="w-32 h-32" />
        </div>
        
      </div>
    )
  }

  export default Display
