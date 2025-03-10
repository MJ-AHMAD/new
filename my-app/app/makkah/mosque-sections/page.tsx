import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MosqueSectionsPage() {
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
            alt="Grand Mosque Sections"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Sections of the Grand Mosque of Makkah</h1>
              <p className="text-xl text-white/80">Exploring the different areas of Masjid Al-Haram</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Sections of the Grand Mosque of Makkah</h2>

                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Ka'bah Courtyard</h3>
                    <p>
                      Ka'bah courtyard or Mataf: It is the courtyard tiled with white marble that surrounds the
                      honorable Ka'bah. Currently, it is called the "courtyard," in which Muslims walk around the
                      Kab'ah. It is also called Mataf (circumambulation area), which refers to the act of going around
                      the Ka'bah.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">The Abbasid Corridor</h3>
                    <p>
                      The Abbasid corridor dates back to the reign of the Abbasid Caliph Muhammad al-Mahdi. This
                      corridor has undergone many innovations down the ages and during the Saudi expansions of the Grand
                      Mosque of Makkah.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Saudi Expansions</h3>
                    <p>
                      Saudi leaders have prioritized improving and expanding the Grand Mosque of Makkah to keep pace
                      with the increasing number of Hajj and 'Umrah pilgrims. During the reign of King Saud, the first
                      expansions of the Grand Mosque were commenced in 1375 AH. The Grand Mosque was further expanded in
                      1409 and in 1428AH.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Outer Courtyards</h3>
                    <p>
                      In the second Saudi expansion, large courtyards surrounding the Grand Mosque were created and
                      prepared for prayer, especially during the crowded seasons. They were tiled with heat-resisting
                      marble.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Roof of the Grand Mosque</h3>
                    <p>
                      The second Saudi expansion exploited the roof of the Grand Mosque. The roof was tiled with
                      heat-resisting marble. In the third Saudi expansion, escalators were installed to carry worshipers
                      to the roof and the first floor during Hajj-high and crowded seasons.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-3">Gates of the Grand Mosque</h3>
                    <p>
                      Many gates lead to the courtyard of the Grand Mosque. Each Gate has a specific number. Above each
                      gate, a light panel, recognizable from a distance, displays either an entry or exit sign.
                    </p>

                    <h4 className="font-bold mt-4 mb-2">The five main gates of the Grand Mosque:</h4>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>King Abdulaziz Gate: No. 1 in the Western Square</li>
                      <li>Bab Safa, Gate: No. 11 in the direction of Sa'i walkway (Masa'a)</li>
                      <li>Bab al-Fatah, Gate: No. 45 in the North Square</li>
                      <li>Bab Umrah, The Umrah Gate: No. 62 in the North Square</li>
                      <li>King Fahd Gate: No. 79 in the Western Square</li>
                    </ul>
                  </div>
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

