import { MoreVertical } from "lucide-react"

export default function ReviewsSection({ reviews }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img src={review.avatar || "/placeholder.svg"} alt={review.author} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-semibold text-gray-900">{review.author}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} style={{ color: "#FF6A28" }} className="text-sm">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">• {review.date}</span>
                  </div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={20} />
              </button>
            </div>
            <p className="text-gray-700 text-sm">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
