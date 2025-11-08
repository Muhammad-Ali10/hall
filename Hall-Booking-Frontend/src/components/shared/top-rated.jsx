"use client"

import { useRef, useEffect } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"

const hotels = [
  {
    id: 1,
    name: "The Spectator Hotel",
    price: "$2024",
    type: "Night",
    address: "123 Street, City, Country",
    image: "/luxury-hotel-building-architecture.jpg",
  },
  {
    id: 2,
    name: "Marseilles Beachfront Hotel",
    price: "$2024",
    type: "Night",
    address: "123 Street, City, Country",
    image: "/beachfront-resort-with-pool.jpg",
  },
  {
    id: 3,
    name: "Andronis Boutique Hotel",
    price: "$2024",
    type: "Night",
    address: "123 Street, City, Country",
    image: "/white-boutique-hotel-luxury.jpg",
  },
  {
    id: 4,
    name: "Waldorf Astoria Los Cabos",
    price: "$2024",
    type: "Night",
    address: "123 Street, City, Country",
    image: "/luxury-resort-beach-pool.jpg",
  },
  {
    id: 5,
    name: "Deco Boutique Hotel",
    price: "$2024",
    type: "Night",
    address: "123 Street, City, Country",
    image: "/modern-boutique-hotel-building.jpg",
  },
]

export default function TopRated() {
  const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper
      swiper.params.navigation.prevEl = prevRef.current
      swiper.params.navigation.nextEl = nextRef.current
      swiper.navigation.init()
      swiper.navigation.update()
    }
  }, [])

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#23284C" }}>
            Top Rated
          </h2>
          <div className="w-24 h-1 rounded-full" style={{ backgroundColor: "#FF6A28" }}></div>
        </div>

        {/* Swiper Carousel */}
        <div className="relative group">
          <Swiper
            ref={swiperRef}
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            loop={true}
            className="pb-4"
          >
            {hotels.map((hotel) => (
              <SwiperSlide key={hotel.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={hotel.image || "/placeholder.svg"}
                      alt={hotel.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2" style={{ color: "#23284C" }}>
                      {hotel.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="font-bold" style={{ color: "#FF6A28" }}>
                        {hotel.price}
                      </span>
                      <span className="text-gray-600 text-sm">{hotel.type}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{hotel.address}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button
            ref={prevRef}
            className="absolute left-0 top-1/3 -translate-y-1/2 -translate-x-4 md:-translate-x-2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
            style={{ backgroundColor: "#FF6A28" }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-white" />
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/3 -translate-y-1/2 translate-x-4 md:translate-x-2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all z-10 opacity-0 group-hover:opacity-100 md:opacity-100"
            style={{ backgroundColor: "#FF6A28" }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
