"use client"
import { Search } from "lucide-react"

export default function FilterSidebar({ filters, setFilters, searchQuery, setSearchQuery }) {
  const priceRanges = [
    { label: "$ 0 - $ 200", value: "0-200", count: 200 },
    { label: "$ 200 - $ 500", value: "200-500", count: 100 },
    { label: "$ 500 - $ 1,000", value: "500-1000", count: 15 },
    { label: "$ 1,000 - $ 2,000", value: "1000-2000", count: 50 },
    { label: "$ 2,000 - $ 5,000", value: "2000-5000", count: 230 },
  ]

  const handlePriceChange = (value) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: prev.priceRange.includes(value)
        ? prev.priceRange.filter((p) => p !== value)
        : [...prev.priceRange, value],
    }))
  }

  const handleSearch = () => {
    // Search is now handled in the parent component via useMemo
    console.log("[v0] Search triggered for:", searchQuery)
  }

  return (
    <div className="space-y-6">
      {/* Search Box */}
      <div>
        <label className="text-sm font-semibold text-gray-700 mb-3 block">Search by hotel name / area</label>
        <div className="relative">
          <input
            type="text"
            placeholder="eg. The Fullerton Hotel"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-md text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
            style={{ backgroundColor: "#FFFFFF" }}
          />
          <button
            onClick={handleSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-md hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#FF6A28" }}
          >
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Filter Results */}
      <div>
        <h3 className="text-lg font-bold text-white mb-4 p-3 rounded-md" style={{ backgroundColor: "#FF6A28" }}>
          Filter results
        </h3>

        {/* Price Range */}
        <div className="mb-6">
          <h4
            className="font-semibold text-gray-800 mb-3 p-2 rounded-md"
            style={{ backgroundColor: "#FF6A28", color: "#FFFFFF" }}
          >
            Price Range
          </h4>
          <div className="space-y-2">
            {priceRanges.map((range) => (
              <label
                key={range.value}
                className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors"
              >
                <input
                  type="checkbox"
                  checked={filters.priceRange.includes(range.value)}
                  onChange={() => handlePriceChange(range.value)}
                  className="w-4 h-4 rounded border-gray-300 cursor-pointer accent-orange-500"
                />
                <span className="text-gray-700 flex-1">{range.label}</span>
                <span className="text-gray-500 text-sm">{range.count}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Sorting */}
        <div>
          <h4
            className="font-semibold text-gray-800 mb-3 p-2 rounded-md"
            style={{ backgroundColor: "#FF6A28", color: "#FFFFFF" }}
          >
            Price Sorting
          </h4>
          <div className="space-y-2">
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors">
              <input
                type="radio"
                name="sort"
                value="low-to-high"
                checked={filters.sortBy === "low-to-high"}
                onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
                className="w-4 h-4 cursor-pointer accent-orange-500"
              />
              <span className="text-gray-700">Low to high</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-colors">
              <input
                type="radio"
                name="sort"
                value="high-to-low"
                checked={filters.sortBy === "high-to-low"}
                onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value }))}
                className="w-4 h-4 cursor-pointer accent-orange-500"
              />
              <span className="text-gray-700">High to low</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
