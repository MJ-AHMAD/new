import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function LearnMorePage() {
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
            alt="Makkah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Makkah: The Sacred Sanctuary</h1>
              <p className="text-xl text-white/80">Learn more about the holiest city in Islam</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Makkah is the Sanctuary of Allah</h2>
                <p className="mb-4">
                  Allah singled out Makkah and honored it over all parts of the world. One of the greatest signs is that
                  it is His sanctuary.
                </p>

                <h3 className="text-xl font-bold mb-2">What is the meaning of "Haram" (Sanctuary)?</h3>
                <p className="mb-4">
                  It is a place in which certain things, allowed elsewhere, are prohibited out of veneration and
                  reverence for the One Who prohibited it. Allah the Exalted said: "And who observes the sanctity of the
                  sites ordained by Allah, it will be good for him in the sight of his Lord."
                </p>

                <p className="mb-4">
                  Allah has chosen this land and made it sacred, forbidding in it what He permitted in other places, and
                  singling it out with virtues and merits that are not found in any other place. Its sanctity and
                  stature date back to the very first beginning of the entire universe.
                </p>

                <p className="mb-4">
                  Allah has made this land into a Sanctity and assigned to it a very special rank on the day this
                  universe was created. It will remain so until the end of time. The Prophet (blessings and peace be
                  upon him) said: "Allah has made this town a sanctuary from the day He created the heavens and the
                  earth. So, it is a sanctuary by Allah's decree till the Day of Resurrection."
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">What does the Sanctity mean to me?</h3>
                <p className="mb-4">
                  You are now in a place that Allah singled out, honored and sacralized before He even created humans.
                  He ordered Abrahim, peace be upon him, to raise the foundations and build the House (Ka'bah) before
                  even a single soul lived in Makkah, and chose it to be the qiblah and guidance for the whole world.
                  Allah the Exalted said: "The first House (of Prayer) established for mankind is the one at Bakkah
                  (Makkah): a blessed place, a guidance for all worlds (of people and jinn)".
                </p>
                <p className="mb-4">
                  You are in a place where the reward for a good deed is multiplied, and where a sin is not like a sin
                  in any other place.
                </p>
                <p className="mb-4">
                  Allah commanded His noblest humans, Abrahim and Ismail, peace be upon them, and then Muhammad
                  (blessings and peace be upon him), to purify, build and take care of the Ka'bah.
                </p>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">Makkah is the Qiblah of the Muslims</h3>
                <p className="mb-4">
                  Honorable Makkah is the best place on earth and the most beloved place to Allah and His Messenger.
                </p>

                <p className="mb-4">
                  Allah chose it for the rituals of Hajj and made visiting it an act of worship by which ranks are
                  raised and bad deeds are erased. The Prophet (blessings and peace be upon him) said: "By Allah, you
                  are the best part of Allah's earth and the part dearest to Him."
                </p>

                <p className="mb-4">
                  It is the place where the first House on earth for the worship of Allah alone was established. Allah
                  the Exalted said: "The first House (of Prayer) established for mankind is the one at Bakkah (Makkah):
                  a blessed place, a guidance for all worlds (of people and jinn)."
                </p>

                <p className="mb-4">
                  Makkah attained that privilege and position in the first moments of creating the universe. The Prophet
                  (blessings and peace be upon him) said: "Allah made this town sacred on the day He created the heavens
                  and the earth, so it is sacred by the sanctity conferred on it by Allah till the day of resurrection."
                </p>

                <p className="mb-4">
                  Muslims from all parts of the world turn toward it five times a day in worship to their Lord, to
                  strengthen their unity and brotherhood. Allah the Exalted said: "We have seen you (O Muhammad),
                  turning your face over and over again towards Heaven. Now, therefore, We turn you towards the qiblah
                  that you like best: so turn your face towards the Sacred Mosque. Henceforth, wheresoever you may be,
                  turn your face at prayer towards it."
                </p>

                <p className="mb-4">
                  For Muslims, Makkah is a qiblah, guidance, blessing and grace around which their lives revolve. It is
                  necessary that we thank Allah for this great blessing. Allah the Exalted said: "Allah has appointed
                  the Ka'bah, the Sacred House, as a means for support for mankind, and the Sacred Month, the offerings
                  and the garlands. That is so that you may know that Allah knows whatsoever is in the heavens and the
                  earth, and that Allah is Knower of all things."
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

