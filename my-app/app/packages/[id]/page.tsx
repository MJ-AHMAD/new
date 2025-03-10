import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Footer } from "@/components/footer"

interface PackageData {
  id: string
  title: string
  price: string
  duration: string
  description: string
  longDescription: string
  features: string[]
  image: string
  itinerary: {
    day: number
    title: string
    description: string
  }[]
}

const packagesData: PackageData[] = [
  {
    id: "7-day-economy",
    title: "7 Days Economy Umrah Package",
    price: "BDT 210,000",
    duration: "7 Days",
    description: "Perfect for those seeking a brief but fulfilling spiritual journey.",
    longDescription:
      "Our 7-day Economy Umrah Package is designed for pilgrims who wish to perform their Umrah with all essential services provided at an affordable price. This package ensures you have a comfortable and spiritually fulfilling experience while visiting the holy cities of Makkah and Madinah.",
    features: [
      "3★ Hotel in Makkah (3 nights)",
      "3★ Hotel in Madinah (2 nights)",
      "Return Flights from Dubai or Qatar",
      "Visa Processing",
      "Airport Transfers",
      "Guided Ziyarah Tours",
      "Daily Breakfast",
      "Assistance with Umrah Rituals",
      "24/7 Support from Our Team",
    ],
    image: "https://iramservices.com/storage/photos/1/63b06b7338759.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah",
        description:
          "Arrive at King Abdulaziz International Airport in Jeddah. Our representative will meet you and assist with immigration procedures. Transfer to your hotel in Makkah.",
      },
      {
        day: 2,
        title: "Umrah Rituals",
        description:
          "After Fajr prayer, our guide will assist you with the Umrah rituals including Tawaf, Sa'i, and other essential practices. Rest of the day free for prayers at Masjid Al-Haram.",
      },
      {
        day: 3,
        title: "Makkah Ziyarah",
        description:
          "Visit historical sites in Makkah including Jabal al-Noor (Cave of Hira), Jabal Thawr, and other significant locations. Evening free for prayers.",
      },
      {
        day: 4,
        title: "Transfer to Madinah",
        description:
          "After breakfast, check out from your hotel in Makkah and transfer to Madinah. Check in at your hotel and visit Masjid Al-Nabawi for prayers.",
      },
      {
        day: 5,
        title: "Madinah Ziyarah",
        description:
          "Guided tour of historical sites in Madinah including Quba Mosque, Uhud Mountain, and other significant locations. Evening free for prayers at Masjid Al-Nabawi.",
      },
      {
        day: 6,
        title: "Free Day in Madinah",
        description:
          "Free day for worship and personal reflection at Masjid Al-Nabawi. Optional shopping time for souvenirs and gifts.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Check out from your hotel and transfer to Jeddah or Madinah airport for your return flight.",
      },
    ],
  },
  {
    id: "10-day-standard",
    title: "10 Days Standard Umrah Package",
    price: "BDT 266,000",
    duration: "10 Days",
    description: "Our most popular package with balanced stay in both holy cities.",
    longDescription:
      "The 10-day Standard Umrah Package offers a perfect balance between spiritual activities and comfort. With extended stays in both Makkah and Madinah, pilgrims have ample time for worship, reflection, and exploring the historical sites of these blessed cities.",
    features: [
      "4★ Hotel in Makkah (5 nights)",
      "4★ Hotel in Madinah (3 nights)",
      "Return Flights from Dubai or Qatar",
      "Visa Processing",
      "Airport Transfers",
      "Guided Ziyarah Tours",
      "Daily Breakfast & Dinner",
      "Assistance with Umrah Rituals",
      "24/7 Support from Our Team",
      "Complimentary Prayer Mat and Ihram",
    ],
    image: "https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah",
        description:
          "Arrive at King Abdulaziz International Airport in Jeddah. Our representative will meet you and assist with immigration procedures. Transfer to your hotel in Makkah.",
      },
      {
        day: 2,
        title: "Umrah Rituals",
        description:
          "After Fajr prayer, our guide will assist you with the Umrah rituals including Tawaf, Sa'i, and other essential practices. Rest of the day free for prayers at Masjid Al-Haram.",
      },
      {
        day: 3,
        title: "Makkah Ziyarah",
        description:
          "Visit historical sites in Makkah including Jabal al-Noor (Cave of Hira), Jabal Thawr, and other significant locations. Evening free for prayers.",
      },
      {
        day: 4,
        title: "Free Day in Makkah",
        description:
          "Full day for worship and personal reflection at Masjid Al-Haram. Optional shopping time at nearby markets.",
      },
      {
        day: 5,
        title: "Second Umrah",
        description:
          "Opportunity to perform a second Umrah with guidance from our experienced team. Evening free for prayers.",
      },
      {
        day: 6,
        title: "Transfer to Madinah",
        description:
          "After breakfast, check out from your hotel in Makkah and transfer to Madinah. Check in at your hotel and visit Masjid Al-Nabawi for prayers.",
      },
      {
        day: 7,
        title: "Madinah Ziyarah",
        description:
          "Guided tour of historical sites in Madinah including Quba Mosque, Uhud Mountain, and other significant locations. Evening free for prayers at Masjid Al-Nabawi.",
      },
      {
        day: 8,
        title: "Free Day in Madinah",
        description:
          "Free day for worship and personal reflection at Masjid Al-Nabawi. Optional shopping time for souvenirs and gifts.",
      },
      {
        day: 9,
        title: "Second Day in Madinah",
        description:
          "Continue your spiritual journey with prayers at Masjid Al-Nabawi. Visit to Al-Baqi cemetery and other important sites.",
      },
      {
        day: 10,
        title: "Departure",
        description: "Check out from your hotel and transfer to Jeddah or Madinah airport for your return flight.",
      },
    ],
  },
  {
    id: "15-day-premium",
    title: "15 Days Premium Umrah Package",
    price: "BDT 392,000",
    duration: "15 Days",
    description: "Luxury experience with extended stay for complete spiritual immersion.",
    longDescription:
      "Our 15-day Premium Umrah Package offers the ultimate spiritual journey with luxurious accommodations and comprehensive services. This extended stay allows pilgrims to fully immerse themselves in worship and exploration of the holy cities, with ample time for reflection and prayer.",
    features: [
      "5★ Hotel in Makkah (8 nights)",
      "5★ Hotel in Madinah (5 nights)",
      "Return Flights from Dubai or Qatar",
      "Premium Visa Processing",
      "Private Airport Transfers",
      "Extensive Guided Ziyarah Tours",
      "All Meals Included",
      "Personal Guide",
      "VIP Access to Prayer Areas",
      "Luxury Transportation",
      "Complimentary Umrah Gift Pack",
      "24/7 Concierge Service",
    ],
    image: "https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah",
        description:
          "VIP arrival at King Abdulaziz International Airport in Jeddah. Our representative will meet you and assist with expedited immigration procedures. Luxury transfer to your 5-star hotel in Makkah.",
      },
      {
        day: 2,
        title: "Umrah Rituals",
        description:
          "After Fajr prayer, your personal guide will assist you with the Umrah rituals including Tawaf, Sa'i, and other essential practices. Rest of the day free for prayers at Masjid Al-Haram.",
      },
      {
        day: 3,
        title: "Makkah Ziyarah",
        description:
          "Private tour of historical sites in Makkah including Jabal al-Noor (Cave of Hira), Jabal Thawr, and other significant locations. Evening free for prayers.",
      },
      {
        day: 4,
        title: "Free Day in Makkah",
        description:
          "Full day for worship and personal reflection at Masjid Al-Haram. Optional shopping time at nearby luxury markets.",
      },
      {
        day: 5,
        title: "Second Umrah",
        description:
          "Opportunity to perform a second Umrah with guidance from your personal guide. Evening free for prayers.",
      },
      {
        day: 6,
        title: "Spiritual Lectures",
        description:
          "Attend exclusive spiritual lectures by renowned scholars at your hotel. Evening free for prayers at Masjid Al-Haram.",
      },
      {
        day: 7,
        title: "Free Day in Makkah",
        description: "Another day for worship and personal reflection. Optional visit to the Kaaba Museum.",
      },
      {
        day: 8,
        title: "Third Umrah",
        description:
          "Opportunity to perform a third Umrah with guidance from your personal guide. Evening free for prayers.",
      },
      {
        day: 9,
        title: "Transfer to Madinah",
        description:
          "After breakfast, check out from your hotel in Makkah and luxury transfer to Madinah. Check in at your 5-star hotel and visit Masjid Al-Nabawi for prayers.",
      },
      {
        day: 10,
        title: "Madinah Ziyarah",
        description:
          "Private guided tour of historical sites in Madinah including Quba Mosque, Uhud Mountain, and other significant locations. Evening free for prayers at Masjid Al-Nabawi.",
      },
      {
        day: 11,
        title: "Free Day in Madinah",
        description:
          "Free day for worship and personal reflection at Masjid Al-Nabawi. Optional shopping time for luxury souvenirs and gifts.",
      },
      {
        day: 12,
        title: "Extended Ziyarah",
        description:
          "Visit to additional historical sites in Madinah not covered in the standard tour. Evening free for prayers.",
      },
      {
        day: 13,
        title: "Spiritual Retreat",
        description:
          "Guided spiritual retreat with focus on reflection and deepening your connection. Evening free for prayers.",
      },
      {
        day: 14,
        title: "Final Day in Madinah",
        description:
          "Final day for worship and personal reflection at Masjid Al-Nabawi. Farewell dinner at a premium restaurant.",
      },
      {
        day: 15,
        title: "Departure",
        description:
          "Check out from your hotel and luxury transfer to Jeddah or Madinah airport for your return flight.",
      },
    ],
  },
  // Add more packages with similar structure
]

export default function PackageDetail({ params }: { params: { id: string } }) {
  const packageData = packagesData.find((pkg) => pkg.id === params.id)

  if (!packageData) {
    notFound()
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              TRUSTED-ALLY
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

