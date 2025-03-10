import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function PremiumHajjPackage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh]">
          <Image
            src="https://mj-ahmad.github.io/mja2025/img/hajj00.png"
            alt="Premium Hajj Package"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Premium Hajj Package</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Premium accommodations and services for a comfortable Hajj experience.
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
                      <h2 className="text-3xl font-bold text-gray-800">Premium Hajj Package</h2>
                      <p className="text-gray-600 mt-2">30 Days | Makkah, Madinah & Holy Sites</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <span className="text-3xl font-bold text-green-600">BDT 750,000</span>
                      <span className="text-gray-500 text-sm"> / per person</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Package Overview</h3>
                    <p className="text-gray-700 mb-4">
                      Our Premium Hajj Package offers a comfortable and spiritually enriching experience for pilgrims
                      seeking quality accommodations and services during the sacred journey of Hajj. This package
                      includes premium accommodations, transportation, and personalized services to ensure a memorable
                      and hassle-free Hajj experience.
                    </p>
                    <p className="text-gray-700">
                      With a duration of 30 days, pilgrims will have ample time to perform all the rituals of Hajj and
                      explore the historical and spiritual sites in both Makkah and Madinah. Our experienced guides will
                      provide personalized assistance throughout the journey, ensuring a smooth and meaningful
                      pilgrimage.
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
                        <span className="text-gray-700">Return flights from Dhaka to Jeddah (Premium Economy)</span>
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
                        <span className="text-gray-700">Hajj visa processing</span>
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
                        <span className="text-gray-700">15 nights accommodation in Makkah (4-star hotel)</span>
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
                        <span className="text-gray-700">8 nights accommodation in Madinah (4-star hotel)</span>
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
                        <span className="text-gray-700">Premium tents in Mina (4-5 persons per tent)</span>
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
                        <span className="text-gray-700">Premium tents in Arafat and Muzdalifah</span>
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
                        <span className="text-gray-700">Full board meals (breakfast, lunch, and dinner)</span>
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
                        <span className="text-gray-700">Premium transportation between all locations</span>
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
                        <span className="text-gray-700">Guided Hajj performance with experienced scholars</span>
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
                        <span className="text-gray-700">Premium quality Ihram for men</span>
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
                        <span className="text-gray-700">10L Zamzam water</span>
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
                        <span className="text-gray-700">Comprehensive Hajj training program before departure</span>
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
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">Complimentary mobile SIM card with data package</span>
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
                        <span className="text-gray-700">Premium travel kit and luggage</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Accommodation Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Makkah Accommodation</h4>
                        <p className="text-gray-700 mb-2">Hilton Makkah Convention Hotel or similar</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• 500m from Haram</li>
                          <li>• Free shuttle service to Haram</li>
                          <li>• Double/Triple sharing rooms</li>
                          <li>• Free high-speed Wi-Fi</li>
                          <li>• 24/7 room service</li>
                          <li>• Multiple dining options</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-lg mb-2">Madinah Accommodation</h4>
                        <p className="text-gray-700 mb-2">Crowne Plaza Madinah or similar</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• 300m from Masjid Al Nabawi</li>
                          <li>• Walking distance to Haram</li>
                          <li>• Double/Triple sharing rooms</li>
                          <li>• Free high-speed Wi-Fi</li>
                          <li>• 24/7 room service</li>
                          <li>• Multiple dining options</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Hajj Itinerary Highlights</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Pre-Hajj (Days 1-15)</h4>
                        <p className="text-gray-700">
                          Arrival in Madinah. Stay in Madinah for 8 days. Visit Masjid Al Nabawi and historical sites.
                          Transfer to Makkah. Perform Umrah. Stay in Makkah and prepare for Hajj.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">8th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Enter into the state of Ihram. Proceed to Mina. Stay overnight in premium air-conditioned
                          tents.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">9th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Proceed to Arafat. Perform Wuquf (standing) at Arafat. Move to Muzdalifah after sunset. Stay
                          overnight in Muzdalifah.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">10th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Proceed to Mina. Perform Rami (stoning) at Jamarat. Perform Qurbani (sacrifice). Perform Tawaf
                          al-Ifadah and Sa'i. Return to Mina.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">11th-13th Dhul Hijjah</h4>
                        <p className="text-gray-700">
                          Stay in Mina. Perform Rami at Jamarat each day. Return to Makkah after the 13th.
                        </p>
                      </div>
                      <div className="border-l-4 border-green-500 pl-4">
                        <h4 className="font-semibold">Post-Hajj (Days 20-30)</h4>
                        <p className="text-gray-700">
                          Stay in Makkah. Perform additional Tawaf and prayers. Visit historical sites in Makkah.
                          Prepare for departure. Perform Tawaf al-Wida (Farewell Tawaf). Return to Dhaka.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Link
                      href="/book/premium-hajj"
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

