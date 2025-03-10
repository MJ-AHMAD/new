import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function CircumambulationFloorsPage() {
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
            alt="Circumambulation Floors"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Circumambulation Floors</h1>
              <p className="text-xl text-white/80">The multi-level structure for Tawaf</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Circumambulation Floors</h2>
                <p className="mb-6 text-lg">
                  The circumambulation building comprises multiple levels to accommodate the large number of pilgrims
                  performing Tawaf around the Ka'bah.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">The circumambulation building comprises the following:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The circumambulation courtyard</li>
                    <li>Ground floor</li>
                    <li>1st floor</li>
                    <li>The mezzanine floor for wheelchair users on the first floor</li>
                    <li>The roof</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Capacity of the circumambulation building:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>The circumambulation courtyard accommodates 30,000 circumambulators per hour.</li>
                    <li>Total capacity of all floors: 107,000 circumambulations per hour.</li>
                  </ul>
                  <p className="mt-4">
                    These floors are accessed through special paths determined by security personnel. Hajj and 'Umrah
                    pilgrims should cooperate with them and follow their instructions.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Design and Accessibility</h3>
                  <p className="mb-4">
                    The circumambulation floors are designed to provide a smooth flow of pilgrims while ensuring safety
                    and comfort. The floors are equipped with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Air conditioning systems to maintain comfortable temperatures</li>
                    <li>Escalators and elevators for easy movement between floors</li>
                    <li>Special lanes for elderly and disabled pilgrims</li>
                    <li>Clear signage in multiple languages</li>
                    <li>Security personnel to guide and assist pilgrims</li>
                    <li>Emergency exits and medical facilities</li>
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

