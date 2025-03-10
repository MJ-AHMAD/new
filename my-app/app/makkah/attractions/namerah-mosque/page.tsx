import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function NamerahMosquePage() {
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
            alt="Namerah Mosque"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Namerah Mosque</h1>
              <p className="text-xl text-white/80">Site of the Prophet's Farewell Sermon</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Namerah Mosque</h2>

                <p className="mb-6 text-lg">
                  Namerah Mosque is one of the most important landmarks in Arafah. On the day of Arafah, thousands of
                  pilgrims who come from all over the world pray in this mosque.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Historical Significance</h3>
                  <p>
                    This mosque was built on the site where the Messenger of Allah, (blessings and peace be upon him),
                    prayed and delivered the farewell sermon.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Contemporary Usage</h3>
                  <p>
                    The Zuhr and Asr prayers are conducted in this mosque. The sermon on the Day of Arafah, which is
                    broadcast by many Islamic televisions and radio stations, is also delivered from the pulpit of this
                    mosque.
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

