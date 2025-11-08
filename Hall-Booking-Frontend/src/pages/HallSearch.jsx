"use client"

import { useState, useMemo } from "react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import SearchBar from "@/components/shared/search-bar"
import FilterSidebar from "@/components/shared/filter-sidebar"
import HotelResultCard from "@/components/shared/hotel-result-card"

export default function SearchPage() {
  const [filters, setFilters] = useState({
    priceRange: [],
    sortBy: "low-to-high",
  })
  const [searchQuery, setSearchQuery] = useState("")

  // Dummy hotel data with varied prices
  const hotels = [
    {
      id: 1,
      name: "The Fullerton Hotel Singapore",
      image: "/luxury-hotel-fullerton.jpg",
      badge: "4.8",
      description:
        "With a stay at The Fullerton Hotel Singapore, you'll be centrally located in Singapore, steps from Cavenagh Bridge and Anderson Bridge. This 5-star hotel is close to Chinatown Heritage Center and Universal Studios Singapore.",
      location: "1 Fullerton Square",
      amenities: ["wifi", "restaurant", "pool"],
      price: 150,
      taxes: "Taxes incl.",
    },
    {
      id: 2,
      name: "Marina Bay Sands Hotel",
      image: "/luxury-hotel-interior.jpg",
      badge: "4.9",
      description:
        "Experience luxury at Marina Bay Sands with stunning views of Singapore's skyline. This iconic hotel offers world-class amenities and exceptional service for an unforgettable stay.",
      location: "10 Bayfront Avenue",
      amenities: ["wifi", "restaurant", "pool"],
      price: 350,
      taxes: "Taxes incl.",
    },
    {
      id: 3,
      name: "Raffles Hotel Singapore",
      image: "/luxury-hotel-ballroom.jpg",
      badge: "4.7",
      description:
        "A legendary hotel since 1887, Raffles Singapore combines colonial charm with modern luxury. Located in the heart of Singapore's historic district.",
      location: "1 Beach Road",
      amenities: ["wifi", "restaurant", "pool"],
      price: 750,
      taxes: "Taxes incl.",
    },
    {
      id: 4,
      name: "Mandarin Oriental Singapore",
      image: "/luxury-hotel-lounge.jpg",
      badge: "4.8",
      description:
        "Discover elegance and sophistication at Mandarin Oriental Singapore. Featuring premium rooms with panoramic views and world-class dining.",
      location: "6 Raffles Avenue",
      amenities: ["wifi", "restaurant", "pool"],
      price: 1500,
      taxes: "Taxes incl.",
    },
    {
      id: 5,
      name: "The Ritz-Carlton Singapore",
      image: "/luxury-hotel-dining.jpg",
      badge: "4.9",
      description:
        "Experience ultimate luxury at The Ritz-Carlton Singapore with impeccable service and stunning Marina Bay views. Perfect for discerning travelers.",
      location: "7 Raffles Avenue",
      amenities: ["wifi", "restaurant", "pool"],
      price: 2500,
      taxes: "Taxes incl.",
    },
    {
      id: 6,
      name: "Sentosa Resort & Spa",
      image: "/luxury-hotel-fullerton.jpg",
      badge: "4.6",
      description:
        "Escape to paradise at Sentosa Resort & Spa. Enjoy pristine beaches, world-class spa facilities, and tropical gardens.",
      location: "Sentosa Island",
      amenities: ["wifi", "restaurant", "pool"],
      price: 450,
      taxes: "Taxes incl.",
    },
  ]

  const filteredHotels = useMemo(() => {
    let result = hotels

    // Filter by search query
    if (searchQuery.trim()) {
      result = result.filter(
        (hotel) =>
          hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    // Filter by price range
    if (filters.priceRange.length > 0) {
      result = result.filter((hotel) => {
        return filters.priceRange.some((range) => {
          const [min, max] = range.split("-").map(Number)
          return hotel.price >= min && hotel.price <= max
        })
      })
    }

    // Sort by price
    if (filters.sortBy === "low-to-high") {
      result.sort((a, b) => a.price - b.price)
    } else if (filters.sortBy === "high-to-low") {
      result.sort((a, b) => b.price - a.price)
    }

    return result
  }, [filters, searchQuery])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBar />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>

          {/* Results */}
          <div className="md:col-span-3">
            <h2 className="text-2xl font-bold mb-8" style={{ color: "#000000" }}>
              Singapore: <span style={{ color: "#000000" }}>{filteredHotels.length} results found</span>
            </h2>

            {filteredHotels.length > 0 ? (
              <div className="space-y-6">
                {filteredHotels.map((hotel) => (
                  <HotelResultCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No hotels found matching your filters. Try adjusting your search.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
