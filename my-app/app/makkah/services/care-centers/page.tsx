import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function CareCentersPage() {
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
            alt="Care Centers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Care Centers</h1>
              <p className="text-xl text-white/80">Comprehensive support for pilgrims</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Care Centers for Pilgrims</h2>

                <p className="mb-6 text-lg">
                  These centers provide comprehensive services and guidance needed by pilgrims performing Hajj and
                  'Umrah, in multiple languages. Care centers are strategically located throughout the Grand Mosque and
                  surrounding areas to ensure pilgrims have access to assistance whenever needed.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Services Provided by Care Centers</h3>
                  <p className="mb-4">Care centers offer a wide range of services to assist pilgrims:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Information about rituals and proper procedures</li>
                    <li>Lost and found services</li>
                    <li>Assistance for lost pilgrims</li>
                    <li>First aid and medical referrals</li>
                    <li>Translation services</li>
                    <li>Distribution of educational materials</li>
                    <li>Guidance for new Muslims</li>
                    <li>Special assistance for elderly and disabled pilgrims</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Care Center Locations</h3>
                  <p className="mb-4">Care centers can be found at key locations:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Near major entrances to the Grand Mosque</li>
                    <li>In the courtyards surrounding the mosque</li>
                    <li>At transportation hubs</li>
                    <li>Near major hotels and accommodation areas</li>
                    <li>At the boundaries of the Haram area</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Children in the Haram</h3>
                  <p className="mb-4">Care centers also provide special services related to children:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Parents can take their children of all ages to perform prayers in the Grand Mosque of Makkah
                    </li>
                    <li>They must obtain 'Umrah permits for children over 5 years old through the Nusuk app</li>
                    <li>Assistance for families with young children</li>
                    <li>Help locating lost children</li>
                    <li>Guidance on managing children during rituals</li>
                    <li>Special accommodations for families with infants</li>
                  </ul>

                  <p className="mt-4">
                    These services ensure that families can perform their religious duties while keeping their children
                    safe and comfortable.
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

