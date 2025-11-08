export default function RatingDistribution({ rating, reviews, distribution }) {
  const maxCount = Math.max(...Object.values(distribution))

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200">
      <div className="text-center mb-6">
        <div className="text-5xl font-bold text-gray-900 mb-2">{rating}.0</div>
        <div className="flex justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} style={{ color: "#FF6A28" }}>
              ★
            </span>
          ))}
        </div>
        <p className="text-gray-600">{reviews} Reviews</p>
      </div>

      {/* Rating Distribution */}
      <div className="space-y-3">
        {[5, 4, 3, 2, 1].map((star) => (
          <div key={star} className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-700 w-8">{star}</span>
            <svg className="w-4 h-4" style={{ color: "#FF6A28" }} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <div className="flex-1 bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: "#FF6A28",
                  width: `${(distribution[star] / maxCount) * 100}%`,
                }}
              />
            </div>
            <span className="text-sm text-gray-600 w-8 text-right">{distribution[star]}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
