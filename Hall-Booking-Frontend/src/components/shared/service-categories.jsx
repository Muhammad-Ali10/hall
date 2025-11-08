"use client"

export default function ServiceCategories({ activeCategory, setActiveCategory }) {
  const categories = ["Decoration", "Catering", "Photography", "Makeup Artists", "Travel & Accommodation"]

  return (
    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-6 py-3 rounded-full font-bold transition whitespace-nowrap ${
            activeCategory === category
              ? "bg-[#FF6A28] text-white"
              : "border-2 border-[#FF6A28] text-[#FF6A28] hover:bg-[#FF6A28] hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
