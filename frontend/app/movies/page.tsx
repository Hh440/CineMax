'use client'
import {Nav} from '@/app/component/navbar/nav'
import { MovieCard } from './component/MovieCard'
const Movies=()=>{
    return(
        <div className="flex flex-col min-h-dvh">
            <Nav/>

            <main className='flex-1 py-12 px-4 md:px-6'>
                <h1 className="text-3xl font-bold mb-8 text-[#007bff]">Movies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <MovieCard/>

                </div>

            </main>
        </div>
    )
}

export default Movies