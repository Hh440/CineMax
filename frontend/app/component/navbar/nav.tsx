'use client'

import Link from 'next/link'
import { ClapperboardIcon, UserIcon, GlobeIcon, HomeIcon, BuildingIcon, ClockIcon, CalendarIcon, TicketIcon } from 'lucide-react'

export const Nav=()=>{
    return (
       
      <nav className="bg-white shadow-md py-8 px-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <div className="text-2xl font-bold text-teal-700 flex items-center gap-2">
              <ClapperboardIcon className="w-8 h-8" />
              <span>CineMax</span>
            </div>
          </div>
          <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6">
           
            <li>
              <a href={'/display'} className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors px-2 py-1">
                <BuildingIcon className="w-4 h-4" />
                <span>Theaters</span>
              </a>
            </li>
            <li>
              <a href={'/movies'} className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors px-2 py-1">
                <FilmIcon className="w-4 h-4" />
                <span>Movies</span>
              </a>
            </li>
            <li>
              <a href={'/showtime'} className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors px-2 py-1">
                <ClockIcon className="w-4 h-4" />
                <span>Showtimes</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors px-2 py-1">
                <CalendarIcon className="w-4 h-4" />
                <span>Events</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center gap-1 text-gray-600 hover:text-teal-600 transition-colors px-2 py-1">
                <TicketIcon className="w-4 h-4" />
                <span>Coupons</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
          
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

