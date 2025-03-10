import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function EscalatorsPage() {
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
            alt="Escalators"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Escalators</h1>
              <p className="text-xl text-white/80">Modern mobility solutions in the Grand Mosque</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Escalators in the Grand Mosque</h2>

                <p className="mb-6 text-lg">
                  The Haram Mosque and its holy site services have been developed and expanded in conformity with the
                  highest standards. The modern escalator system is a key component of the mosque's infrastructure,
                  allowing pilgrims to move efficiently between different levels.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Escalator System Overview</h3>
                  <p className="mb-4">The Grand Mosque features an extensive network of escalators that:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Connect all floors of the mosque, from the basement to the roof</li>
                    <li>Provide access to the circumambulation (Tawaf) floors</li>
                    <li>Link the Sa'i area (between Safa and Marwah) across multiple levels</li>
                    <li>Connect the mosque to surrounding plazas and courtyards</li>
                    <li>Provide access to prayer areas on upper floors</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                  <p className="mb-4">
                    The escalators in the Grand Mosque are built to the highest standards to handle the massive flow of
                    pilgrims:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Extra-wide design to accommodate more people</li>
                    <li>Heavy-duty construction for continuous operation</li>
                    <li>Energy-efficient motors</li>
                    <li>Advanced safety features</li>
                    <li>Climate-controlled design for the hot Makkah environment</li>
                    <li>Automatic speed adjustment based on passenger load</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Escalator Management During Peak Times</h3>
                  <p className="mb-4">
                    During Hajj and busy Umrah periods, the escalator system is carefully managed to optimize flow:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Direction control based on prayer times and crowd movement</li>
                    <li>Staff positioned at key escalators to assist pilgrims</li>
                    <li>Special lanes for elderly and disabled visitors</li>
                    <li>Maintenance scheduled during off-peak hours</li>
                    <li>Emergency protocols for quick evacuation if needed</li>
                  </ul>

                  <p className="mt-4">
                    The escalator system is continuously monitored from a central control room to ensure optimal
                    operation and quick response to any issues.
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

