"use client"

import { useState } from "react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import SearchBar from "@/components/shared/search-bar"
import HotelGallery from "@/components/shared/hotel-gallery"
import HotelDetails from "@/components/shared/hotel-details"
import HotelHighlights from "@/components/shared/hotel-highlights"
import BookingDetails from "@/components/shared/booking-details"
import RatingDistribution from "@/components/shared/rating-distribution"
import ReviewsSection from "@/components/shared/reviews-section"
import HotelMap from "@/components/shared/hotel-map"

export default function HotelDetailPage() {
  const [selectedDate, setSelectedDate] = useState("")

  const hotelData = {
    id: 1,
    name: "The Fullerton Hotel Singapore",
    rating: 5,
    reviews: 52,
    location: "1 Fullerton Square, 049178 Singapore, Singapore",
    description: `With a stay at The Fullerton Hotel Singapore, you'll be centrally located in Singapore, steps from Cavenagh Bridge and Anderson Bridge. This 5-star hotel is close to Chinatown Heritage Center and Universal Studios Singapore. Make yourself at home in one of the 400 spacious guestrooms.

Pamper yourself with a visit to the spa, which offers massages, body treatments, and facials. If you're looking for recreational opportunities, you'll find an outdoor pool and a fitness center. The Colonial hotel also features complimentary wireless internet access, satellite programming provides entertainment. Private dining can be arranged. Guests can get to nearby shops on the complimentary shuttle. Drop a line at one of the hotel's 5 restaurants, or stay in and take advantage of 24-hour room service. Quench your thirst with your favorite drink at a bar/lounge. Buffet breakfasts are available for a fee.

Guests can get to nearby shops on the complimentary shuttle. Drop a line at one of the hotel's 5 restaurants, or stay in and take advantage of 24-hour room service. Quench your thirst with your favorite drink at a bar/lounge. Buffet breakfasts are available for a fee. A business center and meeting rooms. A roundtrip airport shuttle is provided for a surcharge (available 24 hours), and free self-parking is available onsite.`,
    highlights: [
      "The location of the hotel has a rating score of 9/10",
      "This hotel has a wellness rating score of 9/10",
      "The WiFi service this hotel provides has a rating score of 8/10",
      "The staff's service has an overall rating of 9/10",
    ],
    images: [
      "/luxury-ballroom.png",
      "/luxury-hotel-dining-room.jpg",
      "/luxury-hotel-bedroom-suite.jpg",
      "/luxury-hotel-spa.png",
    ],
    price: 2024,
    ratingDistribution: {
      5: 35,
      4: 12,
      3: 3,
      2: 1,
      1: 1,
    },
  }

  const reviews = [
    {
      id: 1,
      author: "Courtney Henry",
      avatar: "/diverse-user-avatars.png",
      rating: 5,
      date: "2 months ago",
      text: "Consequat velit qui adipisicing sunt do reprehenderit ad. Minim tempor laborum exercitation. Ullamco tempor adipisicing et voluptate duis sit esse.",
    },
    {
      id: 2,
      author: "Cameron Williamson",
      avatar: "/diverse-user-avatars.png",
      rating: 4,
      date: "2 months ago",
      text: "Consequat velit qui adipisicing sunt do reprehenderit ad. Minim tempor laborum exercitation. Ullamco tempor adipisicing et voluptate duis sit esse.",
    },
    {
      id: 3,
      author: "Jane Cooper",
      avatar: "/diverse-user-avatars.png",
      rating: 5,
      date: "2 mins ago",
      text: "Ullamco tempor adipisicing et voluptate duis sit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      author: "Jane Cooper",
      avatar: "/diverse-user-avatars.png",
      rating: 4,
      date: "2 mins ago",
      text: "Ullamco tempor adipisicing et voluptate duis sit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery and Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column - Gallery and Details */}
          <div className="lg:col-span-2">
            <HotelGallery images={hotelData.images} />
            <HotelDetails hotel={hotelData} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <HotelHighlights highlights={hotelData.highlights} />
            <BookingDetails price={hotelData.price} />
          </div>
        </div>

        {/* Rating and Reviews Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <ReviewsSection reviews={reviews} />
          </div>
          <div className="lg:col-span-1">
            <RatingDistribution
              rating={hotelData.rating}
              reviews={hotelData.reviews}
              distribution={hotelData.ratingDistribution}
            />
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <HotelMap location={hotelData.location} />
        </div>
      </main>

      <Footer />
    </div>
  )
}
