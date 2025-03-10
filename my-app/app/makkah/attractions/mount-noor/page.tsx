import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MountNoorPage() {
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
            alt="Mount Noor and Cave of Hira"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Mount Noor and Cave of Hira</h1>
              <p className="text-xl text-white/80">The birthplace of Islam's divine revelation</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Mount Noor (Jabal An-Noor) and the cave of Hira</h2>

                <p className="mb-6 text-lg">
                  Mount Noor is the place where Allah honored His Prophet Muhammad (blessings and peace be upon him)
                  with prophethood. This is where he used to spend his time in worship of his Lord and in contemplation
                  of Allah's creation.
                </p>

                <p className="mb-6">
                  In this cave the history of mankind changed when Gabriel conveyed the revelation from Allah to
                  Muhammad (blessings and peace be upon him). The first thing that was revealed was:{" "}
                  {
                    "{Read! In the name of your Lord Who creates. [He] creates man from a clot. Read! And your Lord is the Most Bounteous. It is He Who teaches by the pen. [He] teaches man that which he does not know.}"
                  }
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">The location of the Cave of Hira'</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>North of the Grand Mosque, at the top of Jabal An-Noor.</li>
                    <li>The cave is about 4.8 km (3 miles) from Makkah.</li>
                    <li>Elevation: approximately 634 m (2080 ft.)</li>
                    <li>
                      The cave is a natural void with its entrance towards the north, which can accommodate up to 9
                      sitting people. It is about 1.6 m.
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-green-800 font-medium">
                    Please note: It is neither obligatory nor recommended to visit the cave as it has nothing to do with
                    the Hajj rituals. It should be noted that it is difficult for the elderly and sick to reach the
                    cave.
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

