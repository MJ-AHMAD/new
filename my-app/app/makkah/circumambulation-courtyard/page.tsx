import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function CircumambulationCourtyardPage() {
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
            alt="Circumambulation Courtyard"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
                Milestones of the Circumambulation Courtyard
              </h1>
              <p className="text-xl text-white/80">The sacred area surrounding the Ka'bah</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Milestones of the Circumambulation Courtyard</h2>
                <p className="mb-6 text-lg">
                  The circumambulation area is the courtyard tiled with white marble, which surrounds the Noble Ka'bah.
                  It is now called the courtyard. It is the space where Muslims rotate around the Kaaba.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">
                    Some important features of the circumambulation courtyard are:
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-lg">The Noble Ka'bah</h4>
                      <p>
                        It is the qiblah of Muslims and is dear to their hearts. It is the only object around which they
                        rotate in worship to Allah.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-lg">Maqam Ibrahim (Abraham)</h4>
                      <p>
                        It is the rock on which Abraham, peace be upon him, stood when building the Ka'bah. It is a
                        clear and visible sign in the Haram. Allah Almighty said: "In it are clear signs [such as] the
                        standing place of Abraham."
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Significance of the Circumambulation Courtyard</h3>
                  <p className="mb-4">
                    The circumambulation courtyard is one of the most sacred areas in Islam. It is where pilgrims
                    perform the Tawaf ritual, which is an essential part of both Hajj and Umrah. During Tawaf, pilgrims
                    walk around the Ka'bah seven times in a counterclockwise direction, starting and ending at the Black
                    Stone.
                  </p>

                  <p>
                    The courtyard has been expanded multiple times throughout history to accommodate the increasing
                    number of pilgrims. Today, it can accommodate thousands of worshippers simultaneously, with multiple
                    levels to maximize capacity while ensuring a smooth flow of pilgrims.
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

