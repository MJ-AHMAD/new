import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function ZamzamServicePage() {
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
            alt="Zamzam Water Service"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Zamzam Water</h1>
              <p className="text-xl text-white/80">A blessed gift for pilgrims</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Zamzam Water Service</h2>

                <p className="mb-6 text-lg">
                  Zamzam water is one of Allah's blessings on Makkah and its visitors. Allah bestowed it on Isma'il,
                  peace be upon him, and his mother Hagar, when Abrahim, peace be upon him, left them in Makkah in
                  response to Allah's command to him. Then, he supplicated to his Lord, saying: "Our Lord! verity I have
                  settled some of my posterity in an uncultivable valley near unto Your Sacred House. Our Lord! that
                  they may establish the prayer; so incline some hearts of men that they may yearn toward them, and
                  provide them with fruits in order that they may be thankful."
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Where can I get Zamzam water?</h3>
                  <p className="mb-4">
                    Visitors can drink Zamzam water inside the Grand Mosque from the water containers distributed
                    throughout the mosque. These containers are regularly refilled to ensure a constant supply of fresh
                    Zamzam water.
                  </p>

                  <p>The Zamzam water distribution system in the Grand Mosque includes:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>Fixed drinking fountains throughout the mosque</li>
                    <li>Portable coolers in various locations</li>
                    <li>Dedicated Zamzam water stations</li>
                    <li>Disposable cups for convenient use</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Zamzam Water Processing</h3>
                  <p className="mb-4">
                    The Kingdom of Saudi Arabia has established a state-of-the-art Zamzam water processing facility that
                    ensures the water maintains its purity while being safe for consumption. The process includes:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Filtration to remove any impurities</li>
                    <li>UV sterilization to eliminate harmful microorganisms</li>
                    <li>Quality control testing to ensure safety</li>
                    <li>Automated filling and distribution systems</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Benefits of Zamzam Water</h3>
                  <p className="mb-4">The Prophet Muhammad (peace be upon him) said about Zamzam water:</p>

                  <blockquote className="border-l-4 border-green-600 pl-4 italic my-4">
                    "It is blessed, and it is food that satisfies."
                  </blockquote>

                  <p className="mb-4">He also said:</p>

                  <blockquote className="border-l-4 border-green-600 pl-4 italic my-4">
                    "The best water on the face of the earth is the water of Zamzam; it is a kind of food and a healing
                    from sickness."
                  </blockquote>

                  <p>
                    Many pilgrims take Zamzam water home as a blessed gift for family and friends who could not make the
                    journey.
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

