export default function SearchFilters() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {/* Location */}
        <div className="flex items-center gap-3">
          <span className="text-[#23284C] text-xl">📍</span>
          <div className="flex-1">
            <label className="text-[#23284C] text-sm font-semibold block mb-1">Location for your event</label>
            <input type="text" placeholder="Singapore" className="w-full text-[#23284C] font-medium outline-none" />
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3">
          <span className="text-[#23284C] text-xl">💰</span>
          <div className="flex-1">
            <label className="text-[#23284C] text-sm font-semibold block mb-1">Price</label>
            <input type="text" placeholder="$1000 - $5000" className="w-full text-[#23284C] font-medium outline-none" />
          </div>
        </div>

        {/* Check out */}
        <div className="flex items-center gap-3">
          <span className="text-[#23284C] text-xl">⭐</span>
          <div className="flex-1">
            <label className="text-[#23284C] text-sm font-semibold block mb-1">Check out</label>
            <div className="text-[#23284C] font-medium text-sm">⭐⭐⭐⭐⭐ 5.0</div>
          </div>
        </div>

        {/* Capacity */}
        <div className="flex items-center gap-3">
          <span className="text-[#23284C] text-xl">👥</span>
          <div className="flex-1">
            <label className="text-[#23284C] text-sm font-semibold block mb-1">Capacity</label>
            <input type="text" placeholder="500 - 1000" className="w-full text-[#23284C] font-medium outline-none" />
          </div>
        </div>
      </div>

      {/* Book Now Button */}
      <div className="flex justify-end mt-6">
        <button className="bg-[#FF6A28] text-white px-8 py-3 rounded-lg font-bold hover:opacity-90 transition">
          Book Now
        </button>
      </div>
    </div>
  )
}
