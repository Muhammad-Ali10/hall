export default function BookingDetails({ price }) {
  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-64">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Your booking details</h3>
      <button
        className="w-full py-3 rounded-lg font-semibold text-white transition-colors hover:opacity-90"
        style={{ backgroundColor: "#FF6A28" }}
      >
        Book Now
      </button>
    </div>
  )
}
