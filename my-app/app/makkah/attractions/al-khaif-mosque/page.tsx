import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function AlKhaifMosquePage() {
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
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
            alt="Al-Khaif Mosque"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Al-Khaif Mosque</h1>
              <p className="text-xl text-white/80">The historic mosque in Mina</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Al-Khaif Mosque</h2>

                <p className="mb-6 text-lg">
                  It is the greatest mosque in Mina. It is the place where the Messenger of Allah, blessings and peace
                  be upon him, stayed and prayed during the Farewell Hajj.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Historical Significance</h3>
                  <p>
                    Earlier prophets, (may peace be upon them), stopped and prayed in the site of this mosque. It was
                    narrated that "seventy prophets prayed in Al-Khayf Mosque."
                  </p>
                  <p className="mt-2">Pilgrims still pray there today.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Location and Specifications</h3>
                  <p className="mb-2">Location of Al-Khayf Mosque: It is located on King Faisal Road in Mina.</p>

                  <h4 className="font-bold mt-4 mb-2">Mosque area and capacity:</h4>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Area: 25,000 m2.</li>
                    <li>It accommodates 45,000 worshippers.</li>
                    <li>It has one long minaret in each corner.</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Pilgrims must not lie down or sleep in the mosque. They shall not disturb worshipers.
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

