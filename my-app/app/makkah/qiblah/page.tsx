import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MakkahQiblahPage() {
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
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
            alt="Makkah Qiblah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Makkah the Qiblah of Muslims</h1>
              <p className="text-xl text-white/80">The direction to which all Muslims turn in prayer</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Makkah the Qiblah of Muslims</h2>
                <p className="mb-4 text-lg">
                  Honorable Makkah is the best place on earth and the most beloved place to Allah and His Messenger.
                </p>

                <p className="mb-4">
                  Allah chose it for the rituals of Hajj and made visiting it an act of worship by which ranks are
                  raised and bad deeds are erased. The Prophet (blessings and peace be upon him) said: "By Allah, you
                  are the best part of Allah's earth and the part dearest to Him".
                </p>

                <p className="mb-4">
                  It is the place where the first House on earth for the worship of Allah alone was established. Allah
                  the Exalted said: "The first House (of Prayer) established for mankind is the one at Bakkah (Makkah):
                  a blessed place, guidance for all worlds (of people and jinn)".
                </p>

                <p className="mb-4">
                  Makkah attained that privilege and position in the first moments of creating the universe. The Prophet
                  (blessings and peace be upon him) said: "Allah made this town sacred on the day He created the heavens
                  and the earth, so it is sacred by the sanctity conferred on it by Allah till the day of resurrection".
                </p>

                <p className="mb-4">
                  Muslims from all parts of the world turn toward it five times a day in worship to their Lord, to
                  strengthen their unity and brotherhood. Allah the Exalted said: "We have seen you (O Muhammad),
                  turning your face over and over again towards Heaven. Now, therefore, We turn you towards the Qiblah
                  that you like best: so turn your face towards the Sacred Mosque. Henceforth, wheresoever you may be,
                  turn your face at prayer towards it."
                </p>

                <p className="mb-4">
                  For Muslims, Makkah is a Qiblah, guidance, blessing, and grace around which their lives revolve. It is
                  necessary that we thank Allah for this great blessing. Allah the Exalted said: "Allah has appointed
                  the Kaaba, the Sacred House, as a means of support for mankind, and the Sacred Month, the offerings,
                  and the garlands. That is so that you may know that Allah knows whatsoever is in the heavens and the
                  earth and that Allah is Knower of all things."
                </p>

                <p className="mb-4">
                  It is the sanctuary of Allah, Who honored it and singled it out with the greatest characteristics.
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

