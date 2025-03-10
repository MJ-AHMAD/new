import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function RamadanUmrahPackageDetail() {
  const packageData = {
    id: "ramadan-umrah",
    title: "Ramadan Umrah Special",
    price: "BDT 322,000",
    duration: "15 Days",
    description: "Experience the blessed month of Ramadan in the holy cities.",
    longDescription:
      "Our Ramadan Umrah Special offers a unique opportunity to experience the blessed month of Ramadan in the holy cities of Makkah and Madinah. This package is designed to provide a spiritually enriching experience during this sacred time, with special arrangements for Iftar, Suhoor, and Taraweeh prayers.",
    features: [
      "4★ Hotel in Makkah (10 nights)",
      "4★ Hotel in Madinah (3 nights)",
      "Return Flights from Dubai or Qatar",
      "Visa Processing",
      "Airport Transfers",
      "Iftar & Suhoor Meals",
      "Special Ramadan Programs",
      "Guided Ziyarah Tours",
      "Assistance with Umrah Rituals",
      "24/7 Support from Our Team",
      "Special Taraweeh Prayer Arrangements",
      "Laylatul Qadr Programs",
      "Islamic Lectures by Scholars",
    ],
    image: "https://iramservices.com/storage/photos/1/63b06b7338759.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah",
        description:
          "Arrive at King Abdulaziz International Airport in Jeddah. Our representative will meet you and assist with immigration procedures. Transfer to your hotel in Makkah in time for Iftar.",
      },
      {
        day: 2,
        title: "Umrah Rituals",
        description:
          "After Fajr prayer, our guide will assist you with the Umrah rituals including Tawaf, Sa'i, and other essential practices. Rest before Iftar and join special Taraweeh prayers at Masjid Al-Haram.",
      },
      {
        day: 3,
        title: "Makkah Ziyarah",
        description:
          "Visit historical sites in Makkah including Jabal al-Noor (Cave of Hira) and Jabal Thawr. Return to hotel for rest before Iftar. Evening Taraweeh prayers at Masjid Al-Haram.",
      },
      {
        day: 4,
        title: "Spiritual Day in Makkah",
        description:
          "Full day for worship at Masjid Al-Haram. Special Islamic lecture after Asr prayer. Group Iftar at the hotel followed by Taraweeh prayers.",
      },
      {
        day: 5,
        title: "Second Umrah",
        description:
          "Opportunity to perform a second Umrah with guidance from our experienced team. Rest before Iftar and evening Taraweeh prayers.",
      },
      {
        day: 6,
        title: "Ramadan Reflection Day",
        description:
          "Day dedicated to Quran recitation and reflection. Special program on the virtues of Ramadan after Asr prayer. Group Iftar and Taraweeh prayers.",
      },
      {
        day: 7,
        title: "Free Day in Makkah",
        description:
          "Free day for personal worship and reflection. Optional shopping time at nearby markets. Group Iftar and Taraweeh prayers.",
      },
      {
        day: 8,
        title: "Spiritual Enhancement",
        description:
          "Special workshop on enhancing spiritual connection during Ramadan. Rest before Iftar and evening Taraweeh prayers.",
      },
      {
        day: 9,
        title: "Third Umrah",
        description:
          "Opportunity to perform a third Umrah with guidance from our team. Rest before Iftar and evening Taraweeh prayers.",
      },
      {
        day: 10,
        title: "Last Day in Makkah",
        description:
          "Final day for worship at Masjid Al-Haram. Special farewell Iftar at the hotel followed by Taraweeh prayers.",
      },
      {
        day: 11,
        title: "Transfer to Madinah",
        description:
          "After Fajr prayer, check out from your hotel in Makkah and transfer to Madinah. Check in at your hotel and visit Masjid Al-Nabawi for prayers. Group Iftar and Taraweeh prayers.",
      },
      {
        day: 12,
        title: "Madinah Ziyarah",
        description:
          "Guided tour of historical sites in Madinah including Quba Mosque, Uhud Mountain, and other significant locations. Return for rest before Iftar and Taraweeh prayers at Masjid Al-Nabawi.",
      },
      {
        day: 13,
        title: "Spiritual Day in Madinah",
        description:
          "Full day for worship at Masjid Al-Nabawi. Special lecture on the Prophet's life in Madinah. Group Iftar and Taraweeh prayers.",
      },
      {
        day: 14,
        title: "Last Day in Madinah",
        description:
          "Final day for worship at Masjid Al-Nabawi. Visit to Al-Baqi cemetery. Special farewell Iftar and last Taraweeh prayers.",
      },
      {
        day: 15,
        title: "Departure",
        description: "Check out from your hotel and transfer to Jeddah or Madinah airport for your return flight.",
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

