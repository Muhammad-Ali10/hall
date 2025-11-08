import { MapPin, Star, Wifi, FileText, ParkingCircle } from "lucide-react"

export default function BookingDetails() {
  return (
    <div className="space-y-6">
      {/* Hotel Card */}
      <div className="bg-white rounded-lg overflow-hidden border border-gray-200">
        {/* Hotel Image */}
        <div className="h-48 bg-gray-300 rounded-t-lg">
          <img
            src="/luxury-hotel-room.png"
            alt="The Fullerton Hotel Singapore"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hotel Info */}
        <div className="p-6">
          <h3 className="text-lg font-bold text-[#23284C] mb-2">The Fullerton Hotel Singapore</h3>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-gray-600">(502 Reviews)</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-2 mb-4">
            <MapPin size={18} className="text-[#FF6A28] mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-700">Fullerton Square, 04019 Singapore, Singapore</span>
          </div>

          {/* Amenities */}
          <div className="space-y-2 border-t border-gray-200 pt-4">
            <div className="flex items-center gap-2">
              <Wifi size={18} className="text-[#FF6A28]" />
              <span className="text-sm text-gray-700">Free Wifi</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText size={18} className="text-[#FF6A28]" />
              <span className="text-sm text-gray-700">Front Desk</span>
            </div>
            <div className="flex items-center gap-2">
              <ParkingCircle size={18} className="text-[#FF6A28]" />
              <span className="text-sm text-gray-700">Parking Garage</span>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-[#23284C] mb-4">Your booking details</h3>

        <div className="space-y-4">
          {/* Check-in */}
          <div className="border-b border-gray-200 pb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Check-in</span>
              <span className="text-sm font-medium text-gray-700">Check-out</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-[#23284C]">Tue, 09 Jul, 2024</p>
                <p className="text-xs text-gray-500">From 12:00 PM</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#23284C]">Wed, 10 Jul, 2024</p>
                <p className="text-xs text-gray-500">Until 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Room Details */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Deluxe Room</p>
            <p className="text-sm text-gray-600">1 night, 2 adults, 0 children</p>
          </div>
        </div>
      </div>

      {/* Pricing Summary */}
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold text-[#23284C] mb-4">Pricing Summary</h3>

        <div className="space-y-3 border-b border-gray-200 pb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-700">1 room x 1 night</span>
            <span className="font-semibold text-gray-900">$$$</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-700">Tax and service fees</span>
            <span className="font-semibold text-gray-900">$5</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-base font-bold text-[#23284C]">Total</span>
          <span className="text-base font-bold text-[#FF6A28]">$$$$</span>
        </div>
      </div>
    </div>
  )
}
