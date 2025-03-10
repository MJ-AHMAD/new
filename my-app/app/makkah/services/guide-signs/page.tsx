import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function GuideSignsPage() {
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
            alt="Guide Signs"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Guide Signs</h1>
              <p className="text-xl text-white/80">Navigating the Grand Mosque with ease</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Guide Signs in the Grand Mosque</h2>

                <p className="mb-6 text-lg">
                  As part of the system of spatial directions in the Grand Mosque, its corridors and courtyards, a large
                  number of guide signs written in world languages guide visitors of the Grand Mosque, so that they can
                  move and reach places easily.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Types of Guide Signs</h3>
                  <p className="mb-4">
                    The Grand Mosque features various types of guide signs to help pilgrims navigate the complex:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Directional signs pointing to key areas (Ka'bah, Safa and Marwah, exits, etc.)</li>
                    <li>Gate numbers and names</li>
                    <li>Floor level indicators</li>
                    <li>Prayer area designations</li>
                    <li>Service location indicators (restrooms, wheelchair services, etc.)</li>
                    <li>Emergency exit signs</li>
                    <li>Electronic information displays</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Multilingual Support</h3>
                  <p className="mb-4">
                    To accommodate the diverse international visitors, guide signs in the Grand Mosque are available in
                    multiple languages:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Arabic (primary language)</li>
                    <li>English (widely used for international visitors)</li>
                    <li>Urdu</li>
                    <li>French</li>
                    <li>Turkish</li>
                    <li>Malay</li>
                    <li>Indonesian</li>
                    <li>Other languages as needed</li>
                  </ul>

                  <p className="mt-4">
                    This multilingual approach ensures that pilgrims from around the world can navigate the mosque
                    regardless of their native language.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Digital Navigation Assistance</h3>
                  <p className="mb-4">
                    In addition to physical signs, the Grand Mosque has implemented digital solutions to help visitors:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Interactive digital maps at information kiosks</li>
                    <li>QR codes that link to navigation guides</li>
                    <li>Mobile applications with mosque maps and directions</li>
                    <li>Digital information displays with rotating content</li>
                  </ul>

                  <p className="mt-4">
                    These technological enhancements complement the traditional signage system and provide additional
                    support for tech-savvy visitors.
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

