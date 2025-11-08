"use client"

import { useState } from "react"

const cities = ["Bengaluru", "Mysuru", "Mandya", "Tumakuru", "Hubbalii", "Dharwad", "Mangaluru"]

export default function CityFilter() {
  const [activeCity, setActiveCity] = useState("Bengaluru")

  return (
    <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
      {cities.map((city) => (
        <button
          key={city}
          onClick={() => setActiveCity(city)}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeCity === city ? "text-white" : "border-2 text-gray-700"
          }`}
          style={{
            backgroundColor: activeCity === city ? "#FF6A28" : "transparent",
            borderColor: activeCity === city ? "#FF6A28" : "#FF6A28",
            color: activeCity === city ? "white" : "#FF6A28",
          }}
        >
          {city}
        </button>
      ))}
    </div>
  )
}
