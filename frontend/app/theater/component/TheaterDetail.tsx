'use Client'

const TheaterDetail = ()=>{
    return(


    <div className="container mx-auto p-4">
    
    <div className="bg-white shadow rounded-lg mb-8">
      <div className="p-4">
        <h1 className="text-3xl font-bold">Cineplex Odeon</h1>
      </div>
      <div className="p-4">
        <img
          src="/placeholder.svg?height=400&width=800"
          alt="Cineplex Odeon"
          className="w-full h-64 object-cover rounded-lg mb-4"
        />
        <p className="text-gray-600">123 Movie Lane, Cityville, ST 12345</p>
      </div>
    </div>

    
    <h2 className="text-2xl font-semibold mb-4">Now Showing</h2>
    
     
    <div className="bg-white shadow rounded-lg mb-8">
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">Interstellar Adventure</h3>
        <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">Hall A</span>
      </div>
      <div className="p-4 flex flex-col md:flex-row gap-6">
        <img
          src="/placeholder.svg?height=300&width=200"
          alt="Interstellar Adventure"
          className="w-full md:w-48 h-72 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-600 mb-4">A mind-bending journey through space and time.</p>
          <div className="mb-4"><strong>Showtime:</strong> 7:00 PM</div>
          <div className="mb-4"><strong>Ticket Price:</strong> $12.99</div>
          <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
          <div className="grid grid-cols-8 gap-2 mb-4">
            
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Book Tickets</button>
        </div>
      </div>
    </div>
    
    
    <div className="bg-white shadow rounded-lg mb-8">
      <div className="p-4 flex items-center justify-between">
        <h3 className="text-xl font-bold">Comedy Chaos</h3>
        <span className="px-2 py-1 bg-gray-200 text-gray-800 rounded">Hall B</span>
      </div>
      <div className="p-4 flex flex-col md:flex-row gap-6">
        <img
          src="/placeholder.svg?height=300&width=200"
          alt="Comedy Chaos"
          className="w-full md:w-48 h-72 object-cover rounded-lg"
        />
        <div className="flex-1">
          <p className="text-gray-600 mb-4">A hilarious romp through everyday mishaps.</p>
          <div className="mb-4"><strong>Showtime:</strong> 8:30 PM</div>
          <div className="mb-4"><strong>Ticket Price:</strong> $10.99</div>
          <h3 className="text-lg font-semibold mb-2">Available Seats</h3>
          <div className="grid grid-cols-8 gap-2 mb-4">
            
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
            <div className="w-6 h-6 bg-blue-500 rounded-sm" title="Available"></div>
           
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">Book Tickets</button>
        </div>
      </div>
    </div>

  </div>

    )
}


export default TheaterDetail