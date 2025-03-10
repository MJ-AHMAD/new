import Link from "next/link"
import Image from "next/image"
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

export default function BookingSuccessPage({ params }: { params: { id: string } }) {
  const transport = transportInfo[params.id]

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
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">Booking Successful!</h1>
              <p className="text-xl text-gray-600 mb-2">Thank you for booking with T-Ally Umrah Sr.</p>
              <p className="text-gray-600 mb-6">
                Your transportation booking for <span className="font-semibold">{transport.title}</span> has been
                confirmed.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h2 className="font-bold text-xl text-green-800 mb-4">Booking Details</h2>
              <div className="space-y-2 text-left">
                <p className="flex justify-between border-b border-green-100 pb-2">
                  <span className="text-gray-600">Transportation:</span>
                  <span className="font-medium">{transport.title}</span>
                </p>
                <p className="flex justify-between border-b border-green-100 pb-2">
                  <span className="text-gray-600">Route:</span>
                  <span className="font-medium">{transport.route}</span>
                </p>
                <p className="flex justify-between border-b border-green-100 pb-2">
                  <span className="text-gray-600">Type:</span>
                  <span className="font-medium">{transport.type}</span>
                </p>
                <p className="flex justify-between border-b border-green-100 pb-2">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium">{transport.price}</span>
                </p>
                <p className="flex justify-between border-b border-green-100 pb-2">
                  <span className="text-gray-600">Booking Reference:</span>
                  <span className="font-medium">
                    TR-
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, "0")}
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h2 className="font-bold text-xl text-blue-800 mb-4">What's Next?</h2>
              <div className="text-left space-y-4">
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>You will receive a confirmation email with all the details of your booking shortly.</span>
                </p>
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    Our team will contact you 24 hours before your scheduled travel date to confirm all details.
                  </span>
                </p>
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>
                    If you have any questions or need to make changes to your booking, please contact our customer
                    service team.
                  </span>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services/transportation"
                className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
              >
                Book More Transportation
              </Link>
              <Link
                href="/"
                className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

