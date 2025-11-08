"use client"

import { Facebook, Linkedin, MessageCircle, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 md:py-16" style={{ backgroundColor: "#23284C" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6" style={{ color: "#FF6A28" }}>
            SAMBRAMA
          </h3>
          <p className="text-gray-300 max-w-md leading-relaxed">
            With a stay at The Fullerton Hotel Singapore, you'll be centrally located in Singapore, steps from Cavenagh
            Bridge and Anderson Bridge.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">© 2025 Ascenda. All rights reserved.</p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
