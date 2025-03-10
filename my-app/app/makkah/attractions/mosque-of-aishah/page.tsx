import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MosqueOfAishahPage() {
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
            alt="Mosque of Aishah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">The Mosque of Aishah</h1>
              <p className="text-xl text-white/80">At-Tan'eem: Gateway for Umrah from Makkah</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">
                  The Mosque of Aishah, may Allah be pleased with her, in At-Tan'eem
                </h2>

                <p className="mb-6 text-lg">
                  It is a historical mosque erected in the place from which the Mother of the Believers, Aishah bint Abi
                  Bakr As-Siddiq (may Allah be pleased with her and her father) entered into the state of Ihram for her
                  'Umrah. It took place after the Farewell Pilgrimage.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <p className="mb-4">
                    Aishah, (may Allah be pleased with her), wished to leave Makkah after performing both Hajj and
                    'Umrah like the rest of the Companions, but she was unable to do 'Umrah due to the legitimate excuse
                    that had befallen her. So, after completing the Hajj, the Messenger of Allah (blessings and peace be
                    upon him) ordered her brother to take her to Al-Tan'eem (the place of the mosque today) so that she
                    would enter into Ihram to do her 'Umrah.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Location and History</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      The mosque is located outside the Haram, west of Makkah, and is 7 km/4.3 miles from the Grand
                      Mosque.
                    </li>
                    <li>
                      The people of Makkah enter into their state of Ihram for 'Umrah from this mosque since it is the
                      nearest point outside the Haram.
                    </li>
                    <li>
                      This mosque was built during the era of Caliph Al-Mutawakkil (240 AH) and was rebuilt during the
                      reign of King Fahd.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Whoever wants to reperform the 'Umrah has to enter into the state of Ihram from At-Tan'eem, after
                    obtaining a permit through one of these two apps: Eatamarna or Tawakkalna
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

