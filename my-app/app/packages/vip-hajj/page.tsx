import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function VIPHajjPackage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh]">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/holi00.png"
            alt="VIP Hajj Package"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">VIP Hajj Package</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Luxury accommodations and personalized services for a VIP Hajj experience.
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
                      <h2 className="text-3xl font-bold text-gray-800">VIP Hajj Package</h2>
                      <p className="text-gray-600 mt-2">35 Days | Makkah, Madinah & Holy Sites</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-3xl font-bold text-green-600">BDT 950,000</span>
                      <span className="text-gray-500 text-sm"> / per person</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Package Overview</h3>
                    <p className="text-gray-700 mb-4">
                      Our VIP Hajj Package offers the ultimate luxury experience for pilgrims seeking the highest level
                      of comfort and service during the sacred journey of Hajj. This exclusive package includes luxury
                      accommodations, VIP transportation, and personalized services to ensure a truly memorable and
                      stress-free Hajj experience.
                    </p>
                    <p className="text-gray-700">
                      With a duration of 35 days, pilgrims will have ample time to perform all the rituals of Hajj and
                      explore the historical and spiritual sites in both Makkah and Madinah at a relaxed pace. Our
                      expert guides and dedicated VIP representatives will provide personalized assistance throughout
                      the journey, ensuring a smooth and meaningful pilgrimage.
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
                        <span className="text-gray-700">Return flights from Dhaka to Jeddah (Business Class)</span>
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
                        <span className="text-gray-700">Express Hajj visa processing</span>
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
                        <span className="text-gray-700">18 nights accommodation in Makkah (5-star luxury hotel)</span>
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
                        <span className="text-gray-700">10 nights accommodation in Madinah (5-star luxury hotel)</span>
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
                        <span className="text-gray-700">VIP tents in Mina (2-3 persons per tent)</span>
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
                        <span className="text-gray-700">VIP tents in Arafat and Muzdalifah</span>
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
                        <span className="text-gray-700">Gourmet meals (breakfast, lunch, and dinner)</span>
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
                        <span className="text-gray-700">Luxury private transportation between all locations</span>
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
                        <span className="text-gray-700">Private guided Hajj performance with renowned scholars</span>
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
                        <span className="text-gray-700">Private guided ziyarah tours in Makkah and Madinah</span>
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
                        <span className="text-gray-700">Luxury quality Ihram for men</span>
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
                        <span className="text-gray-700">20L Zamzam water</span>
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
                        <span className="text-gray-700">Exclusive Hajj training program before departure</span>
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
                        <span className="text-gray-700">24/7 dedicated VIP support from our representatives</span>
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
                        <span className="text-gray-700">Complimentary premium mobile SIM card with unlimited data</span>
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
                        <span className="text-gray-700">Luxury travel kit and premium luggage set</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Accommodation Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Makkah Accommodation</h4>
                        <p className="text-gray-700 mb-2">Raffles Makkah Palace or similar</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Directly connected to Haram</li>
                          <li>• Haram view suites</li>
                          <li>• Single/Double occupancy</li>
                          <li>• Free ultra-high-speed Wi-Fi</li>
                          <li>• 24/7 butler service</li>
                          <li>• Gourmet dining options</li>
                          <li>• Spa and wellness center</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Madinah Accommodation</h4>
                        <p className="text-gray-700 mb-2">The Ritz-Carlton Madinah or similar</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Directly facing Masjid Al Nabawi</li>
                          <li>• Haram view suites</li>
                          <li>• Single/Double occupancy</li>
                          <li>• Free ultra-high-speed Wi-Fi</li>
                          <li>• 24/7 butler service</li>
                          <li>• Gourmet dining options</li>
                          <li>• Spa and wellness center</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Hajj Itinerary Highlights</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Pre-Hajj (Days 1-20)</h4>
                        <p className="text-gray-700">
                          VIP arrival in Madinah. Stay in Madinah for 10 days. Visit Masjid Al Nabawi and historical
                          sites with private guides. Transfer to Makkah in luxury vehicles. Perform Umrah with VIP
                          arrangements. Stay in Makkah and prepare for Hajj with spiritual guidance from renowned
                          scholars.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">8th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Enter into the state of Ihram. Proceed to Mina in luxury air-conditioned vehicles. Stay
                          overnight in VIP air-conditioned tents with premium amenities.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">9th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Proceed to Arafat in luxury vehicles. Perform Wuquf (standing) at Arafat in VIP tents with
                          full amenities. Move to Muzdalifah after sunset in luxury vehicles. Stay overnight in VIP
                          arrangements in Muzdalifah.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">10th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Proceed to Mina in luxury vehicles. Perform Rami (stoning) at Jamarat with VIP access. Perform
                          Qurbani (sacrifice) with premium arrangements. Perform Tawaf al-Ifadah and Sa'i with VIP
                          access. Return to VIP tents in Mina.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">11th-13th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Stay in VIP tents in Mina. Perform Rami at Jamarat each day with VIP access. Return to luxury
                          hotel in Makkah after the 13th.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Post-Hajj (Days 25-35)</h4>
                        <p className="text-gray-700">
                          Stay in luxury hotel in Makkah. Perform additional Tawaf and prayers with VIP access. Visit
                          historical sites in Makkah with private guides. Prepare for departure. Perform Tawaf al-Wida
                          (Farewell Tawaf) with VIP arrangements. VIP departure from Jeddah to Dhaka.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link
                      href="/book/vip-hajj"
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

