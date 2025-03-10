import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function FatwaServicesPage() {
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
            src="https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg"
            alt="Fatwa Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Fatwa Services</h1>
              <p className="text-xl text-white/80">Religious guidance for pilgrims</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Fatwa Services in the Grand Mosque</h2>

                <p className="mb-6 text-lg">
                  A group of ulema, university students, Sharia court officers, religious institute teachers, and other
                  qualified scholars answer the questions of Hajj and 'Umrah pilgrims on rituals and legal matters
                  through the program for answering questions provided by the General Administration for Guidance and
                  Counseling in the Grand Mosque of Makkah.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Fatwa Service Locations</h3>
                  <p className="mb-4">
                    There are 19 program offices strategically located throughout the Grand Mosque. These offices can be
                    found:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Near major entrances</li>
                    <li>Around the circumambulation area</li>
                    <li>Near Safa and Marwah</li>
                    <li>In the main prayer halls</li>
                    <li>In the outer courtyards</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Available Languages</h3>
                  <p className="mb-4">
                    To serve the diverse international pilgrims, fatwa services are provided in multiple languages:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Arabic</li>
                    <li>English</li>
                    <li>Urdu</li>
                    <li>French</li>
                    <li>Turkish</li>
                    <li>Malay</li>
                    <li>Indonesian</li>
                    <li>Persian</li>
                    <li>Russian</li>
                    <li>Chinese</li>
                    <li>Other languages through interpreters</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Educational Materials</h3>
                  <p className="mb-4">
                    These offices also distribute useful guidance and legal leaflets on various topics:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Correct performance of Umrah rituals</li>
                    <li>Hajj procedures and requirements</li>
                    <li>Prayer guidelines</li>
                    <li>Common questions and answers about worship</li>
                    <li>Maps and guides to the holy sites</li>
                    <li>Etiquette in the Grand Mosque</li>
                  </ul>

                  <p className="mt-4">
                    All materials are provided free of charge and are available in multiple languages to ensure that
                    pilgrims from around the world can benefit from this guidance.
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

