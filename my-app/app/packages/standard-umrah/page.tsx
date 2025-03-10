import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function StandardUmrahPackage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh]">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/standard00.png"
            alt="Standard Umrah Package"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Standard Umrah Package</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                A comprehensive package for a fulfilling Umrah experience.
              </p>
            </div>
          </div>
        </section>

        {/* Package Details */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">Standard Umrah Package</h2>
                      <p className="text-gray-600 mt-2">15 Days | Makkah & Madinah</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-3xl font-bold text-green-600">BDT 210,000</span>
                      <span className="text-gray-500 text-sm"> / per person</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Package Overview</h3>
                    <p className="text-gray-700 mb-4">
                      Our Standard Umrah Package is designed to provide pilgrims with a comprehensive and spiritually
                      fulfilling Umrah experience. This package includes all essential services needed for a comfortable
                      journey to the holy cities of Makkah and Madinah.
                    </p>
                    <p className="text-gray-700">
                      With a duration of 15 days, pilgrims will have ample time to perform their religious obligations
                      and explore the historical and spiritual sites in both cities. Our experienced guides will provide
                      assistance throughout the journey, ensuring a smooth and meaningful pilgrimage.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Package Includes</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Return flights from Dhaka to Jeddah</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Umrah visa processing</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">8 nights accommodation in Makkah (3-star hotel)</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">5 nights accommodation in Madinah (3-star hotel)</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Daily breakfast and dinner</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Transportation between Jeddah, Makkah, and Madinah</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Guided Umrah performance</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Guided ziyarah tours in Makkah and Madinah</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Ihram for men</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">5L Zamzam water</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Pre-departure orientation</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">24/7 support from our representatives</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Accommodation Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Makkah Accommodation</h4>
                        <p className="text-gray-700 mb-2">Al Kiswah Towers Hotel or similar</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• 1.2 km from Haram</li>
                          <li>• Free shuttle service to Haram</li>
                          <li>• Triple/Quad sharing rooms</li>
                          <li>• Free Wi-Fi</li>
                          <li>• Room service</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Madinah Accommodation</h4>
                        <p className="text-gray-700 mb-2">Al Ansar Hotel or similar</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• 500m from Masjid Al Nabawi</li>
                          <li>• Walking distance to Haram</li>
                          <li>• Triple/Quad sharing rooms</li>
                          <li>• Free Wi-Fi</li>
                          <li>• Room service</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Itinerary</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Day 1: Departure from Dhaka</h4>
                        <p className="text-gray-700">
                          Departure from Hazrat Shahjalal International Airport, Dhaka to Jeddah. Arrival at King
                          Abdulaziz International Airport, Jeddah. Transfer to hotel in Makkah.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Day 2-8: Makkah</h4>
                        <p className="text-gray-700">
                          Perform Umrah with guidance. Visit important sites in Makkah including Jabal al-Noor, Jabal
                          Thawr, and other historical places.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Day 9: Transfer to Madinah</h4>
                        <p className="text-gray-700">
                          Check-out from Makkah hotel. Transfer to Madinah by air-conditioned bus. Check-in at Madinah
                          hotel.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Day 10-13: Madinah</h4>
                        <p className="text-gray-700">
                          Visit Masjid Al Nabawi and offer prayers. Guided ziyarah tour to historical sites in Madinah
                          including Quba Mosque, Qiblatain Mosque, Mount Uhud, and other significant places.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Day 14: Return to Makkah</h4>
                        <p className="text-gray-700">
                          Check-out from Madinah hotel. Transfer to Makkah for final Tawaf al-Wida (Farewell Tawaf).
                          Transfer to Jeddah.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Day 15: Departure from Jeddah</h4>
                        <p className="text-gray-700">
                          Departure from King Abdulaziz International Airport, Jeddah to Hazrat Shahjalal International
                          Airport, Dhaka.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link
                      href="/book/standard-umrah"
                      className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                    >
                      Book This Package
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

