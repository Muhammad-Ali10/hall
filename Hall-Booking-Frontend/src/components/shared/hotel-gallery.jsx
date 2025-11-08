"use client"

import { useState } from "react"

export default function HotelGallery({ images }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div className="mb-8">
      {/* Main Image */}
      <div className="mb-4 rounded-lg overflow-hidden bg-gray-100 h-96">
        <img src={mainImage || "/placeholder.svg"} alt="Hotel main view" className="w-full h-full object-cover" />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden cursor-pointer h-24 border-2 transition-all ${
              mainImage === image ? "border-orange-500" : "border-gray-200"
            }`}
            onClick={() => setMainImage(image)}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Hotel view ${index + 1}`}
              className="w-full h-full object-cover hover:opacity-80 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
