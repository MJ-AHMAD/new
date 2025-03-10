"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"

interface AccommodationInfo {
  id: string
  title: string
  price: string
  category: string
  location: string
}

const accommodationsInfo: Record<string, AccommodationInfo> = {
  // Makkah Economy
  "guest-house": {
    id: "guest-house",
    title: "Guest House Hotel",
    price: "From £80 per night",
    category: "Economy",
    location: "Makkah",
  },
  "makkah-al-aziziah": {
    id: "makkah-al-aziziah",
    title: "Makkah Al Aziziah",
    price: "From £95 per night",
    category: "Economy",
    location: "Makkah",
  },
  "elaf-kinda": {
    id: "elaf-kinda",
    title: "Elaf Kinda Hotel",
    price: "From £120 per night",
    category: "Economy",
    location: "Makkah",
  },

  // Makkah Mid-range
  "novotel-thakher": {
    id: "novotel-thakher",
    title: "Novotel Thakher Makkah",
    price: "From £150 per night",
    category: "Mid-range",
    location: "Makkah",
  },
  movenpick: {
    id: "movenpick",
    title: "Mövenpick Hotel & Residence Hajar Tower Makkah",
    price: "From £180 per night",
    category: "Mid-range",
    location: "Makkah",
  },
  "voco-makkah": {
    id: "voco-makkah",
    title: "Voco® Makkah",
    price: "From £165 per night",
    category: "Mid-range",
    location: "Makkah",
  },
  "midan-hotel": {
    id: "midan-hotel",
    title: "Midan Hotel",
    price: "From £175 per night",
    category: "Mid-range",
    location: "Makkah",
  },

  // Makkah Luxury
  "al-safwah": {
    id: "al-safwah",
    title: "Al Safwah Hotel",
    price: "From £250 per night",
    category: "Luxury",
    location: "Makkah",
  },
  raffles: {
    id: "raffles",
    title: "Raffles Palace",
    price: "From £350 per night",
    category: "Luxury",
    location: "Makkah",
  },
  fairmont: {
    id: "fairmont",
    title: "Fairmont Makkah",
    price: "From £300 per night",
    category: "Luxury",
    location: "Makkah",
  },
  intercontinental: {
    id: "intercontinental",
    title: "InterContinental Dar Al Tawhid",
    price: "From £280 per night",
    category: "Luxury",
    location: "Makkah",
  },
  "hilton-suites": {
    id: "hilton-suites",
    title: "Hilton Suites Makkah",
    price: "From £270 per night",
    category: "Luxury",
    location: "Makkah",
  },
  swissotel: {
    id: "swissotel",
    title: "Swissotel Makkah",
    price: "From £290 per night",
    category: "Luxury",
    location: "Makkah",
  },
  conrad: {
    id: "conrad",
    title: "Conrad Makkah",
    price: "From £310 per night",
    category: "Luxury",
    location: "Makkah",
  },
  "hyatt-regency": {
    id: "hyatt-regency",
    title: "Jabal Omar Hyatt Regency",
    price: "From £320 per night",
    category: "Luxury",
    location: "Makkah",
  },

  // Special packages
  "umrah-accommodation": {
    id: "umrah-accommodation",
    title: "Umrah Special Accommodation Package",
    price: "From £600 for 10 nights",
    category: "Special Package",
    location: "Makkah & Madinah",
  },
  "hajj-accommodation": {
    id: "hajj-accommodation",
    title: "Hajj Special Accommodation Package",
    price: "From £2,500 for Hajj period",
    category: "Special Package",
    location: "Makkah & Madinah",
  },

  // Madinah Economy
  "madinah-guest-house": {
    id: "madinah-guest-house",
    title: "Madinah Guest House",
    price: "From £70 per night",
    category: "Economy",
    location: "Madinah",
  },
  "madinah-al-ansar": {
    id: "madinah-al-ansar",
    title: "Al Ansar Hotel",
    price: "From £85 per night",
    category: "Economy",
    location: "Madinah",
  },
  "madinah-dar-al-taqwa": {
    id: "madinah-dar-al-taqwa",
    title: "Dar Al Taqwa Hotel",
    price: "From £110 per night",
    category: "Economy",
    location: "Madinah",
  },

  // Madinah Mid-range
  "madinah-novotel": {
    id: "madinah-novotel",
    title: "Novotel Madinah",
    price: "From £140 per night",
    category: "Mid-range",
    location: "Madinah",
  },
  "madinah-movenpick": {
    id: "madinah-movenpick",
    title: "Mövenpick Hotel Madinah",
    price: "From £160 per night",
    category: "Mid-range",
    location: "Madinah",
  },
  "madinah-crowne-plaza": {
    id: "madinah-crowne-plaza",
    title: "Crowne Plaza Madinah",
    price: "From £155 per night",
    category: "Mid-range",
    location: "Madinah",
  },
  "madinah-millennium": {
    id: "madinah-millennium",
    title: "Millennium Madinah Airport",
    price: "From £165 per night",
    category: "Mid-range",
    location: "Madinah",
  },

  // Madinah Luxury
  "madinah-oberoi": {
    id: "madinah-oberoi",
    title: "The Oberoi Madinah",
    price: "From £240 per night",
    category: "Luxury",
    location: "Madinah",
  },
  "madinah-hilton": {
    id: "madinah-hilton",
    title: "Hilton Madinah",
    price: "From £230 per night",
    category: "Luxury",
    location: "Madinah",
  },
  "madinah-marriott": {
    id: "madinah-marriott",
    title: "Marriott Madinah",
    price: "From £250 per night",
    category: "Luxury",
    location: "Madinah",
  },
  "madinah-intercontinental": {
    id: "madinah-intercontinental",
    title: "InterContinental Madinah",
    price: "From £270 per night",
    category: "Luxury",
    location: "Madinah",
  },
  "madinah-ritz-carlton": {
    id: "madinah-ritz-carlton",
    title: "The Ritz-Carlton Madinah",
    price: "From £290 per night",
    category: "Luxury",
    location: "Madinah",
  },
}

export default function BookAccommodationPage() {
  const router = useRouter()
  const accommodationInfo = accommodationsInfo["madinah-guest-house"]

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    nationality: "",
    checkInDate: "",
    checkOutDate: "",
    numberOfGuests: "1",
    numberOfRooms: "1",
    roomType: "standard",
    mealPlan: "breakfast",
    specialRequirements: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Log the form data to Vercel logs
      console.log("Accommodation booking submission:", {
        accommodation: accommodationInfo.title,
        ...formData,
        submittedAt: new Date().toISOString(),
      })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page
      router.push(`/book-accommodation/madinah-guest-house/success`)
    } catch (error) {
      console.error("Booking error:", error)
      setIsSubmitting(false)
      alert("There was an error processing your booking. Please try again.")
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://mj-ahmad.github.io/mja2025/img/logo.png"
                alt="TRUSTED-ALLY Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-bold text-xl">T-Ally Umrah Sr.</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <Link href="/packages" className="hover:text-green-200 transition-colors">
                Packages
              </Link>
              <Link href="/services" className="hover:text-green-200 transition-colors">
                Services
              </Link>
              <Link href="/about" className="hover:text-green-200 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-green-200 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Book Your Accommodation</h1>
            <p className="text-gray-600 mb-8">Fill out the form below to book {accommodationInfo.title}</p>

            <div className="bg-blue-50 p-4 rounded-lg mb-8">
              <h2 className="font-bold text-lg text-blue-800">Accommodation Details</h2>
              <p className="text-blue-700">
                {accommodationInfo.title} - {accommodationInfo.price} - {accommodationInfo.category} -{" "}
                {accommodationInfo.location}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name (as in Passport)
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Passport Number
                  </label>
                  <input
                    type="text"
                    id="passportNumber"
                    name="passportNumber"
                    value={formData.passportNumber}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
                    Nationality
                  </label>
                  <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="checkInDate"
                    name="checkInDate"
                    value={formData.checkInDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="checkOutDate"
                    name="checkOutDate"
                    value={formData.checkOutDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Guests
                  </label>
                  <select
                    id="numberOfGuests"
                    name="numberOfGuests"
                    value={formData.numberOfGuests}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                    <option value="more than 10">More than 10</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Rooms
                  </label>
                  <select
                    id="numberOfRooms"
                    name="numberOfRooms"
                    value={formData.numberOfRooms}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                    <option value="more than 10">More than 10</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                    Room Type
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="standard">Standard Room</option>
                    <option value="deluxe">Deluxe Room</option>
                    <option value="suite">Suite</option>
                    <option value="family">Family Room</option>
                    <option value="executive">Executive Room</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="mealPlan" className="block text-sm font-medium text-gray-700 mb-1">
                    Meal Plan
                  </label>
                  <select
                    id="mealPlan"
                    name="mealPlan"
                    value={formData.mealPlan}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="breakfast">Breakfast Only</option>
                    <option value="half-board">Half Board (Breakfast & Dinner)</option>
                    <option value="full-board">Full Board (All Meals)</option>
                    <option value="room-only">Room Only (No Meals)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                  Special Requirements or Questions
                </label>
                <textarea
                  id="specialRequirements"
                  name="specialRequirements"
                  value={formData.specialRequirements}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <Link href="/terms" className="text-blue-600 hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-blue-600 text-white py-3 rounded-md font-medium transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? "Processing..." : "Book Now"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

