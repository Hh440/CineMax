'use client'

const MovieDeatil =()=>{
    return(

  <div className="container mx-auto px-4 py-8">
  
  <div className="grid md:grid-cols-3 gap-8">
    <div className="md:col-span-2">
      <h1 className="text-4xl font-bold mb-4">Inception</h1>
      <div className="aspect-video mb-4">
        <iframe
          src="https://www.youtube.com/embed/YoHD9XEInc0"
          title="Inception trailer"
          className="w-full h-full rounded-lg"
         
        ></iframe>
      </div>
      <p className="text-gray-600 mb-4">
        A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.
      </p>
      <div className="flex flex-wrap gap-4 mb-4">
        <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">English</span>
        <span className="px-2 py-1 border border-gray-300 text-gray-800 rounded">Sci-Fi</span>
        <span className="px-2 py-1 border border-gray-300 text-gray-800 rounded">Action</span>
        <span className="px-2 py-1 border border-gray-300 text-gray-800 rounded">Thriller</span>
      </div>
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-4.586-4.586a2 2 0 00-2.828 2.828l4.586 4.586a2 2 0 002.828-2.828z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121a2.001 2.001 0 01-2.828 0l-1.415-1.415a2.001 2.001 0 010-2.828l1.415-1.415a2.001 2.001 0 012.828 0l1.415 1.415a2.001 2.001 0 010 2.828l-1.415 1.415z"></path>
          </svg>
          <span>Director: Christopher Nolan</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12V8h1a3 3 0 013-3h4a3 3 0 013 3v4a3 3 0 01-3 3h-4a3 3 0 01-3-3"></path>
          </svg>
          <span>Duration: 2h 28min</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 4v10h10V7H7zm1 0h10m-1 0H8m-3 8h10m-5 4h4"></path>
          </svg>
          <span>Start Date: 2023-07-16</span>
        </div>
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 4v10h10V7H7zm1 0h10m-1 0H8m-3 8h10m-5 4h4"></path>
          </svg>
          <span>End Date: 2023-08-31</span>
        </div>
      </div>
    </div>
    <div>
      <div className="bg-white shadow rounded-lg p-6">
        <img
          src="/placeholder.svg"
          alt="Inception"
          className="w-full h-auto rounded-lg mb-4"
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg">Book Tickets</button>
      </div>
    </div>
  </div>

  
  <div className="mt-8">
    <h2 className="text-2xl font-semibold mb-4">Available in Theaters</h2>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold mb-2">Cineplex Downtown</h3>
        <p className="text-sm text-gray-600">123 Main St, Cityville</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold mb-2">Starlight Cinema</h3>
        <p className="text-sm text-gray-600">456 Oak Ave, Townsburg</p>
      </div>
      <div className="bg-white shadow rounded-lg p-4">
        <h3 className="font-semibold mb-2">Mega Movies</h3>
        <p className="text-sm text-gray-600">789 Pine Rd, Villageton</p>
      </div>
    </div>
  </div>
</div>
    )
}

export default MovieDeatil