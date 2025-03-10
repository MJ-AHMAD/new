import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function ClockTowerMuseumPage() {
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
            alt="Clock Tower Museum"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Clock Tower Museum</h1>
              <p className="text-xl text-white/80">Astronomical wonders at the highest point in Makkah</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Clock Tower Museum</h2>

                <p className="mb-6 text-lg">
                  This is an astronomical museum, located on the balcony of the clock tower at the highest point in
                  Makkah. The museum uses the most advanced techniques of display and clarification of astronomy, the
                  Qur'an's views of astronomy, the efforts of Muslim scientists in the field of astronomy and space
                  sciences, and many other important and interesting themes. It was launched in 1440 AH.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Museum Floors</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>First floor: Makkah Clock exhibits (building, features and techniques).</li>
                    <li>Second floor: time measurement, human innovations, and attempts to tell the time.</li>
                    <li>Third floor: exhibits about the sun, the earth, the moon, and related themes.</li>
                    <li>Fourth Floor: exhibits about the universe in general.</li>
                  </ul>

                  <p className="mt-4">
                    At the end of the tour, the visitor can see the most beautiful and majestic view from the highest
                    balcony: the Ka'bah and the Grand Mosque, and Makkah mountains and valleys.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Location</h3>
                  <p>Location of the Museum: The Clock Tower, Endowment of King Abdulaziz.</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">World's Largest Clock Tower</h3>
                <p className="mb-4">
                  Makkah Clock Royal Tower rises more than 400 meters above ground. It is the largest clock tower in the
                  world, with a diameter of more than 40 meters. The clock weighs 36 thousand tons. The clock can be
                  seen from all areas of Makkah al-Mukarramah from a distance of more than eight kilometers.
                </p>
                <p>
                  The clock consists of four interfaces, and the largest word (Allah is Great) in the world can be seen
                  above the clock, where the letter (A) in the word (Allah) is more than 23 meters long. The diameter of
                  the crescent is 23 meters, constituting the largest crescent that has been made so far. The two
                  testimonies of faith (I testify that there is none worthy of worship except Allah and that Muhammad is
                  His slave and messenger) can also be seen. The clock was designed in the Islamic style according to
                  the strictest safety standards.
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

