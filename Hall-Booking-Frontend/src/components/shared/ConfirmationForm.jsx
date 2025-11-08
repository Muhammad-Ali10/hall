"use client"

import { useState } from "react"

export default function ConfirmationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    specialRequests: "",
    nameOnCard: "",
    creditCardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
    billingFirstName: "",
    billingLastName: "",
    billingPhoneNumber: "",
    billingEmailAddress: "",
    country: "",
    state: "",
    postalCode: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Your Details Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-[#23284C] mb-6">Your details</h2>

        <div className="space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
          </div>

          {/* Special Requests */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Special requests to hotel</label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
              placeholder=""
            />
          </div>
        </div>
      </div>

      {/* Payment Information Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-[#23284C] mb-6">Payment Information</h2>

        <div className="space-y-6">
          {/* Card Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name on card</label>
              <input
                type="text"
                name="nameOnCard"
                value={formData.nameOnCard}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Credit Card Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="creditCardNumber"
                value={formData.creditCardNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
          </div>

          {/* Expiration and CVV */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expiration Date <span className="text-red-500">*</span>
              </label>
              <select
                name="expirationMonth"
                value={formData.expirationMonth}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
              >
                <option value="">Month</option>
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {String(i + 1).padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
              <select
                name="expirationYear"
                value={formData.expirationYear}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
              >
                <option value="">Year</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = new Date().getFullYear() + i
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  )
                })}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CVV/CVC <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
                maxLength="4"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Billing Address Section */}
      <div className="bg-white p-6 md:p-8 rounded-lg border border-gray-200">
        <h2 className="text-xl font-bold text-[#23284C] mb-6">Billing Address</h2>

        <div className="space-y-6">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">First name</label>
              <input
                type="text"
                name="billingFirstName"
                value={formData.billingFirstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Last name</label>
              <input
                type="text"
                name="billingLastName"
                value={formData.billingLastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
          </div>

          {/* Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                name="billingPhoneNumber"
                value={formData.billingPhoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="billingEmailAddress"
                value={formData.billingEmailAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
          </div>

          {/* Country, State, Postal */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
              >
                <option value="">Country</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="in">India</option>
                <option value="sg">Singapore</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State/Province</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Postal (ZIP) Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#FF6A28]"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#FF6A28] text-white font-bold py-3 px-12 rounded hover:opacity-90 transition w-full md:w-auto"
        >
          Confirm & Proceed
        </button>
      </div>
    </form>
  )
}
