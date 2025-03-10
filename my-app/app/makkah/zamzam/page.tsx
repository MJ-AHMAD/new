import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function ZamzamPage() {
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
            alt="Zamzam Well"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Zamzam Well</h1>
              <p className="text-xl text-white/80">The sacred well of blessed water</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Zamzam Well</h2>
                <p className="mb-6 text-lg">
                  Zamzam well is located 21 meters to the east of the Ka'bah. The wellhead circumference is 3.60 m.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Other Names of Zamzam:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Suqya Ismail</li>
                    <li>Safiah (pure)</li>
                    <li>Mubarakah (blessed)</li>
                    <li>Salimah (safe)</li>
                    <li>Tahirah (pure)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Historical Care of Zamzam Well:</h3>
                  <p className="mb-4">
                    Down the ages, caliphs and kings took great care of Zamzam well. This interest continued in the
                    Saudi era, starting with the reign of King Abdulaziz, who in 1345 AH ordered the construction of a
                    Zamzam drinking charitable fountain. A year later, he ordered the construction of a second
                    charitable fountain, maintenance and covering of the well. This interest has continued. King Salman
                    approved the completion of Zamzam well works and establishing five channels of Zamzam well services
                    in 1439 AH.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Zamzam Water Distribution Center:</h3>
                  <p>
                    It supervises Zamzam well works, so that Zamzam water is provided to Hajj and 'Umrah pilgrims in
                    accordance with the highest quality standards.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Zamzam Lab:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Supervises Zamzam water sterilization stages</li>
                    <li>
                      Supervises the processes of filling of tanks that transport Zamzam water to the Prophet's Mosque
                    </li>
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

