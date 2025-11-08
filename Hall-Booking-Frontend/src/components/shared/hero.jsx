"use client"

import { useState } from "react"
import CityFilter from "./city-filter"

export default function Hero() {
  const [formData, setFormData] = useState({
    location: "Singapore",
    priceRange: "1000",
    capacity: "500 - 1000",
  })

  return (
    <section className="relative py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CityFilter />

        {/* Hero Card */}
        <div
          className="relative rounded-3xl overflow-hidden h-96 md:h-[500px] bg-cover bg-center"
          style={{
            backgroundImage:
              "url(./herobg.png)",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-balance">
              Chase elegance. Reserve your dream stay now.
            </h2>
            <p className="text-lg md:text-xl text-white mb-8 text-balance">
              Discover the finest hotels from all over the world.
            </p>

            {/* Search Bar */}
            <div className="bg-white rounded-lg p-4 mb-8 w-full max-w-md">
              <label className="block text-sm font-semibold text-gray-700 mb-2">For what you want to book?</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700">
                <option>select</option>
              </select>
            </div>

            {/* Booking Form */}
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-4xl grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
              {/* Location */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Location for your event
                </label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                />
                <p className="text-xs text-gray-500 mt-1">Singapore</p>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8.5 10a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Price
                </label>
                <input
                  type="text"
                  value={formData.priceRange}
                  onChange={(e) => setFormData({ ...formData, priceRange: e.target.value })}
                  className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700"
                />
              </div>

              {/* Capacity */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM9 12a6 6 0 11-12 0 6 6 0 0112 0z" />
                  </svg>
                  Capacity
                </label>
                <select className="w-full border border-gray-300 rounded px-3 py-2 text-gray-700">
                  <option>500 - 1000</option>
                  <option>1000 - 1500</option>
                  <option>1500+</option>
                </select>
              </div>

              {/* Book Now Button */}
              <button
                className="w-full text-white font-semibold py-2 rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#FF6A28" }}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
