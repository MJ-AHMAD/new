import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function ToiletFacilitiesPage() {
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
        <section className="relative h-[40vh]">
          <Image
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
            alt="Toilet Facilities"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Toilet Facilities</h1>
              <p className="text-xl text-white/80">Essential amenities for pilgrims</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Toilet Facilities Close to the Grand Mosque</h2>

                <p className="mb-6 text-lg">
                  Toilets and places for ablution are important services that a person constantly needs for ablution and
                  cleanliness. The Grand Mosque of Makkah is equipped with extensive toilet and ablution facilities to
                  serve the millions of pilgrims who visit annually.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Toilet and Ablution Facility Locations</h3>
                  <p className="mb-4">
                    Toilet and ablution facilities are strategically located throughout the Grand Mosque complex:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Inside the main mosque building on all floors</li>
                    <li>In the basement areas</li>
                    <li>In the surrounding courtyards</li>
                    <li>Near all major entrances</li>
                    <li>Along the Sa'i corridor</li>
                    <li>In the King Abdullah Extension</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Facility Features</h3>
                  <p className="mb-4">The toilet and ablution facilities are designed with the following features:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Separate facilities for men and women</li>
                    <li>Modern plumbing and sanitation systems</li>
                    <li>Accessible facilities for people with disabilities</li>
                    <li>Specialized ablution areas designed for ritual washing</li>
                    <li>Continuous cleaning and maintenance</li>
                    <li>Air conditioning and ventilation</li>
                    <li>Attendants available to assist pilgrims</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Maintenance and Cleanliness</h3>
                  <p className="mb-4">
                    The Saudi authorities place great emphasis on the cleanliness and maintenance of these facilities:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>24/7 cleaning crews work in shifts to maintain cleanliness</li>
                    <li>Regular sanitization of all surfaces</li>
                    <li>Immediate response to maintenance issues</li>
                    <li>Continuous water supply even during peak usage</li>
                    <li>Regular inspections to ensure quality standards</li>
                    <li>Special cleaning protocols during Hajj and Ramadan</li>
                  </ul>

                  <p className="mt-4">
                    These efforts ensure that pilgrims can perform their ablutions and maintain personal hygiene with
                    ease and dignity, allowing them to focus on their worship.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link
                  href="/makkah"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
                >
                  Back to Makkah Page
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

