"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"

interface PackageInfo {
  id: string
  title: string
  price: string
}

const packagesInfo: Record<string, PackageInfo> = {
  "7-day-economy": {
    id: "7-day-economy",
    title: "7 Days Economy Umrah Package",
    price: "£1,499",
  },
  "10-day-standard": {
    id: "10-day-standard",
    title: "10 Days Standard Umrah Package",
    price: "£1,899",
  },
  "15-day-premium": {
    id: "15-day-premium",
    title: "15 Days Premium Umrah Package",
    price: "£2,799",
  },
  "hajj-package": {
    id: "hajj-package",
    title: "Complete Hajj Package 2025",
    price: "£5,999",
  },
  "family-umrah": {
    id: "family-umrah",
    title: "Family Umrah Package",
    price: "£1,699 per person",
  },
  "ramadan-umrah": {
    id: "ramadan-umrah",
    title: "Ramadan Umrah Special",
    price: "£2,299",
  },
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const packageInfo = packagesInfo[params.id]

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    nationality: "",
    travelDate: "",
    numberOfTravelers: "1",
    specialRequirements: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!packageInfo) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Package Not Found</h1>
        <p className="mb-6">Sorry, the package you are looking for does not exist.</p>
        <Link href="/" className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
          Back to Home
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
      console.log("Booking submission:", {
        package: packageInfo.title,
        ...formData,
        submittedAt: new Date().toISOString(),
      })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page
      router.push(`/book/${params.id}/success`)
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
            <h1 className="text-3xl font-bold mb-2">Book Your Umrah Package</h1>
            <p className="text-gray-600 mb-8">Fill out the form below to book your {packageInfo.title}</p>

            <div className="bg-green-50 p-4 rounded-lg mb-8">
              <h2 className="font-bold text-lg text-green-800">Package Details</h2>
              <p className="text-green-700">
                {packageInfo.title} - {packageInfo.price}
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
                    Preferred Travel Date
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
                  <label htmlFor="numberOfTravelers" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Travelers
                  </label>
                  <select
                    id="numberOfTravelers"
                    name="numberOfTravelers"
                    value={formData.numberOfTravelers}
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

