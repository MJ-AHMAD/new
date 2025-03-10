import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function WheelchairsPage() {
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
            src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
            alt="Wheelchair Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Wheelchair Services</h1>
              <p className="text-xl text-white/80">Accessibility for all visitors</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Wheelchairs for the Ill and the Elderly</h2>

                <p className="mb-6 text-lg">
                  Free wheelchairs are available at the eastern courtyard (the public transport entrance), the southern
                  courtyard (next to King Abdulaziz Gate), and other key locations throughout the Grand Mosque to ensure
                  accessibility for all visitors.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Wheelchair Service Locations</h3>
                  <p className="mb-4">Wheelchairs can be obtained from several locations around the Grand Mosque:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Eastern Courtyard (Public Transport Entrance)</li>
                    <li>Southern Courtyard (near King Abdulaziz Gate)</li>
                    <li>Northern Courtyard</li>
                    <li>Western Courtyard</li>
                    <li>All major entrances to the mosque</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Types of Wheelchairs Available</h3>
                  <p className="mb-4">The Grand Mosque offers different types of wheelchairs to meet various needs:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Standard manual wheelchairs</li>
                    <li>Electric wheelchairs (limited availability)</li>
                    <li>Special wheelchairs for Tawaf (circumambulation)</li>
                    <li>Wheelchairs with adjustable features for comfort</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Wheelchair Assistance Service</h3>
                  <p className="mb-4">In addition to providing wheelchairs, the Grand Mosque offers:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Volunteer pushers to assist those who cannot propel themselves</li>
                    <li>Dedicated wheelchair routes throughout the mosque</li>
                    <li>Special wheelchair access to key areas</li>
                    <li>Wheelchair-accessible restrooms and ablution areas</li>
                    <li>Trained staff to assist with transfers and special needs</li>
                  </ul>

                  <p className="mt-4">
                    These services are provided free of charge as part of the Kingdom's commitment to ensuring that all
                    Muslims can perform their religious duties regardless of physical limitations.
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

