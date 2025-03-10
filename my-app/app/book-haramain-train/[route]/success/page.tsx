"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

interface RouteInfo {
  id: string
  title: string
}

const routeInfo: Record<string, RouteInfo> = {
  "jeddah-makkah": {
    id: "jeddah-makkah",
    title: "Jeddah to Makkah",
  },
  "makkah-jeddah": {
    id: "makkah-jeddah",
    title: "Makkah to Jeddah",
  },
  "makkah-madinah": {
    id: "makkah-madinah",
    title: "Makkah to Madinah",
  },
  "madinah-makkah": {
    id: "madinah-makkah",
    title: "Madinah to Makkah",
  },
  "madinah-jeddah": {
    id: "madinah-jeddah",
    title: "Madinah to Jeddah",
  },
}

export default function BookingSuccessPage({ params }: { params: { route: string } }) {
  const [bookingId, setBookingId] = useState("")
  const route = routeInfo[params.route]

  useEffect(() => {
    // Generate a random booking ID
    const randomId = Math.floor(100000 + Math.random() * 900000)
    setBookingId(`HT-${randomId}`)
  }, [])

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
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-green-600 p-6 text-white text-center">
              <svg
                className="w-16 h-16 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <h1 className="text-3xl font-bold">Booking Successful!</h1>
              <p className="mt-2">Your Haramain Train tickets have been booked successfully.</p>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Booking Reference</p>
                      <p className="font-bold">{bookingId}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Route</p>
                      <p className="font-bold">{route.title}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">What's Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Confirmation Email</h4>
                      <p className="text-gray-600">
                        We've sent a confirmation email with your booking details and e-ticket. Please check your inbox.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">E-Ticket</h4>
                      <p className="text-gray-600">
                        Your e-ticket will be attached to the confirmation email. Please print it or save it on your
                        mobile device.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold">Arrival Time</h4>
                      <p className="text-gray-600">
                        Please arrive at the station at least 30 minutes before your departure time with your
                        ID/passport and e-ticket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6 flex flex-col sm:flex-row justify-between items-center">
                <p className="text-gray-600 mb-4 sm:mb-0">
                  If you have any questions, please contact our customer service.
                </p>
                <Link
                  href="/contact"
                  className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

