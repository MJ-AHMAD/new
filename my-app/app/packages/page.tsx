import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { PackageCard } from "@/components/package-card"

export default function PackagesPage() {
  const packages = [
    {
      id: "7-day-economy",
      title: "7 Days Economy Umrah Package",
      price: "BDT 210,000",
      duration: "7 Days",
      description: "Perfect for those seeking a brief but fulfilling spiritual journey.",
      features: [
        "3★ Hotel in Makkah (3 nights)",
        "3★ Hotel in Madinah (2 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Guided Ziyarah Tours",
        "Daily Breakfast",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
    {
      id: "10-day-standard",
      title: "10 Days Standard Umrah Package",
      price: "BDT 266,000",
      duration: "10 Days",
      description: "Our most popular package with balanced stay in both holy cities.",
      features: [
        "4★ Hotel in Makkah (5 nights)",
        "4★ Hotel in Madinah (3 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Guided Ziyarah Tours",
        "Daily Breakfast & Dinner",
      ],
      image: "https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg",
    },
    {
      id: "15-day-premium",
      title: "15 Days Premium Umrah Package",
      price: "BDT 392,000",
      duration: "15 Days",
      description: "Luxury experience with extended stay for complete spiritual immersion.",
      features: [
        "5★ Hotel in Makkah (8 nights)",
        "5★ Hotel in Madinah (5 nights)",
        "Return Flights from Dubai or Qatar",
        "Premium Visa Processing",
        "Private Airport Transfers",
        "Extensive Guided Ziyarah Tours",
        "All Meals Included",
        "Personal Guide",
      ],
      image: "https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00",
    },
    {
      id: "hajj-package",
      title: "Complete Hajj Package 2025",
      price: "BDT 840,000",
      duration: "21 Days",
      description: "Comprehensive Hajj package with all arrangements taken care of.",
      features: [
        "5★ Hotel in Makkah (10 nights)",
        "5★ Hotel in Madinah (5 nights)",
        "Premium Tents in Mina & Arafat",
        "Return Flights from Dubai or Qatar",
        "Hajj Visa Processing",
        "All Transportation",
        "Guided Rituals",
        "All Meals Included",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
    {
      id: "family-umrah",
      title: "Family Umrah Package",
      price: "BDT 238,000 per person",
      duration: "10 Days",
      description: "Special package designed for families with children.",
      features: [
        "4★ Family Rooms in Makkah (5 nights)",
        "4★ Family Rooms in Madinah (3 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Family-friendly Ziyarah Tours",
        "All Meals Included",
        "Children's Activities",
      ],
      image: "https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg",
    },
    {
      id: "ramadan-umrah",
      title: "Ramadan Umrah Special",
      price: "BDT 322,000",
      duration: "15 Days",
      description: "Experience the blessed month of Ramadan in the holy cities.",
      features: [
        "4★ Hotel in Makkah (10 nights)",
        "4★ Hotel in Madinah (3 nights)",
        "Return Flights from Dubai or Qatar",
        "Visa Processing",
        "Airport Transfers",
        "Iftar & Suhoor Meals",
        "Special Ramadan Programs",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
  ]

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
          <Image
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
            alt="Umrah Packages"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Umrah & Hajj Packages</h1>
              <p className="text-xl text-white/80">Comprehensive packages for a spiritually fulfilling journey</p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Available Packages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                TRUSTED-ALLY offers comprehensive Umrah and Hajj packages from Bangladesh, designed to provide a
                peaceful and spiritually fulfilling journey to the holy cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need a Custom Package?</h2>
              <p className="text-lg text-gray-700 mb-8">
                We understand that every pilgrim has unique needs. If our standard packages don't meet your
                requirements, we can create a custom package tailored just for you.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Contact Us for Custom Packages
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

