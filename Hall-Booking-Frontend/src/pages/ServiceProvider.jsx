"use client"

import { useState } from "react"
import Header from "@/components/shared/header"
import SearchFilters from "@/components/shared/search-filters"
import ServiceCategories from "@/components/shared/service-categories"
import ServiceCards from "@/components/shared/service-cards"
import Footer from "@/components/shared/footer"

export default function ServiceProvider() {
  const [activeCategory, setActiveCategory] = useState("Decoration")

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Orange banner with search section */}
      <section className="bg-[#FF6A28] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SearchFilters />
        </div>
      </section>

      {/* Service Categories */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCategories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>
      </section>

      {/* Service Cards - Dynamic based on active category */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceCards activeCategory={activeCategory} />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
