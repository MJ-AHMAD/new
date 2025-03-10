import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import MobileNavigation from "@/components/MobileNavigation"

export default function MadinahPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/icon.png"
              alt="T-ALLY Logo"
              width={50}
              height={50}
              className="mr-3"
            />
            <h1 className="text-xl md:text-2xl font-bold text-green-600">TRUSTED-ALLY</h1>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/about" className="text-gray-800 hover:text-green-600 font-medium">
              About Us
            </Link>
            <Link href="/hajj-umrah-guidance" className="text-gray-800 hover:text-green-600 font-medium">
              Umrah & Ziyarah
            </Link>
            <Link href="/hajj" className="text-gray-800 hover:text-green-600 font-medium">
              Hajj
            </Link>
            <Link href="/makkah" className="text-gray-800 hover:text-green-600 font-medium">
              Makkah
            </Link>
            <Link href="/madinah" className="text-gray-800 hover:text-green-600 font-medium">
              Madinah
            </Link>
            <Link href="/packages" className="text-gray-800 hover:text-green-600 font-medium">
              Packages
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-green-600 font-medium">
              Services
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <MobileNavigation />
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <section className="relative h-[60vh]">
          <Image
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
            alt="Madinah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">MADINAH / Madinah</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">Al Madinah Al Munawara</p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Madina, or as Muslims call it "Taibah al Taibah", is one of the main destinations for millions of
                Muslims around the world. It is the first capital of Islam in history, and the second holiest place for
                Muslims after Makkah al-Mukarramah. Madina is located in Hejaz Region in the west of the Kingdom of
                Saudi Arabia. It has the Noble Prophet's Mosque, which was built by the Prophet himself in the first
                year after Hijrah (622 AD.). It is one of the largest mosques in the world after the Holy Mosque.
                Millions of Muslims around the world visit Madina every year.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Highlights of Madinah</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2019/05/12/1550906-1005695433.jpg?itok=dYiCjL4Z"
                    alt="Prophet's Mosque"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Prophet's Mosque</h3>
                  <p className="text-gray-600 mb-4">
                    The Prophet's Mosque (Al-Masjid an-Nabawi) is the second holiest site in Islam and contains the tomb
                    of Prophet Muhammad (PBUH).
                  </p>
                  <Link
                    href="/madinah/prophets-mosque"
                    className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Quba_Mosque%2C_Medina.jpg/1200px-Quba_Mosque%2C_Medina.jpg"
                    alt="Quba Mosque"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Quba Mosque</h3>
                  <p className="text-gray-600 mb-4">
                    The first mosque built in Islamic history, established by Prophet Muhammad (PBUH) upon his arrival
                    in Madinah.
                  </p>
                  <Link
                    href="/madinah/quba-mosque"
                    className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Al-Baqi%27_Cemetery%2C_Medina%2C_Saudi_Arabia.jpg/1200px-Al-Baqi%27_Cemetery%2C_Medina%2C_Saudi_Arabia.jpg"
                    alt="Jannatul Baqi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Jannatul Baqi</h3>
                  <p className="text-gray-600 mb-4">
                    The main cemetery of Madinah where many of the Prophet's companions and family members are buried.
                  </p>
                  <Link
                    href="/madinah/jannatul-baqi"
                    className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Mount_Uhud.jpg/1200px-Mount_Uhud.jpg"
                    alt="Mount Uhud"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Mount Uhud</h3>
                  <p className="text-gray-600 mb-4">
                    The site of the famous Battle of Uhud and a mountain that the Prophet Muhammad (PBUH) loved.
                  </p>
                  <Link
                    href="/madinah/mount-uhud"
                    className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Plan Your Visit to Madinah</h2>
              <p className="text-lg text-gray-700 mb-8">
                Explore our services to make your visit to the City of the Prophet a memorable and spiritually
                fulfilling experience.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/services/guided-tours"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Guided Tours
                </Link>
                <Link
                  href="/services/accommodation"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Accommodation
                </Link>
                <Link
                  href="/services/transportation"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Transportation
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

