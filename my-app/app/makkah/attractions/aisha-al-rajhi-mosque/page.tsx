import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function AishaAlRajhiMosquePage() {
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
            alt="Aisha Al-Rajhi Mosque"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Aisha Al-Rajhi Mosque</h1>
              <p className="text-xl text-white/80">A model for integrated mosques</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Aisha Al-Rajhi Mosque</h2>

                <p className="mb-6 text-lg">
                  This mosque is a model for building integrated mosques. It is one of the largest mosques in Makkah
                  region, and is remarkable for offering numerous services and organizing various events.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Location and Specifications</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Location: Al-Naseem neighborhood, Makkah</li>
                    <li>Inauguration date: 1434 AH</li>
                    <li>Area: 60,864 m2</li>
                    <li>External area: 10,000 m2</li>
                    <li>Capacity: 47,000 worshipers</li>
                    <li>Number of floors: 6</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Special Characteristics</h3>
                  <p className="mb-4">This mosque is characterized by:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Implementation of social programs</li>
                    <li>Implementation of educational programs</li>
                    <li>Recruiting volunteers during Hajj and 'Umrah seasons</li>
                    <li>Receiving domestic and international delegations</li>
                  </ul>
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

