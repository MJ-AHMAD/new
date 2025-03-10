import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MosqueCourtyardsPage() {
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
            alt="Grand Mosque Courtyards"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Courtyards of the Grand Mosque</h1>
              <p className="text-xl text-white/80">Spaces designed for pilgrims and worshippers</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Courtyards of the Grand Mosque of Makkah</h2>
                <p className="mb-6 text-lg">
                  The Grand Mosque of Makkah is surrounded by courtyards designed to facilitate the entry of Hajj and
                  'Umrah pilgrims and worshipers into the Mosque. They are also designed as prayer floors since they get
                  filled with worshipers on Fridays and during Hajj and 'Umrah seasons.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Key Tasks of Haram Courtyards Management:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Facilitating the entry of worshippers into the Grand Mosque.</li>
                    <li>Opening passages from the courtyards to the Grand Mosque gates.</li>
                    <li>Providing assistance to drifters, the elderly and the disabled.</li>
                    <li>Banning people from trading and begging in the courtyards.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Key services in the Haram courtyards:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Safe Lockers</li>
                    <li>Zamzam water</li>
                    <li>Mist fans to cool the air</li>
                    <li>Toilets and ablution areas</li>
                    <li>Regular cleaning of the courtyards</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">In the Haram courtyards, avoid:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Leaving your belongings in the courtyards. You can have your belongings kept in a safe locker.
                    </li>
                    <li>Carrying weapons and sharp materials.</li>
                    <li>Riding a bicycle or a motorbike.</li>
                    <li>Smoking.</li>
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

