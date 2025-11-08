"use client"

export default function SearchBar() {
  return (
    <div style={{ backgroundColor: "#FF6A28" }} className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
            {/* Location */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                Location for your event
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Singapore</option>
                <option>Mumbai</option>
                <option>Delhi</option>
              </select>
            </div>

            {/* Price */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.16 5a.75.75 0 00-.712 1.05l1.952 3.9H3.75a.75.75 0 000 1.5h5.888l-1.952 3.9A.75.75 0 008.16 17a.75.75 0 00.712-1.05l-1.952-3.9h5.888a.75.75 0 000-1.5H6.92l1.952-3.9A.75.75 0 008.16 5z" />
                </svg>
                Price
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>$1000</option>
                <option>$2000</option>
                <option>$3000</option>
              </select>
            </div>

            {/* Check out */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Check out
              </label>
              <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md">
                <span className="text-yellow-400">★★★★★</span>
                <span className="text-gray-700 text-sm">5.0</span>
              </div>
            </div>

            {/* Capacity */}
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 6a9 9 0 1118 0 9 9 0 01-18 0z" />
                </svg>
                Capacity
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>500 - 1000</option>
                <option>1000 - 2000</option>
                <option>2000+</option>
              </select>
            </div>

            {/* Book Now Button */}
            <div className="flex flex-col">
              <button
                className="w-full text-white font-semibold py-2 px-4 rounded-md transition-colors"
                style={{ backgroundColor: "#FF6A28" }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
