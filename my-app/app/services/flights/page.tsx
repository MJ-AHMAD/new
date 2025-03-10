"use client"

import { useState } from "react"
import Link from "next/link"
import { Footer } from "@/components/footer"

// Define types
interface Flight {
  airline: string
  flight_number: string
  departure_time: string
  arrival_time: string
  duration: string
  price: string
  layover: string
}

interface FlightData {
  origin: string
  destination: string
  departure_date: string
  flights: Flight[]
}

interface BookingFormData {
  flightNumber: string
  airline: string
  origin: string
  destination: string
  departureTime: string
  arrivalTime: string
  price: string
  passengerName: string
  passengerEmail: string
  passengerPhone: string
  passengers: number
}

export default function FlightsPage() {
  // Airport codes mapping
  const airportCodes = {
    DAC: "Dhaka, Bangladesh",
    CGP: "Chittagong, Bangladesh",
    JED: "Jeddah, Saudi Arabia",
    MED: "Madinah, Saudi Arabia",
  }

  // State management
  const [selectedRoute, setSelectedRoute] = useState("DAC-JED")
  const [selectedDate, setSelectedDate] = useState("2025-04-26")
  const [showFilters, setShowFilters] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 1500])
  const [selectedAirlines, setSelectedAirlines] = useState([])
  const [directFlightsOnly, setDirectFlightsOnly] = useState(false)
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [selectedFlight, setSelectedFlight] = useState(null)
  const [bookingFormData, setBookingFormData] = useState({
    flightNumber: "",
    airline: "",
    origin: "",
    destination: "",
    departureTime: "",
    arrivalTime: "",
    price: "",
    passengerName: "",
    passengerEmail: "",
    passengerPhone: "",
    passengers: 1,
  })

  // Flight data
  const flightRoutes = {
    "DAC-JED": {
      origin: "DAC",
      destination: "JED",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG001",
          departure_time: "01:15",
          arrival_time: "08:25",
          duration: "7h 10m",
          price: "$910",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV002",
          departure_time: "14:30",
          arrival_time: "21:40",
          duration: "7h 10m",
          price: "$920",
          layover: "None",
        },
        {
          airline: "US-Bangla Airlines",
          flight_number: "BS003",
          departure_time: "21:20",
          arrival_time: "04:30",
          duration: "7h 10m",
          price: "$900",
          layover: "None",
        },
        {
          airline: "Flynas",
          flight_number: "XY004",
          departure_time: "10:00",
          arrival_time: "17:10",
          duration: "7h 10m",
          price: "$880",
          layover: "None",
        },
        {
          airline: "Qatar Airways",
          flight_number: "QR007",
          departure_time: "05:00",
          arrival_time: "15:00",
          duration: "12h 00m",
          price: "$400",
          layover: "Doha (DOH)",
        },
        {
          airline: "Emirates",
          flight_number: "EK008",
          departure_time: "09:00",
          arrival_time: "19:00",
          duration: "12h 00m",
          price: "$420",
          layover: "Dubai (DXB)",
        },
      ],
    },
    "CGP-JED": {
      origin: "CGP",
      destination: "JED",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG135",
          departure_time: "15:55",
          arrival_time: "21:00",
          duration: "7h 05m",
          price: "$1150",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV136",
          departure_time: "19:00",
          arrival_time: "01:05",
          duration: "7h 05m",
          price: "$1200",
          layover: "None",
        },
        {
          airline: "Qatar Airways",
          flight_number: "QR137",
          departure_time: "05:00",
          arrival_time: "15:00",
          duration: "12h 00m",
          price: "$400",
          layover: "Doha (DOH)",
        },
      ],
    },
    "DAC-MED": {
      origin: "DAC",
      destination: "MED",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG201",
          departure_time: "01:00",
          arrival_time: "07:45",
          duration: "7h 45m",
          price: "$950",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV202",
          departure_time: "14:00",
          arrival_time: "20:45",
          duration: "7h 45m",
          price: "$960",
          layover: "None",
        },
      ],
    },
    "CGP-MED": {
      origin: "CGP",
      destination: "MED",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG301",
          departure_time: "16:55",
          arrival_time: "00:45",
          duration: "7h 50m",
          price: "$1150",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV302",
          departure_time: "19:00",
          arrival_time: "02:50",
          duration: "7h 50m",
          price: "$1200",
          layover: "None",
        },
      ],
    },
    "JED-DAC": {
      origin: "JED",
      destination: "DAC",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG601",
          departure_time: "01:00",
          arrival_time: "08:05",
          duration: "6h 05m",
          price: "$840",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV602",
          departure_time: "22:45",
          arrival_time: "05:50",
          duration: "6h 05m",
          price: "$850",
          layover: "None",
        },
      ],
    },
    "JED-CGP": {
      origin: "JED",
      destination: "CGP",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG501",
          departure_time: "01:00",
          arrival_time: "08:05",
          duration: "6h 05m",
          price: "$840",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV502",
          departure_time: "22:45",
          arrival_time: "05:50",
          duration: "6h 05m",
          price: "$850",
          layover: "None",
        },
      ],
    },
    "MED-DAC": {
      origin: "MED",
      destination: "DAC",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG701",
          departure_time: "01:00",
          arrival_time: "08:05",
          duration: "6h 05m",
          price: "$850",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV702",
          departure_time: "22:45",
          arrival_time: "05:50",
          duration: "6h 05m",
          price: "$860",
          layover: "None",
        },
      ],
    },
    "MED-CGP": {
      origin: "MED",
      destination: "CGP",
      departure_date: "2025-04-26",
      flights: [
        {
          airline: "Biman Bangladesh Airlines",
          flight_number: "BG401",
          departure_time: "23:30",
          arrival_time: "06:05",
          duration: "6h 35m",
          price: "$1150",
          layover: "None",
        },
        {
          airline: "Saudia",
          flight_number: "SV402",
          departure_time: "19:00",
          arrival_time: "02:50",
          duration: "7h 50m",
          price: "$1200",
          layover: "None",
        },
      ],
    },
  }

  // Get current flight data
  const currentFlightData = flightRoutes[selectedRoute]

  // Convert price string to number
  const getPriceNumber = (price) => {
    return Number.parseInt(price.replace("$", ""))
  }

  // Get unique airlines
  const getUniqueAirlines = () => {
    const airlines = new Set()
    Object.values(flightRoutes).forEach((route) => {
      route.flights.forEach((flight) => {
        airlines.add(flight.airline)
      })
    })
    return Array.from(airlines)
  }

  const uniqueAirlines = getUniqueAirlines()

  const handleAirlineChange = (airline) => {
    if (selectedAirlines.includes(airline)) {
      setSelectedAirlines(selectedAirlines.filter((a) => a !== airline))
    } else {
      setSelectedAirlines([...selectedAirlines, airline])
    }
  }

  // Filter flights based on criteria
  const getFilteredFlights = () => {
    let filteredFlights = currentFlightData.flights

    // Filter by price
    filteredFlights = filteredFlights.filter((flight) => {
      const price = getPriceNumber(flight.price)
      return price >= priceRange[0] && price <= priceRange[1]
    })

    // Filter by airline
    if (selectedAirlines.length > 0) {
      filteredFlights = filteredFlights.filter((flight) => selectedAirlines.includes(flight.airline))
    }

    // Filter by direct flights
    if (directFlightsOnly) {
      filteredFlights = filteredFlights.filter((flight) => flight.layover === "None")
    }

    return filteredFlights
  }

  const filteredFlights = getFilteredFlights()

  // Convert to BDT
  const convertToBDT = (dollarPrice) => {
    const numericValue = Number.parseInt(dollarPrice.replace("$", ""))
    return `BDT ${(numericValue * 110).toLocaleString()}`
  }

  // Handle booking button click
  const handleBookNow = (flight) => {
    setSelectedFlight(flight)
    setBookingFormData({
      ...bookingFormData,
      flightNumber: flight.flight_number,
      airline: flight.airline,
      origin: currentFlightData.origin,
      destination: currentFlightData.destination,
      departureTime: flight.departure_time,
      arrivalTime: flight.arrival_time,
      price: flight.price,
    })
    setShowBookingForm(true)
    // Scroll to booking form
    setTimeout(() => {
      const bookingElement = document.getElementById("booking-form")
      if (bookingElement) {
        bookingElement.scrollIntoView({ behavior: "smooth" })
      }
    }, 100)
  }

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBookingFormData({
      ...bookingFormData,
      [name]: value,
    })
  }

  // Handle form submission
  const handleSubmitBooking = (e) => {
    e.preventDefault()
    // Here you would typically send the booking data to your backend
    alert("Booking submitted successfully! We will contact you shortly to confirm your flight reservation.")
    setShowBookingForm(false)
    setSelectedFlight(null)
    // Reset form
    setBookingFormData({
      ...bookingFormData,
      passengerName: "",
      passengerEmail: "",
      passengerPhone: "",
      passengers: 1,
    })
  }

  const bookingSteps = [
    {
      step: 1,
      title: "Select Flight",
      description: "Choose your preferred flight from our available options.",
    },
    {
      step: 2,
      title: "Enter Details",
      description: "Provide passenger information and contact details.",
    },
    {
      step: 3,
      title: "Review & Confirm",
      description: "Review your flight details and confirm your booking.",
    },
    {
      step: 4,
      title: "Secure Payment",
      description: "Complete your booking with our secure payment system.",
    },
    {
      step: 5,
      title: "Receive Confirmation",
      description: "Get your e-ticket and flight details via email.",
    },
  ]

  // Airline logo mapping
  const getAirlineLogo = (airline) => {
    switch (airline) {
      case "Biman Bangladesh Airlines":
        return "https://mj-ahmad.github.io/mja2025/img/biman-logo.png"
      case "Saudia":
        return "https://mj-ahmad.github.io/mja2025/img/saudia-logo.png"
      case "US-Bangla Airlines":
        return "https://mj-ahmad.github.io/mja2025/img/usbangla-logo.png"
      case "Flynas":
        return "https://mj-ahmad.github.io/mja2025/img/flynas-logo.png"
      case "Qatar Airways":
        return "https://mj-ahmad.github.io/mja2025/img/qatar-logo.png"
      case "Emirates":
        return "https://mj-ahmad.github.io/mja2025/img/emirates-logo.png"
      default:
        return "https://mj-ahmad.github.io/mja2025/img/turkish-logo.png"
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full"></div>
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

      <main className="flex-grow">
        <section className="relative h-[40vh] bg-gray-800">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Flight Services</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive flight options for your journey to and from the holy cities
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Flight Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a wide range of flight options from Bangladesh to Saudi Arabia, with competitive prices and
                convenient schedules. Choose from multiple airlines and routes to find the perfect flight for your Umrah
                journey.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-10">
              <h3 className="text-xl font-bold mb-4">Search Flights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label htmlFor="route" className="block text-sm font-medium text-gray-700 mb-1">
                    Route
                  </label>
                  <select
                    id="route"
                    value={selectedRoute}
                    onChange={(e) => setSelectedRoute(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="DAC-JED">Dhaka to Jeddah</option>
                    <option value="CGP-JED">Chittagong to Jeddah</option>
                    <option value="DAC-MED">Dhaka to Madinah</option>
                    <option value="CGP-MED">Chittagong to Madinah</option>
                    <option value="JED-DAC">Jeddah to Dhaka</option>
                    <option value="JED-CGP">Jeddah to Chittagong</option>
                    <option value="MED-DAC">Madinah to Dhaka</option>
                    <option value="MED-CGP">Madinah to Chittagong</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                    Departure Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                    Passengers
                  </label>
                  <select
                    id="passengers"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5">5+ Passengers</option>
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
                  >
                    {showFilters ? "Hide Filters" : "Show Filters"}
                  </button>
                </div>
              </div>

              {showFilters && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold mb-4">Filters</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Price Range (USD)</h5>
                      <div className="flex items-center gap-4">
                        <input
                          type="range"
                          min="0"
                          max="1500"
                          step="50"
                          value={priceRange[1]}
                          onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                          className="w-full"
                        />
                        <span className="text-sm text-gray-700">Max: ${priceRange[1]}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Airlines</h5>
                      <div className="space-y-2 max-h-40 overflow-y-auto">
                        {uniqueAirlines.map((airline) => (
                          <div key={airline} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`airline-${airline}`}
                              checked={selectedAirlines.includes(airline)}
                              onChange={() => handleAirlineChange(airline)}
                              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`airline-${airline}`} className="ml-2 block text-sm text-gray-700">
                              {airline}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium mb-2">Other Filters</h5>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id="direct-flights"
                            checked={directFlightsOnly}
                            onChange={() => setDirectFlightsOnly(!directFlightsOnly)}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                          <label htmlFor="direct-flights" className="ml-2 block text-sm text-gray-700">
                            Direct Flights Only
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                {airportCodes[currentFlightData.origin]} to {airportCodes[currentFlightData.destination]}
              </h3>
              <p className="text-gray-600">
                {filteredFlights.length} flights found for {selectedDate}
              </p>
            </div>

            <div className="space-y-6">
              {filteredFlights.map((flight, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-4 items-center">
                    <div className="p-4 md:border-r border-gray-200 flex items-center">
                      <div className="w-16 h-16 flex-shrink-0 mr-4 bg-gray-100 flex items-center justify-center rounded">
                        <span className="text-sm font-bold">{flight.airline.substring(0, 2)}</span>
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{flight.airline}</h4>
                        <p className="text-gray-500 text-sm">{flight.flight_number}</p>
                      </div>
                    </div>

                    <div className="p-4 md:border-r border-gray-200 bg-gray-50 md:bg-white">
                      <div className="flex justify-between items-center">
                        <div className="text-center md:text-left">
                          <p className="font-bold text-lg">{flight.departure_time}</p>
                          <p className="text-gray-500 text-sm">{currentFlightData.origin}</p>
                        </div>

                        <div className="mx-2 md:mx-4 text-center flex flex-col items-center">
                          <div className="text-xs text-gray-500">{flight.duration}</div>
                          <div className="relative w-full">
                            <div className="border-t-2 border-gray-300 w-16 md:w-24 my-2"></div>
                            {flight.layover !== "None" && (
                              <div className="absolute -bottom-4 w-full text-xs text-gray-500 text-center">
                                {flight.layover}
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-center md:text-right">
                          <p className="font-bold text-lg">{flight.arrival_time}</p>
                          <p className="text-gray-500 text-sm">{currentFlightData.destination}</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:border-r border-gray-200 flex flex-col md:flex-row md:items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600 mb-1 md:mb-0">
                          {flight.layover === "None" ? (
                            <span className="text-green-600 font-medium">Direct Flight</span>
                          ) : (
                            <span>Layover: {flight.layover}</span>
                          )}
                        </p>
                        <p className="text-sm text-gray-600">Economy Class</p>
                      </div>
                      <div className="md:hidden mt-2 flex items-center">
                        <p className="font-bold text-xl text-green-600 mr-2">{flight.price}</p>
                        <p className="text-xs text-gray-600">{convertToBDT(flight.price)}</p>
                      </div>
                    </div>

                    <div className="p-4 flex flex-col items-center justify-center bg-gray-50 md:bg-white">
                      <p className="hidden md:block font-bold text-2xl text-green-600 mb-2">{flight.price}</p>
                      <p className="hidden md:block text-sm text-gray-600 mb-2">{convertToBDT(flight.price)}</p>
                      <button
                        onClick={() => handleBookNow(flight)}
                        className="w-full md:w-auto bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Flight Booking Process</h2>

              <div className="mb-12">
                <div className="flex flex-wrap justify-center">
                  {bookingSteps.map((step) => (
                    <div key={step.step} className="w-full md:w-1/2 lg:w-1/5 px-4 mb-8">
                      <div className="bg-white rounded-lg p-6 h-full flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4">
                          {step.step}
                        </div>
                        <h4 className="font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-600 text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flight Booking Form */}
        {showBookingForm && (
          <section id="booking-form" className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Book Your Flight</h2>

                <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8">
                  <h3 className="text-xl font-bold mb-6">Selected Flight Details</h3>
                  {selectedFlight && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-600">Airline:</p>
                        <p className="font-bold">{selectedFlight.airline}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Flight Number:</p>
                        <p className="font-bold">{selectedFlight.flight_number}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Route:</p>
                        <p className="font-bold">
                          {airportCodes[currentFlightData.origin]} to {airportCodes[currentFlightData.destination]}
                          to {airportCodes[currentFlightData.destination]}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-600">Date:</p>
                        <p className="font-bold">{selectedDate}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Departure Time:</p>
                        <p className="font-bold">{selectedFlight.departure_time}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Arrival Time:</p>
                        <p className="font-bold">{selectedFlight.arrival_time}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Duration:</p>
                        <p className="font-bold">{selectedFlight.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Price:</p>
                        <p className="font-bold text-green-600">
                          {selectedFlight.price} / {convertToBDT(selectedFlight.price)}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-6 text-center">Passenger Information</h3>
                  <form onSubmit={handleSubmitBooking} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="passengerName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name (as on passport)
                        </label>
                        <input
                          type="text"
                          id="passengerName"
                          name="passengerName"
                          value={bookingFormData.passengerName}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="passengerEmail" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="passengerEmail"
                          name="passengerEmail"
                          value={bookingFormData.passengerEmail}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="passengerPhone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="passengerPhone"
                          name="passengerPhone"
                          value={bookingFormData.passengerPhone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="passengers" className="block text-sm font-medium text-gray-700 mb-1">
                          Number of Passengers
                        </label>
                        <input
                          type="number"
                          id="passengers"
                          name="passengers"
                          min="1"
                          value={bookingFormData.passengers}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div className="text-center pt-4">
                      <button
                        type="submit"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                      >
                        Proceed to Payment
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Airline Partners</h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                We work with reputable airlines to provide safe, comfortable, and convenient flights for our pilgrims.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                  <div className="h-16 w-24 mb-4 bg-gray-100 flex items-center justify-center">
                    <span className="font-bold">Biman</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Biman Bangladesh</h3>
                  <p className="text-gray-600 text-sm">Bangladesh's national flag carrier</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                  <div className="h-16 w-24 mb-4 bg-gray-100 flex items-center justify-center">
                    <span className="font-bold">Saudia</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Saudia</h3>
                  <p className="text-gray-600 text-sm">Saudi Arabia's national airline</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                  <div className="h-16 w-24 mb-4 bg-gray-100 flex items-center justify-center">
                    <span className="font-bold">Emirates</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Emirates</h3>
                  <p className="text-gray-600 text-sm">Award-winning international airline</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                  <div className="h-16 w-24 mb-4 bg-gray-100 flex items-center justify-center">
                    <span className="font-bold">Qatar</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Qatar Airways</h3>
                  <p className="text-gray-600 text-sm">5-star airline with global connections</p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  আমরা আপনাকে বাংলাদেশ থেকে সৌদি আরবে যাওয়ার জন্য এবং ফিরে আসার জন্য সর্বোত্তম বিমান পরিষেবা প্রদান করি। আমাদের বিশেষজ্ঞ
                  দল আপনার যাত্রা নিরাপদ, আরামদায়ক এবং সুবিধাজনক করার জন্য সবসময় প্রস্তুত।
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Contact Us for Flight Assistance
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

