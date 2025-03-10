"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"

interface TransportInfo {
  id: string
  title: string
  price: string
  type: string
  route: string
}

const transportInfo: Record<string, TransportInfo> = {
  // Jeddah Airport to Makkah
  "jeddah-makkah-private-car": {
    id: "jeddah-makkah-private-car",
    title: "Private Car - Jeddah Airport to Makkah",
    price: "350 SAR",
    type: "Private Car",
    route: "Jeddah Airport to Makkah",
  },
  "jeddah-makkah-microbus": {
    id: "jeddah-makkah-microbus",
    title: "Microbus - Jeddah Airport to Makkah",
    price: "650 SAR",
    type: "Microbus",
    route: "Jeddah Airport to Makkah",
  },
  "jeddah-makkah-small-bus": {
    id: "jeddah-makkah-small-bus",
    title: "Small Bus - Jeddah Airport to Makkah",
    price: "1,200 SAR",
    type: "Small Bus",
    route: "Jeddah Airport to Makkah",
  },
  "jeddah-makkah-large-bus": {
    id: "jeddah-makkah-large-bus",
    title: "Large Bus - Jeddah Airport to Makkah",
    price: "2,000 SAR",
    type: "Large Bus",
    route: "Jeddah Airport to Makkah",
  },
  "jeddah-makkah-haramain-train": {
    id: "jeddah-makkah-haramain-train",
    title: "Haramain Train - Jeddah to Makkah",
    price: "80 SAR per person",
    type: "Train",
    route: "Jeddah to Makkah",
  },

  // Within Makkah
  "makkah-holy-sites-tour": {
    id: "makkah-holy-sites-tour",
    title: "Holy Sites Tour in Makkah",
    price: "200 SAR per person",
    type: "Tour Bus",
    route: "Within Makkah",
  },
  "makkah-daily-haram-transfer": {
    id: "makkah-daily-haram-transfer",
    title: "Daily Haram Transfer",
    price: "50 SAR per day",
    type: "Shuttle",
    route: "Hotel to Haram",
  },
  "makkah-private-car-rental": {
    id: "makkah-private-car-rental",
    title: "Private Car Rental in Makkah",
    price: "300 SAR per day",
    type: "Private Car",
    route: "Within Makkah",
  },

  // Makkah to Madinah
  "makkah-madinah-vip-bus": {
    id: "makkah-madinah-vip-bus",
    title: "VIP Bus - Makkah to Madinah",
    price: "150 SAR per person",
    type: "VIP Bus",
    route: "Makkah to Madinah",
  },
  "makkah-madinah-haramain-train": {
    id: "makkah-madinah-haramain-train",
    title: "Haramain Train - Makkah to Madinah",
    price: "120 SAR per person",
    type: "Train",
    route: "Makkah to Madinah",
  },
  "makkah-madinah-private-car": {
    id: "makkah-madinah-private-car",
    title: "Private Car - Makkah to Madinah",
    price: "800 SAR",
    type: "Private Car",
    route: "Makkah to Madinah",
  },

  // Within Madinah
  "madinah-ziyarah-tour": {
    id: "madinah-ziyarah-tour",
    title: "Madinah Ziyarah Tour",
    price: "150 SAR per person",
    type: "Tour Bus",
    route: "Within Madinah",
  },
  "madinah-daily-mosque-transfer": {
    id: "madinah-daily-mosque-transfer",
    title: "Daily Masjid Nabawi Transfer",
    price: "40 SAR per day",
    type: "Shuttle",
    route: "Hotel to Masjid Nabawi",
  },
  "madinah-private-car-rental": {
    id: "madinah-private-car-rental",
    title: "Private Car Rental in Madinah",
    price: "250 SAR per day",
    type: "Private Car",
    route: "Within Madinah",
  },

  // Madinah to Makkah
  "madinah-makkah-vip-bus": {
    id: "madinah-makkah-vip-bus",
    title: "VIP Bus - Madinah to Makkah",
    price: "150 SAR per person",
    type: "VIP Bus",
    route: "Madinah to Makkah",
  },
  "madinah-makkah-haramain-train": {
    id: "madinah-makkah-haramain-train",
    title: "Haramain Train - Madinah to Makkah",
    price: "120 SAR per person",
    type: "Train",
    route: "Madinah to Makkah",
  },
  "madinah-makkah-private-car": {
    id: "madinah-makkah-private-car",
    title: "Private Car - Madinah to Makkah",
    price: "800 SAR",
    type: "Private Car",
    route: "Madinah to Makkah",
  },

  // Madinah to Jeddah Airport
  "madinah-jeddah-private-car": {
    id: "madinah-jeddah-private-car",
    title: "Private Car - Madinah to Jeddah Airport",
    price: "900 SAR",
    type: "Private Car",
    route: "Madinah to Jeddah Airport",
  },
  "madinah-jeddah-microbus": {
    id: "madinah-jeddah-microbus",
    title: "Microbus - Madinah to Jeddah Airport",
    price: "1,200 SAR",
    type: "Microbus",
    route: "Madinah to Jeddah Airport",
  },
  "madinah-jeddah-train-transfer": {
    id: "madinah-jeddah-train-transfer",
    title: "Haramain Train + Transfer - Madinah to Jeddah Airport",
    price: "200 SAR per person",
    type: "Train + Transfer",
    route: "Madinah to Jeddah Airport",
  },
}

export default function BookTransportationPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const transport = transportInfo[params.id]

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    nationality: "",
    travelDate: "",
    travelTime: "",
    pickupLocation: "",
    dropoffLocation: "",
    numberOfPassengers: "1",
    numberOfLuggages: "1",
    specialRequirements: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!transport) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Transportation Option Not Found</h1>
        <p className="mb-6">Sorry, the transportation option you are looking for does not exist.</p>
        <Link
          href="/services/transportation"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
        >
          Back to Transportation Services
        </Link>
      </div>
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Log the form data to Vercel logs
      console.log("Transportation booking submission:", {
        transport: transport.title,
        ...formData,
        submittedAt: new Date().toISOString(),
      })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page
      router.push(`/book-transportation/${params.id}/success`)
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
            <h1 className="text-3xl font-bold mb-2">Book Your Transportation</h1>
            <p className="text-gray-600 mb-8">Fill out the form below to book {transport.title}</p>

            <div className="bg-green-50 p-4 rounded-lg mb-8">
              <h2 className="font-bold text-lg text-green-800">Transportation Details</h2>
              <p className="text-green-700">
                {transport.title} - {transport.price} - {transport.route}
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    id="travelDate"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="travelTime" className="block text-sm font-medium text-gray-700 mb-1">
                    Travel Time
                  </label>
                  <input
                    type="time"
                    id="travelTime"
                    name="travelTime"
                    value={formData.travelTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    required
                    placeholder="Hotel name, airport terminal, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="dropoffLocation" className="block text-sm font-medium text-gray-700 mb-1">
                    Drop-off Location
                  </label>
                  <input
                    type="text"
                    id="dropoffLocation"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                    required
                    placeholder="Hotel name, specific location, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="numberOfPassengers" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Passengers
                  </label>
                  <select
                    id="numberOfPassengers"
                    name="numberOfPassengers"
                    value={formData.numberOfPassengers}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 20, 25, 30, 40, 50].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                    <option value="more than 50">More than 50</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="numberOfLuggages" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Luggage Items
                  </label>
                  <select
                    id="numberOfLuggages"
                    name="numberOfLuggages"
                    value={formData.numberOfLuggages}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                    <option value="more than 10">More than 10</option>
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
                  placeholder="Any special needs, wheelchair access, child seats, flight details, etc."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  required
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  I agree to the{" "}
                  <Link href="/terms" className="text-green-600 hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-green-600 text-white py-3 rounded-md font-medium transition-colors ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:bg-green-700"
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

