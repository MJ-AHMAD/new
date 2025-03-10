import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function KaabaPage() {
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
            alt="The Ka'bah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">The Ka'bah</h1>
              <p className="text-xl text-white/80">The Sacred House of Allah</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">The Ka'bah</h2>
                <p className="mb-6 text-lg">
                  The Ka'bah is the Sacred House of Allah, and the greatest building for Muslims. It enjoys a great
                  prestige and a glorious history. It was built by Abraham and his son, Ismail, peace be upon both of
                  them.
                </p>

                <p className="mb-6">
                  It is the first house that Allah placed on earth so that mankind may worship Him alone, without
                  ascribing any partner to Him. The Almighty says, "The first House (of Prayer) established for mankind
                  is the one at Bakkah: a blessed place and a guidance for the worlds." It is the qiblah of Muslims and
                  the thrust of their hearts. It is the only structure which they circumambulate in worship to Allah.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    The Ka'bah has several features that can be observed during circumambulation:
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg">Al-Hatim (Hijr Ismail)</h4>
                      <p>
                        It is an open semi-circular space next to the Ka'bah. A portion of it was part of the Ka'bah.
                        Prayer inside this enclosure is equivalent in reward to prayer inside the Ka'bah.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">Door of the Ka'bah</h4>
                      <p>
                        The door of the Kaaba is located on the eastern side of the Kaaba. Today it is made of pure
                        gold. It is 222cm above the ground.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">Al-Multazam</h4>
                      <p>
                        It is the eastern wall or part of it. It is located between the Black Stone and the door of the
                        Ka'bah. Iltizam (holding) means that a person presses his chest, face, arms and hands against
                        this wall, and supplicates Allah Almighty. This may be difficult, even impossible, during
                        crowded seasons.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">The Roof Gutter</h4>
                      <p>It is the part installed on the surface of the Ka'bah to drain water to Hijr Ismail.</p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">Shazrawan</h4>
                      <p>
                        It is a supporting structure for the Ka'bah. It encompasses it like a dress. It is not part of
                        the Ka'bah. Rather, it was originally built to strengthen the structure of the Ka'bah and
                        protect it from torrential rains. It has been preserved over the centuries. Today, it is covered
                        with white marble.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">The Black Stone</h4>
                      <p>
                        The Black Stone came from Paradise, as the Prophet, blessing and peace be upon him, said. It
                        marks the starting and concluding points of one's circumambulation. After a part of the building
                        of the Ka'bah was demolished by rain, the Prophet, blessings and peace be upon him, put the
                        Black Stone back in its place when people differed over who would put it in its place.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">The Yemeni Corner</h4>
                      <p>
                        The Yemeni Corner is one of the four corners of the Honored Ka'bah. It is called "Yamani"
                        because it faces Yemen. This corner and the Black Stone are called "the two Yemeni corners."
                      </p>
                    </div>
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

