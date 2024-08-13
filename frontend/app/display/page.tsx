'use client'
import {Nav} from '@/app/component/navbar/nav'
import { TheaterCard } from "../component/TheaterCard"
import { useTheaters } from "../hooks"


const display = ()=>{

  const{loading,theaters}= useTheaters()

    return(
        <div className="flex flex-col min-h-dvh">
            <Nav/>

            <main className="flex-1 py-12 px-4 md:px-6">
                <h1 className="text-3xl font-bold mb-8 text-[#007bff]">Theater</h1>
                <div className="flex justify-center">
                  {
                    theaters.map(theater=>
                      <TheaterCard
                      id={theater.id}
                      name={theater.name}
                      seat={theater.seats} 
                      ticketPrice={theater.ticketPrice}
                      Address={theater.Address}
                      image={theater.image}

                      />
                    )
                  }

                </div>
                

            </main>
            
        </div>
    )
}




export default display