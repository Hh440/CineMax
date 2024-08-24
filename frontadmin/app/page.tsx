"use client";

import { Nav } from "./component/navbar/nav";

export default function AdminPage() {
  return (
    <div>
      <Nav/>
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">CineMax Admin Page</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to your CineMax admin page. Use this admin site to create and add movies, manage theatres, and set showtimes. Have fun!
        </p>
        <a
          href="https://github.com/Hh440/CineMax"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium"
        >
          View our GitHub Repository
        </a>
        <div className="border-t border-gray-300 pt-4 mt-8">
          <p className="text-sm text-gray-500">
            Regards, <span className="font-semibold">Harsh and Aasif</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
}
