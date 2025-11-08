export default function HotelHighlights({ highlights }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6 sticky top-4">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Highlights</h3>
      <div className="space-y-3">
        {highlights.map((highlight, index) => (
          <div key={index} className="flex gap-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
              style={{ backgroundColor: "#FF6A28" }}
            >
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-gray-700 text-sm">{highlight}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
