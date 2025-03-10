import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function TransportationPage() {
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
              <Link href="/makkah" className="hover:text-green-200 transition-colors">
                Makkah
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
        <section className="relative h-[40vh]">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/tr00.png"
            alt="Transportation Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Transportation Services</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Special transportation arrangements for Bangladeshi Umrah and Hajj pilgrims
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Transportation Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We provide specially arranged transportation services for Bangladeshi Umrah and Hajj pilgrims. You can
                choose transportation services according to your preference whether traveling individually, with family,
                or in a group.
              </p>
            </div>

            {/* Jeddah Airport to Makkah */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 bg-green-50 py-3 rounded-lg">
                Jeddah Airport to Makkah
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/private00.png"
                      alt="Private Car"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Private Car</h4>
                    <p className="text-gray-600 mb-4">
                      Modern AC cars for comfortable and safe travel. Maximum 4 passengers.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Complimentary food and water</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">350 SAR</span>
                      <Link
                        href="/book-transportation/jeddah-makkah-private-car"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/jeddahtomakkah.png"
                      alt="Microbus"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Microbus</h4>
                    <p className="text-gray-600 mb-4">
                      Comfortable microbus for families or small groups. Maximum 10 passengers.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Complimentary food and water</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">650 SAR</span>
                      <Link
                        href="/book-transportation/jeddah-makkah-microbus"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/minibus00.png"
                      alt="Small Bus"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Small Bus</h4>
                    <p className="text-gray-600 mb-4">
                      Comfortable bus for medium-sized groups. Maximum 25 passengers.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Complimentary food and water</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">1,200 SAR</span>
                      <Link
                        href="/book-transportation/jeddah-makkah-small-bus"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/bigbus00.png"
                      alt="Large Bus"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Large Bus</h4>
                    <p className="text-gray-600 mb-4">Comfortable bus for large groups. Maximum 50 passengers.</p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Complimentary food and water</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">2,000 SAR</span>
                      <Link
                        href="/book-transportation/jeddah-makkah-large-bus"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/haramain03.png"
                      alt="Haramain Train"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Haramain Train</h4>
                    <p className="text-gray-600 mb-4">
                      Fast and comfortable Haramain High-Speed Train from Jeddah to Makkah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fast journey (40 minutes)</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Comfortable seating</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free WiFi</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">80 SAR/person</span>
                      <Link
                        href="/book-haramain-train/jeddah-makkah"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation within Makkah */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 bg-green-50 py-3 rounded-lg">
                Transportation Within Makkah
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/holi00.png"
                      alt="Holy Sites Tour"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Holy Sites Tour</h4>
                    <p className="text-gray-600 mb-4">
                      Special transportation service for visiting the holy sites in Makkah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Jabal Al-Noor</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Jabal Thawr</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Other historical sites</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">200 SAR/person</span>
                      <Link
                        href="/book-transportation/makkah-holy-sites-tour"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/haram00.png"
                      alt="Daily Haram Transfer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Daily Haram Transfer</h4>
                    <p className="text-gray-600 mb-4">
                      Regular shuttle service for daily commute from hotel to Haram Sharif.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>5 times daily service</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fixed schedule</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">50 SAR/day</span>
                      <Link
                        href="/book-transportation/makkah-daily-haram-transfer"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/private00.png"
                      alt="Private Car Rental"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Private Car Rental</h4>
                    <p className="text-gray-600 mb-4">
                      Private car rental for personal use during your stay in Makkah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>24-hour availability</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Travel according to your preference</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">300 SAR/day</span>
                      <Link
                        href="/book-transportation/makkah-private-car-rental"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Makkah to Madinah */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 bg-green-50 py-3 rounded-lg">Makkah to Madinah</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/bigbus00.png"
                      alt="VIP Bus to Madinah"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">VIP Bus</h4>
                    <p className="text-gray-600 mb-4">Comfortable VIP bus service for travel from Makkah to Madinah.</p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Luxurious seating</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free WiFi</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Food and beverages</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">150 SAR/person</span>
                      <Link
                        href="/book-transportation/makkah-madinah-vip-bus"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/haramain02.png"
                      alt="Haramain Train"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Haramain Train</h4>
                    <p className="text-gray-600 mb-4">
                      Fast and comfortable Haramain High-Speed Train from Makkah to Madinah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fast journey (2.5 hours)</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Comfortable seating</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free WiFi</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">120 SAR/person</span>
                      <Link
                        href="/book-haramain-train/makkah-madinah"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/private00.png"
                      alt="Private Car"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Private Car</h4>
                    <p className="text-gray-600 mb-4">
                      Private car service for individual and family travel from Makkah to Madinah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Travel at your preferred time</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Comfortable journey with breaks</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">800 SAR</span>
                      <Link
                        href="/book-transportation/makkah-madinah-private-car"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation within Madinah */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 bg-green-50 py-3 rounded-lg">
                Transportation Within Madinah
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/madinah00.png"
                      alt="Madinah Ziyarah Tour"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Madinah Ziyarah Tour</h4>
                    <p className="text-gray-600 mb-4">
                      Special transportation service for visiting historical sites in Madinah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Mount Uhud</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Quba Mosque</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Other historical sites</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">150 SAR/person</span>
                      <Link
                        href="/book-transportation/madinah-ziyarah-tour"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/nabawi00.png"
                      alt="Daily Masjid Nabawi Transfer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Daily Masjid Nabawi Transfer</h4>
                    <p className="text-gray-600 mb-4">
                      Regular shuttle service for daily commute from hotel to Masjid Nabawi.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>5 times daily service</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fixed schedule</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">40 SAR/day</span>
                      <Link
                        href="/book-transportation/madinah-daily-mosque-transfer"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/private00.png"
                      alt="Private Car Rental"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Private Car Rental</h4>
                    <p className="text-gray-600 mb-4">
                      Private car rental for personal use during your stay in Madinah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>24-hour availability</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Travel according to your preference</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">250 SAR/day</span>
                      <Link
                        href="/book-transportation/madinah-private-car-rental"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Madinah to Makkah */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 bg-green-50 py-3 rounded-lg">Madinah to Makkah</h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/bigbus00.png"
                      alt="VIP Bus to Makkah"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">VIP Bus</h4>
                    <p className="text-gray-600 mb-4">Comfortable VIP bus service for travel from Madinah to Makkah.</p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Luxurious seating</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free WiFi</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Food and beverages</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">150 SAR/person</span>
                      <Link
                        href="/book-transportation/madinah-makkah-vip-bus"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/haramain01.png"
                      alt="Haramain Train"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Haramain Train</h4>
                    <p className="text-gray-600 mb-4">
                      Fast and comfortable Haramain High-Speed Train from Madinah to Makkah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fast journey (2.5 hours)</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Comfortable seating</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Free WiFi</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">120 SAR/person</span>
                      <Link
                        href="/book-haramain-train/madinah-makkah"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/private00.png"
                      alt="Private Car"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Private Car</h4>
                    <p className="text-gray-600 mb-4">
                      Private car service for individual and family travel from Madinah to Makkah.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Travel at your preferred time</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Comfortable journey with breaks</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">800 SAR</span>
                      <Link
                        href="/book-transportation/madinah-makkah-private-car"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Madinah to Jeddah Airport */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 bg-green-50 py-3 rounded-lg">
                Madinah to Jeddah Airport
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/private00.png"
                      alt="Private Car"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Private Car</h4>
                    <p className="text-gray-600 mb-4">
                      Comfortable private car for travel from Madinah to Jeddah Airport.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Pick-up according to flight time</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">900 SAR</span>
                      <Link
                        href="/book-transportation/madinah-jeddah-private-car"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/minibus00.png"
                      alt="Microbus"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Microbus</h4>
                    <p className="text-gray-600 mb-4">Family microbus for travel from Madinah to Jeddah Airport.</p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Air-conditioned vehicle</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Experienced driver</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Pick-up according to flight time</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">1,200 SAR</span>
                      <Link
                        href="/book-transportation/madinah-jeddah-microbus"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src="https://mj-ahmad.github.io/mja2025/img/haramain00.png"
                      alt="Haramain Train + Transfer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">Haramain Train + Transfer</h4>
                    <p className="text-gray-600 mb-4">
                      Haramain Train from Madinah to Makkah and transfer from Makkah to Jeddah Airport.
                    </p>
                    <ul className="mb-4 space-y-2">
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Fast journey</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Integrated ticket</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Pick-up according to flight time</span>
                      </li>
                    </ul>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">200 SAR/person</span>
                      <Link
                        href="/book-haramain-train/madinah-jeddah"
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Package */}
            <div className="mb-16">
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Custom Transportation Package</h3>
                <p className="text-lg text-center mb-8">
                  Want to create your own transportation package according to your needs? Contact us.
                </p>

                <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="group-size" className="block text-sm font-medium text-gray-700 mb-1">
                          Group Size
                        </label>
                        <input
                          type="number"
                          id="group-size"
                          min="1"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="arrival-date" className="block text-sm font-medium text-gray-700 mb-1">
                          Arrival Date
                        </label>
                        <input
                          type="date"
                          id="arrival-date"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="departure-date" className="block text-sm font-medium text-gray-700 mb-1">
                          Departure Date
                        </label>
                        <input
                          type="date"
                          id="departure-date"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requirements
                      </label>
                      <textarea
                        id="requirements"
                        rows={4}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Write in detail about your required transportation services..."
                      ></textarea>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                      >
                        Send Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Transportation Services?</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
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
                  </div>
                  <h3 className="text-xl font-bold mb-2">Punctuality</h3>
                  <p className="text-gray-600">
                    Our drivers are always on time, ensuring you never miss important moments of your pilgrimage.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Safety</h3>
                  <p className="text-gray-600">
                    Your safety is our priority. All our vehicles are regularly maintained and our drivers are
                    experienced professionals.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Experienced Drivers</h3>
                  <p className="text-gray-600">
                    Our drivers are not only skilled in navigating the roads but are also knowledgeable about the holy
                    sites and can provide valuable information.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  We are always committed to making your journey safe, comfortable, and meaningful. Our transportation
                  services will help you save time and energy to focus on your Umrah journey, allowing you to
                  concentrate on your spiritual experience.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Contact Us for More Information
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

