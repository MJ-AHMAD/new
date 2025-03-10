import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function FamilyUmrahPackageDetail() {
  const packageData = {
    id: "family-umrah",
    title: "Family Umrah Package",
    price: "BDT 238,000 per person",
    duration: "10 Days",
    description: "Special package designed for families with children.",
    longDescription:
      "Our Family Umrah Package is specially designed to accommodate the needs of families traveling with children. We understand the unique challenges families face during pilgrimage, and our package ensures a comfortable, educational, and spiritually fulfilling experience for all family members, including special activities for children.",
    features: [
      "4★ Family Rooms in Makkah (5 nights)",
      "4★ Family Rooms in Madinah (3 nights)",
      "Return Flights from Dubai or Qatar",
      "Visa Processing",
      "Airport Transfers",
      "Family-friendly Ziyarah Tours",
      "All Meals Included",
      "Children's Activities",
      "Family Prayer Areas",
      "Child-friendly Guides",
      "Educational Programs for Children",
      "Family Support Services",
      "Special Assistance for Elderly Family Members",
    ],
    image: "https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg",
    itinerary: [
      {
        day: 1,
        title: "Arrival in Jeddah",
        description:
          "Arrive at King Abdulaziz International Airport in Jeddah. Our family-friendly representatives will meet you and assist with immigration procedures. Transfer to your hotel in Makkah.",
      },
      {
        day: 2,
        title: "Umrah Rituals",
        description:
          "After Fajr prayer, our family guides will assist you with the Umrah rituals including Tawaf, Sa'i, and other essential practices. Special assistance for children and elderly family members.",
      },
      {
        day: 3,
        title: "Makkah Ziyarah",
        description:
          "Family-friendly visit to historical sites in Makkah including Jabal al-Noor (Cave of Hira) and other significant locations. Educational activities for children to understand the importance of these sites.",
      },
      {
        day: 4,
        title: "Family Day in Makkah",
        description:
          "Morning prayers at Masjid Al-Haram. Afternoon children's workshop on Islamic history and the significance of Umrah. Evening free for family prayers.",
      },
      {
        day: 5,
        title: "Free Day in Makkah",
        description:
          "Full day for worship and family time at Masjid Al-Haram. Optional shopping time at nearby markets for family souvenirs.",
      },
      {
        day: 6,
        title: "Transfer to Madinah",
        description:
          "After breakfast, check out from your hotel in Makkah and transfer to Madinah in comfortable family vehicles. Check in at your hotel and visit Masjid Al-Nabawi for prayers.",
      },
      {
        day: 7,
        title: "Madinah Ziyarah",
        description:
          "Family-friendly guided tour of historical sites in Madinah including Quba Mosque, Uhud Mountain, and other significant locations. Interactive learning activities for children.",
      },
      {
        day: 8,
        title: "Family Day in Madinah",
        description:
          "Morning prayers at Masjid Al-Nabawi. Afternoon children's program about the Prophet's life in Madinah. Evening free for family prayers.",
      },
      {
        day: 9,
        title: "Free Day in Madinah",
        description:
          "Free day for worship and family time at Masjid Al-Nabawi. Optional shopping time for souvenirs and gifts.",
      },
      {
        day: 10,
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

