"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Footer } from "@/components/footer"

interface TrainSchedule {
  departureTime: string
  arrivalTime: string
  duration: string
}

interface RouteInfo {
  id: string
  title: string
  basePrice: number
  schedules: TrainSchedule[]
}

const routeInfo: Record<string, RouteInfo> = {
  "jeddah-makkah": {
    id: "jeddah-makkah",
    title: "Jeddah to Makkah",
    basePrice: 80,
    schedules: [
      { departureTime: "08:00 AM", arrivalTime: "08:30 AM", duration: "30 minutes" },
      { departureTime: "12:00 PM", arrivalTime: "12:30 PM", duration: "30 minutes" },
      { departureTime: "04:00 PM", arrivalTime: "04:30 PM", duration: "30 minutes" },
    ],
  },
  "makkah-jeddah": {
    id: "makkah-jeddah",
    title: "Makkah to Jeddah",
    basePrice: 80,
    schedules: [
      { departureTime: "08:00 AM", arrivalTime: "08:30 AM", duration: "30 minutes" },
      { departureTime: "12:00 PM", arrivalTime: "12:30 PM", duration: "30 minutes" },
      { departureTime: "04:00 PM", arrivalTime: "04:30 PM", duration: "30 minutes" },
    ],
  },
  "makkah-madinah": {
    id: "makkah-madinah",
    title: "Makkah to Madinah",
    basePrice: 120,
    schedules: [
      { departureTime: "06:00 AM", arrivalTime: "08:00 AM", duration: "2 hours" },
      { departureTime: "08:00 AM", arrivalTime: "10:00 AM", duration: "2 hours" },
      { departureTime: "10:00 AM", arrivalTime: "12:00 PM", duration: "2 hours" },
    ],
  },
  "madinah-makkah": {
    id: "madinah-makkah",
    title: "Madinah to Makkah",
    basePrice: 120,
    schedules: [
      { departureTime: "06:00 AM", arrivalTime: "08:00 AM", duration: "2 hours" },
      { departureTime: "08:00 AM", arrivalTime: "10:00 AM", duration: "2 hours" },
      { departureTime: "10:00 AM", arrivalTime: "12:00 PM", duration: "2 hours" },
    ],
  },
  "madinah-jeddah": {
    id: "madinah-jeddah",
    title: "Madinah to Jeddah",
    basePrice: 150,
    schedules: [
      { departureTime: "07:00 AM", arrivalTime: "08:30 AM", duration: "1.5 hours" },
      { departureTime: "09:00 AM", arrivalTime: "10:30 AM", duration: "1.5 hours" },
      { departureTime: "05:00 PM", arrivalTime: "06:30 PM", duration: "1.5 hours" },
    ],
  },
}

export default function BookHaramainTrainPage({ params }: { params: { route: string } }) {
  const router = useRouter()
  const route = routeInfo[params.route]

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    passportNumber: "",
    nationality: "Bangladesh",
    travelDate: "",
    scheduleIndex: "0",
    ticketClass: "economy",
    numberOfPassengers: "1",
    specialRequirements: "",
  })

  const [totalPrice, setTotalPrice] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (route) {
      const basePrice = route.basePrice
      const passengers = Number.parseInt(formData.numberOfPassengers)
      const classMultiplier = formData.ticketClass === "business" ? 1.5 : 1
      setTotalPrice(basePrice * passengers * classMultiplier)
    }
  }, [formData.numberOfPassengers, formData.ticketClass, route])

  if (!route) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Route Not Found</h1>
        <p className="mb-6">Sorry, the train route you are looking for does not exist.</p>
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
      console.log("Haramain Train booking submission:", {
        route: route.title,
        schedule: route.schedules[Number.parseInt(formData.scheduleIndex)],
        ...formData,
        totalPrice,
        submittedAt: new Date().toISOString(),
      })

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Redirect to success page
      router.push(`/book-haramain-train/${params.route}/success`)
    } catch (error) {
      console.error("Booking error:", error)
      setIsSubmitting(false)
      alert("There was an error processing your booking. Please try again.")
    }
  }

  const selectedSchedule = route.schedules[Number.parseInt(formData.scheduleIndex)]

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
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">Book Haramain Train Tickets</h1>
              <p className="text-gray-600">{route.title} - Fast and comfortable high-speed train service</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
              <div className="relative h-64">
                <Image
                  src="https://mj-ahmad.github.io/mja2025/img/haramain02.png"
                  alt="Haramain Train"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h2 className="text-2xl font-bold mb-2">Haramain High-Speed Railway</h2>
                    <p>Modern, fast, and comfortable train service between Makkah, Madinah, and Jeddah</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-green-50">
                <h3 className="text-xl font-bold mb-4">Available Train Schedules</h3>
                <div className="grid gap-4">
                  {route.schedules.map((schedule, index) => (
                    <label
                      key={index}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-colors ${
                        Number.parseInt(formData.scheduleIndex) === index
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 bg-white hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="scheduleIndex"
                        value={index}
                        checked={Number.parseInt(formData.scheduleIndex) === index}
                        onChange={handleChange}
                        className="h-5 w-5 text-green-600 focus:ring-green-500 mr-4"
                      />
                      <div className="flex-1 grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Departure</p>
                          <p className="font-bold">{schedule.departureTime}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Arrival</p>
                          <p className="font-bold">{schedule.arrivalTime}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Duration</p>
                          <p className="font-bold">{schedule.duration}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-4">Passenger Information</h3>
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
                </div>
              </div>

              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-4">Ticket Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="ticketClass" className="block text-sm font-medium text-gray-700 mb-1">
                      Ticket Class
                    </label>
                    <select
                      id="ticketClass"
                      name="ticketClass"
                      value={formData.ticketClass}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    >
                      <option value="economy">Economy Class</option>
                      <option value="business">Business Class</option>
                    </select>
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
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label htmlFor="specialRequirements" className="block text-sm font-medium text-gray-700 mb-1">
                    Special Requirements or Questions
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any special needs, wheelchair access, etc."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  ></textarea>
                </div>
              </div>

              <div className="p-6 bg-gray-50">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-xl font-bold">Booking Summary</h3>
                    <p className="text-gray-600">
                      {route.title} - {selectedSchedule.departureTime} to {selectedSchedule.arrivalTime}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <p className="text-gray-600">Total Price:</p>
                    <p className="text-2xl font-bold text-green-600">{totalPrice} SAR</p>
                  </div>
                </div>

                <div className="flex items-center mb-6">
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

            <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">About Haramain High-Speed Railway</h3>
              <div className="space-y-4">
                <p>
                  The Haramain High-Speed Railway is a 453-kilometer high-speed rail service that connects the holy
                  cities of Makkah and Madinah via Jeddah and King Abdullah Economic City. The train travels at speeds
                  of up to 300 km/h, making it one of the fastest trains in the Middle East.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Modern Facilities</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Free WiFi</li>
                      <li>• Comfortable seating</li>
                      <li>• Prayer areas</li>
                      <li>• Onboard cafeteria</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Stations</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Makkah Station</li>
                      <li>• Jeddah Station</li>
                      <li>• King Abdullah Economic City</li>
                      <li>• Madinah Station</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-bold mb-2">Travel Tips</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Arrive 30 minutes early</li>
                      <li>• Bring valid ID/passport</li>
                      <li>• Limited luggage allowed</li>
                      <li>• No smoking allowed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

