import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HajjPackageDetail() {
  const packageData = {
    id: "hajj-package",
    title: "Complete Hajj Package 2025",
    price: "BDT 840,000",
    duration: "21 Days",
    description: "Comprehensive Hajj package with all arrangements taken care of.",
    longDescription:
      "Our Complete Hajj Package 2025 offers a comprehensive spiritual journey with premium accommodations and services. This all-inclusive package ensures that every aspect of your Hajj pilgrimage is meticulously planned and executed, allowing you to focus entirely on your spiritual journey.",
    features: [
      "5★ Hotel in Makkah (10 nights)",
      "5★ Hotel in Madinah (5 nights)",
      "Premium Tents in Mina & Arafat",
      "Return Flights from Jeddah",
      "Hajj Visa Processing",
      "All Transportation",
      "Guided Rituals",
      "All Meals Included",
      "24/7 Support Team",
      "Experienced Scholars for Guidance",
      "Comprehensive Pre-Hajj Training",
      "Medical Support Throughout",
      "Premium Ihram Clothing Kit",
    ],
    image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    itinerary: [
      {
        day: 1,
        title: "Departure from Dhaka",
        description:
          "Depart from Dhaka Heathrow Airport. Our representatives will assist you with check-in procedures.",
      },
      {
        day: 2,
        title: "Arrival in Jeddah",
        description:
          "Arrive at King Abdulaziz International Airport in Jeddah. Our representatives will assist with immigration procedures. Transfer to your hotel in Madinah.",
      },
      {
        day: 3,
        title: "Madinah Ziyarah",
        description: "Visit Masjid Al-Nabawi and perform prayers. Guided tour of historical sites in Madinah.",
      },
      {
        day: 4,
        title: "Madinah Exploration",
        description:
          "Visit Quba Mosque, Uhud Mountain, and other significant locations. Evening free for prayers at Masjid Al-Nabawi.",
      },
      {
        day: 5,
        title: "Free Day in Madinah",
        description: "Free day for worship and personal reflection at Masjid Al-Nabawi.",
      },
      {
        day: 6,
        title: "Transfer to Makkah",
        description:
          "After Fajr prayer, depart for Makkah. Enter into the state of Ihram before reaching the Miqat. Perform Umrah upon arrival in Makkah.",
      },
      {
        day: 7,
        title: "Makkah Stay",
        description: "Perform prayers at Masjid Al-Haram. Tawaf and Sa'i as desired.",
      },
      {
        day: 8,
        title: "Makkah Exploration",
        description: "Visit historical sites in Makkah including Jabal al-Noor (Cave of Hira) and Jabal Thawr.",
      },
      {
        day: 9,
        title: "Preparation for Hajj",
        description: "Attend special lectures on Hajj rituals. Final preparations for the Hajj journey.",
      },
      {
        day: 10,
        title: "8th Dhul-Hijjah - Mina",
        description: "Move to Mina after Fajr prayer. Spend the day and night in Mina performing prayers.",
      },
      {
        day: 11,
        title: "9th Dhul-Hijjah - Arafat & Muzdalifah",
        description:
          "Move to Arafat after Fajr prayer. Perform Wuquf (standing) at Arafat. Move to Muzdalifah after sunset.",
      },
      {
        day: 12,
        title: "10th Dhul-Hijjah - Jamarat & Tawaf",
        description:
          "Collect pebbles from Muzdalifah. Return to Mina for Rami (stoning) of Jamarat. Perform Tawaf Al-Ifadah and Sa'i in Makkah. Return to Mina.",
      },
      {
        day: 13,
        title: "11th Dhul-Hijjah - Jamarat",
        description: "Perform Rami of all three Jamarat. Spend the night in Mina.",
      },
      {
        day: 14,
        title: "12th Dhul-Hijjah - Jamarat & Return to Makkah",
        description: "Perform Rami of all three Jamarat. Return to your hotel in Makkah.",
      },
      {
        day: 15,
        title: "Rest in Makkah",
        description: "Rest day in Makkah. Perform prayers at Masjid Al-Haram.",
      },
      {
        day: 16,
        title: "Makkah Stay",
        description: "Free day for worship and personal reflection at Masjid Al-Haram.",
      },
      {
        day: 17,
        title: "Makkah Stay",
        description: "Continue your spiritual journey with prayers at Masjid Al-Haram.",
      },
      {
        day: 18,
        title: "Farewell Tawaf",
        description: "Perform Tawaf Al-Wida (Farewell Tawaf). Prepare for departure.",
      },
      {
        day: 19,
        title: "Transfer to Jeddah",
        description: "Transfer to Jeddah for a day of rest before the return flight.",
      },
      {
        day: 20,
        title: "Jeddah City Tour",
        description: "Optional city tour of Jeddah. Last-minute shopping for souvenirs.",
      },
      {
        day: 21,
        title: "Return to Dhaka",
        description: "Transfer to King Abdulaziz International Airport for your return flight to Dhaka.",
      },
    ],
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

      <main className="flex-grow">
        <div className="relative h-[40vh]">
          <Image src={packageData.image || "/placeholder.svg"} alt={packageData.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{packageData.title}</h1>
              <p className="text-xl text-white/80">
                {packageData.duration} | {packageData.price}
              </p>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold mb-4">Package Overview</h2>
                <p className="text-gray-700 mb-6">{packageData.longDescription}</p>

                <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                <div className="space-y-6">
                  {packageData.itinerary.map((day) => (
                    <div key={day.day} className="border-l-4 border-green-500 pl-4">
                      <h3 className="text-xl font-bold">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-gray-50 p-6 rounded-lg sticky top-6">
                  <h3 className="text-xl font-bold mb-4">Package Details</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">{packageData.price}</span>
                    <span className="text-gray-500 text-sm"> / per person</span>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Package Includes:</h4>
                    <ul className="space-y-2">
                      {packageData.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href={`/book/${packageData.id}`}
                    className="block w-full bg-green-600 text-white text-center py-3 rounded-md font-medium hover:bg-green-700 transition-colors duration-300"
                  >
                    Book Now
                  </Link>
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

