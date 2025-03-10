import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MasaaPage() {
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
            alt="Al-Masa'a"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Al-Masa'a</h1>
              <p className="text-xl text-white/80">The path between As-Safa and Al-Marwah</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Al-Masa'a</h2>
                <p className="mb-6 text-lg">
                  Al-Masa'a is the area between the hills of As-Safa and Al-Marwah where pilgrims perform the Sa'i
                  ritual, which involves walking back and forth seven times between these two points.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">What are As-Safa and Al-Marwah?</h3>
                  <p className="mb-4">
                    Two hills that Hagar (mother of Ismail, peace be upon him) climbed in search of food and water.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">As-Safa</h4>
                      <p>A hill at which Sa'i begins. Its rocks are still visible on the ground floor of Al-Masa'a.</p>
                    </div>

                    <div>
                      <h4 className="font-bold">Al-Marwah</h4>
                      <p>A hill opposite As-Safa at which Sa'i ends.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Masa'a in figures:</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Length: 394 m</li>
                    <li>Total walking distance of the seven rounds: approximately 2,761 m</li>
                    <li>
                      Average time to complete Sa'i: 45-55 minutes. Walking speed varies depending on several factors.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Masa'a Floors:</h3>
                  <p className="mb-4">
                    Masa'a comprises several floors, with a total area of 87,000 square meters. Those floors are:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Basement</li>
                    <li>Ground floor</li>
                    <li>The Mezzanine Floor for electric wheelchairs</li>
                    <li>1st floor</li>
                    <li>2nd floor</li>
                    <li>Masa'a roof</li>
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

