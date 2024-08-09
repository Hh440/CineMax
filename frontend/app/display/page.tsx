'use client'
import { signOut } from "next-auth/react"
import Link from 'next/link'

const display = ()=>{
    return(
        <div className="flex flex-col min-h-dvh">
            <header className="bg-[#007bff] text-white py-4 px-6 flex items-center justify-between">
                <Link href='#' className="flex items-center gap-2" prefetch={false}>
                    <FilmIcon className="w-c6 h-6 fill-[#87ceeb]"/>
                    <span className="text-3xl font-bold">Maxer</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6">
                    <Link href="/display" className="hover:underline text-xl text-white" prefetch={false}>Theater</Link>
                    <Link href="#" className="hover:underline text-white text-xl">Movies</Link>
                    <Link href="#" className="hover:underline text-white text-xl">Showtimes</Link>
                    <Link href="#" className="hover:underline text-white text-xl">Offer</Link>
                    <Link href="#" className="hover:underline text-white text-xl">Events</Link>
                </nav>
            </header>

            <main className="flex-1 py-12 px-4 md:px-6">
                <h1 className="text-3xl font-bold mb-8 text-[#007bff]">Theater</h1>
                

            </main>
            
        </div>
    )
}


function FilmIcon(props:any) {
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 3v18" />
        <path d="M3 7.5h4" />
        <path d="M3 12h18" />
        <path d="M3 16.5h4" />
        <path d="M17 3v18" />
        <path d="M17 7.5h4" />
        <path d="M17 16.5h4" />
      </svg>
    )
  }

export default display