"use client"

import { Wifi, UtensilsCrossed, Waves } from "lucide-react"

export default function HotelResultCard({ hotel }) {
  const amenityIcons = {
    wifi: <Wifi size={20} />,
    restaurant: <UtensilsCrossed size={20} />,
    pool: <Waves size={20} />,
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Image */}
        <div className="md:col-span-1">
          <img
            src={hotel.image || "/placeholder.svg"}
            alt={hotel.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="md:col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-bold text-gray-800">{hotel.name}</h3>
              <span
                className="px-2 py-1 rounded-full text-white text-xs font-semibold"
                style={{ backgroundColor: "#23284C" }}
              >
                {hotel.badge}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {hotel.description}
              <button className="text-orange-500 hover:text-orange-600 ml-1">...more</button>
            </p>

            <div className="flex items-center gap-2 text-gray-700 text-sm mb-4">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              {hotel.location}
            </div>

            {/* Amenities */}
            <div className="flex gap-4">
              {hotel.amenities.map((amenity) => (
                <div key={amenity} className="text-gray-600 hover:text-orange-500 transition-colors">
                  {amenityIcons[amenity]}
                </div>
              ))}
            </div>
          </div>

          {/* Select Button */}
          <button
            className="mt-4 w-full text-white font-semibold py-2 px-4 rounded-md transition-colors"
            style={{ backgroundColor: "#FF6A28" }}
          >
            Select
          </button>
        </div>

        {/* Price */}
        <div className="md:col-span-1 flex flex-col justify-between items-end">
          <div className="text-right">
            <p className="text-gray-600 text-sm">1 room 1 night</p>
            <p className="text-3xl font-bold" style={{ color: "#FF6A28" }}>
              ${hotel.price.toLocaleString()}
            </p>
            <p className="text-gray-500 text-xs">{hotel.taxes}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
