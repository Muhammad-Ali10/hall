export default function HotelDetails({ hotel }) {
  return (
    <div className="mb-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-1">
            {[...Array(hotel.rating)].map((_, i) => (
              <span key={i} style={{ color: "#FF6A28" }}>
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-4">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span>{hotel.location}</span>
          <button className="text-orange-500 hover:text-orange-600 font-semibold">show map</button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{hotel.description}</p>
      </div>
    </div>
  )
}
