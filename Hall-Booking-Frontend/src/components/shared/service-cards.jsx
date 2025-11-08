const servicesData = {
  Decoration: [
    {
      id: 1,
      image: "/luxury-purple-wedding-stage-decoration.jpg",
      title: "Luxury and elegant wedding",
      price: 500,
      rating: 5.0,
      description:
        "Luxury and elegant wedding backdrop decoration wedding reception stage decoration ideas Stay tuned with us for more quality DIY art and craft videos.",
      buttonText: "Call now",
      buttonVariant: "outline",
    },
    {
      id: 2,
      image: "/white-gold-floral-wedding-arch.jpg",
      title: "Luxury and elegant wedding",
      price: 500,
      rating: 5.0,
      description:
        "Luxury and elegant wedding backdrop decoration wedding reception stage decoration ideas Stay tuned with us for more quality DIY art and craft videos.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
    {
      id: 3,
      image: "/floral-chandelier-elegant-ballroom-decoration.jpg",
      title: "Luxury and elegant wedding",
      price: 500,
      rating: 5.0,
      description:
        "Luxury and elegant wedding backdrop decoration wedding reception stage decoration ideas Stay tuned with us for more quality DIY art and craft videos.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
  ],
  Catering: [
    {
      id: 4,
      image: "/gourmet-indian-multi-cuisine-buffet.jpg",
      title: "Premium Multi-Cuisine Catering",
      price: 800,
      rating: 4.8,
      description:
        "Experience world-class culinary excellence with our premium multi-cuisine catering service. From Indian classics to Continental delights.",
      buttonText: "Call now",
      buttonVariant: "outline",
    },
    {
      id: 5,
      image: "/vegetarian-gourmet-plated-cuisine.jpg",
      title: "Vegetarian Gourmet Catering",
      price: 600,
      rating: 4.9,
      description:
        "Exquisite vegetarian cuisine prepared by award-winning chefs. Perfect for weddings and corporate events with diverse dietary preferences.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
    {
      id: 6,
      image: "/fresh-seafood-platter-fine-dining.jpg",
      title: "Seafood Delicacy Catering",
      price: 950,
      rating: 5.0,
      description:
        "Fresh seafood specialties and international dishes. Our expert chefs ensure every bite is a memorable culinary experience.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
  ],
  Photography: [
    {
      id: 7,
      image: "/professional-wedding-couple-photography.jpg",
      title: "Professional Wedding Photography",
      price: 1200,
      rating: 4.9,
      description:
        "Capture your special moments with our award-winning wedding photographers. We provide candid, traditional, and cinematic shots.",
      buttonText: "Call now",
      buttonVariant: "outline",
    },
    {
      id: 8,
      image: "/pre-wedding-photoshoot-couple-romantic.jpg",
      title: "Pre-Wedding Photoshoot Package",
      price: 400,
      rating: 4.8,
      description:
        "Create magical pre-wedding memories with stunning locations and professional editing. Includes 4-6 hours of shooting and 200+ edited photos.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
    {
      id: 9,
      image: "/corporate-event-professional-photography.jpg",
      title: "Corporate Event Photography",
      price: 700,
      rating: 4.7,
      description:
        "Professional documentation of your corporate events, conferences, and product launches with polished, magazine-quality results.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
  ],
  "Makeup Artists": [
    {
      id: 10,
      image: "/bridal-makeup-professional-wedding-makeup.jpg",
      title: "Bridal Makeup & Hair Styling",
      price: 350,
      rating: 5.0,
      description:
        "Look your absolute best on your wedding day with our expert bridal makeup and hair styling services using premium products.",
      buttonText: "Call now",
      buttonVariant: "outline",
    },
    {
      id: 11,
      image: "/party-makeup-artist-makeup-application.jpg",
      title: "Party & Event Makeup",
      price: 200,
      rating: 4.9,
      description:
        "Professional party makeup for all occasions. We specialize in contemporary, traditional, and experimental looks that complement your outfit.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
    {
      id: 12,
      image: "/makeup-for-photoshoot-camera-ready-makeup.jpg",
      title: "Makeup for Photoshoots",
      price: 250,
      rating: 4.8,
      description:
        "Camera-ready makeup with HD coverage. Perfect for photoshoots, modeling, or events that will be heavily photographed.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
  ],
  "Travel & Accommodation": [
    {
      id: 13,
      image: "/luxury-5-star-hotel-resort-suite.jpg",
      title: "5-Star Hotel Packages",
      price: 2500,
      rating: 5.0,
      description:
        "Luxury 5-star hotel accommodations with premium amenities. Perfect for guest stays during your wedding or corporate event.",
      buttonText: "Call now",
      buttonVariant: "outline",
    },
    {
      id: 14,
      image: "/premium-airport-transfer-luxury-car.jpg",
      title: "Airport Transfer & Transportation",
      price: 300,
      rating: 4.9,
      description:
        "Comfortable and reliable airport transfers, local transportation, and tour arrangements for you and your guests.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
    {
      id: 15,
      image: "/destination-wedding-resort-tropical-beach.jpg",
      title: "Destination Wedding Packages",
      price: 5000,
      rating: 5.0,
      description:
        "Complete destination wedding packages including venue, accommodation, travel, and coordination for unforgettable celebrations.",
      buttonText: "Book Now",
      buttonVariant: "solid",
    },
  ],
}

export default function ServiceCards({ activeCategory = "Decoration" }) {
  const services = servicesData[activeCategory] || servicesData.Decoration

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
        >
          {/* Image */}
          <div className="relative h-48 md:h-56 overflow-hidden rounded-t-2xl">
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            {/* Title and Price */}
            <div className="flex justify-between items-start gap-2 mb-2">
              <h3 className="text-[#23284C] font-bold text-lg md:text-xl leading-tight">{service.title}</h3>
              <span className="text-[#FF6A28] font-bold text-lg md:text-xl whitespace-nowrap">${service.price}</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1 mb-3">
              <span className="text-[#FF6A28]">⭐⭐⭐⭐⭐</span>
              <span className="text-[#23284C] font-semibold text-sm">{service.rating}</span>
            </div>

            {/* Description */}
            <p className="text-[#23284C] text-sm leading-relaxed mb-5">{service.description}</p>

            {/* Button */}
            <button
              className={`w-full py-3 rounded-lg font-bold transition ${
                service.buttonVariant === "solid"
                  ? "bg-[#FF6A28] text-white hover:opacity-90"
                  : "border-2 border-[#FF6A28] text-[#FF6A28] hover:bg-[#FF6A28] hover:text-white"
              }`}
            >
              {service.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
