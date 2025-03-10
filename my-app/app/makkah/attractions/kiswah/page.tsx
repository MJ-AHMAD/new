import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function KiswahPage() {
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
            alt="Kiswah of the Kaaba"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Kiswah of the Kaaba</h1>
              <p className="text-xl text-white/80">The sacred covering of the Holy Kaaba</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Kiswah (Covering) of the Kaaba</h2>

                <p className="mb-6 text-lg">
                  The Kiswah of the Kaaba is an integral part of the history of the Kaaba itself. It consists of black
                  silk on which verses from the Holy Qur'an are embroidered with gold water.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Components and Construction</h3>
                  <p>
                    It consists of four pieces distributed on the faces of the Kaaba, in addition to a fifth piece,
                    which is a curtain on the door of the Kaaba. The manufacturing of the Kiswah is supervised by the
                    Kiswah Factory of the Holy Kaaba, which is located in the center of Makkah Al-Mukarramah.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Annual Replacement</h3>
                  <p>The Kiswah is replaced with a new one once a year during Hajj, after the pilgrims go to Arafah.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold mb-4">Kiswah of the Ka'bah Exhibition</h3>
                <p className="mb-4">
                  This is an exhibition displaying the stages and ways of weaving the kiswah, its history, and the
                  Qur'anic verses and inscriptions on it.
                </p>

                <p className="mb-4">Visitors can:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Have a good close-up look at the Qur'anic verses written on the honorable kiswah.</li>
                  <li>Explore the details of the kiswah of all four sides of the Ka'bah.</li>
                  <li>Explore the history of the kiswah and some pieces of old covers.</li>
                  <li>Learn about the efforts of the Kingdom of Saudi Arabia in serving the Ka'bah and its kiswah.</li>
                  <li>
                    Watch a visual presentation of the stages of producing the kiswah in the Kingdom, and the stages of
                    replacing it.
                  </li>
                  <li>At times, visitors can also participate in the sewing of the covering of the Ka'bah.</li>
                </ul>

                <p className="mt-4">
                  Location: The Kiswah Factory and its Showroom is located on Jeddah Road in Makkah.
                </p>
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

