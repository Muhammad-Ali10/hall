"use client"

import Header from "@/components/shared/Header"
import BookingConfirmation from "@/components/shared/BookingConfirmation"
import Footer from "@/components/shared/Footer"

export default function BookingDetails() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <BookingConfirmation />
      <Footer />
    </div>
  )
}
