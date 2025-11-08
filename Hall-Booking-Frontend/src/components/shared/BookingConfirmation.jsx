import ConfirmationForm from "@/components/shared/ConfirmationForm"
import BookingDetails from "@/components/shared/booking-details"

export default function BookingConfirmation() {
  return (
    <section className="bg-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-[#23284C] mb-12">Confirm Booking</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <ConfirmationForm />
          </div>

          {/* Booking Details Section */}
          <div className="lg:col-span-1">
            <BookingDetails />
          </div>
        </div>
      </div>
    </section>
  )
}
