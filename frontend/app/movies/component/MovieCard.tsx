

export const MovieCard=()=>{
    return (
        <div className="bg-background rounded-lg overflow-hidden shadow-lg">
            <img src="/placeholder.svg" alt="Loading" width={400} height={400} className="w-full h-[400px] object-cover"/>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">Avanegers:Endgame</h2>
                <div className="flex items-center mb-2">
                    <TvIcon className="w-5 h-5 mr-2"/>
                    <span>HBO Max, Amazon prime</span>
                </div>
                <div className="flex items-center">
                    <ClockIcon className="w-5 h-5 mr-2"/>
                    <span>1:00 PM,4:30 PM, 8:00 PM</span>
                </div>

            </div>

        </div>
    )
}


function ClockIcon(props:any) {
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    )
  }
  
  
  function TvIcon(props:any) {
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
        <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>
    )
  }