"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold" style={{ color: "#FF6A28" }}>
              SAMBRAMA
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4"
                />
              </svg>
              <span className="text-sm">
                List your property
                <br />
                Start earning in 30 mins
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5.581m0 0H9m5.581 0a2 2 0 100-4 2 2 0 000 4m0 0a2 2 0 100-4 2 2 0 000 4"
                />
              </svg>
              <span className="text-sm">
                List your property
                <br />
                Start earning in 30 mins
              </span>
            </div>

            <div className="flex items-center gap-2 text-gray-700 hover:text-gray-900 cursor-pointer">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
                />
              </svg>
              <span className="text-sm">
                0124 525988
                <br />
                Call us to book now
              </span>
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              className="px-6 py-2 border-2 rounded-lg font-semibold transition-colors"
              style={{ color: "#FF6A28", borderColor: "#FF6A28" }}
            >
              Signup
            </button>
            <button
              className="px-6 py-2 rounded-lg font-semibold text-white transition-colors"
              style={{ backgroundColor: "#FF6A28" }}
            >
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <div className="flex items-center gap-2 text-gray-700 text-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4"
                />
              </svg>
              <span>List your property - Start earning in 30 mins</span>
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 px-4 py-2 border-2 rounded-lg font-semibold"
                style={{ color: "#FF6A28", borderColor: "#FF6A28" }}
              >
                Signup
              </button>
              <button
                className="flex-1 px-4 py-2 rounded-lg font-semibold text-white"
                style={{ backgroundColor: "#FF6A28" }}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
