"use client"

import Header from "@/components/shared/header"
import Hero from "@/components/shared/hero"
import TopRated from "@/components/shared/top-rated"
import PopularDestinations from "@/components/shared/popular-destinations"
import Footer from "@/components/shared/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TopRated />
      <PopularDestinations />
      <Footer />
    </main>
  )
}
