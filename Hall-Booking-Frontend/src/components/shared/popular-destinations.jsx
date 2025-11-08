"use client"

const destinations = [
  {
    id: 1,
    name: "Spain",
    image: "/spain-architecture-historic-building.jpg",
    size: "large",
  },
  {
    id: 2,
    name: "Mumbai",
    image: "/mumbai-beach-resort-hotel.jpg",
    size: "small",
  },
  {
    id: 3,
    name: "Hyderabad",
    image: "/hyderabad-luxury-hotel-pool.jpg",
    size: "small",
  },
  {
    id: 4,
    name: "Delhi",
    image: "/delhi-luxury-event-venue-decorated.jpg",
    size: "large",
  },
  {
    id: 5,
    name: "Ahmedabad",
    image: "/ahmedabad-luxury-hotel-interior.jpg",
    size: "small",
  },
  {
    id: 6,
    name: "Gujarat",
    image: "/gujarat-luxury-ballroom-event-space.jpg",
    size: "small",
  },
]

export default function PopularDestinations() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#23284C" }}>
            Popular destinations
          </h2>
          <div className="w-24 h-1 rounded-full" style={{ backgroundColor: "#FF6A28" }}></div>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-max">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className={`relative rounded-lg overflow-hidden cursor-pointer group ${
                dest.size === "large" ? "lg:col-span-1 lg:row-span-2" : ""
              }`}
              style={{
                height: dest.size === "large" ? "400px" : "200px",
              }}
            >
              {/* Image */}
              <img
                src={dest.image || "/placeholder.svg"}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors"></div>

              {/* Label */}
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 rounded-lg">
                <p className="font-semibold" style={{ color: "#23284C" }}>
                  {dest.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
