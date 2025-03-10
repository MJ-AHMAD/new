import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function HiraCulturalDistrictPage() {
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
            src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
            alt="Hira Cultural District"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Hira Cultural District</h1>
              <p className="text-xl text-white/80">An enriching cultural and tourist experience</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Hira Cultural District</h2>

                <p className="mb-6 text-lg">
                  A unique cultural and tourist attraction near Hira in Makkah. This monument aims to achieve a number
                  of goals including:
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Project Goals</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Developing the attraction site to fit the historic status of Saudi Arabia and to show how much we
                      care about our holy and historic sites and its visitors.
                    </li>
                    <li>
                      Investing the historical value of the site in accordance with the important place Makkah holds
                      religiously and historically.
                    </li>
                    <li>Enriching the religious and cultural experience for pilgrims.</li>
                    <li>Ensuring the safety of Makkah's visitors.</li>
                    <li>Adding developmental elements in order to serve the visitors of Makkah.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Revelation Exhibition</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      This project is linked to Hira Cave, where the prophet, peace be upon him, received the first
                      divine revelation. Revelation is an essential theme in this project. The exhibition recounts the
                      story of revelation to the prophet, peace be upon him.
                    </li>
                    <li>
                      The exhibition also devotes a special wing to the story of revelation to our prophet Mohammad,
                      peace be upon him, in particular and introduces this aspect of his biography.
                    </li>
                    <li>
                      Visitors then move on to learn everything related to the story of revelation, such as Hira Cave,
                      Mother of the Believers Khadeejah bint Khuwaylid, and angel Gabriel, peace be upon him. The museum
                      employs an interesting technical presentation that takes visitors on an enjoyable audio-visual
                      journey.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Exhibition Opening Hours</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Saturday to Thursday: 8:30 am to 9:30 pm</li>
                    <li>Friday: 4:00 pm to 10:00 pm</li>
                  </ul>
                  <p className="mt-4">For booking and inquiries: +8801788856628</p>
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

