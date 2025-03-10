import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function AccessibilityServicesPage() {
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
            alt="Accessibility Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Accessibility Services</h1>
              <p className="text-xl text-white/80">Inclusive worship for all pilgrims</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Services for People with Special Needs</h2>

                <p className="mb-6 text-lg">
                  All services needed by people with hearing and speech impairments and people having difficulty hearing
                  are available in the Grand Mosque. Several employees take care of and provide services to them. The
                  best technical services are also available so that they may perform their worship in the Grand Mosque
                  with ease.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Services for People with Hearing and Speech Impairments</h3>
                  <p className="mb-4">
                    The Grand Mosque provides specialized services for deaf and hard-of-hearing visitors:
                  </p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sign language interpreters at key locations</li>
                    <li>Visual displays for prayer times and announcements</li>
                    <li>Sign language translation of Friday sermons</li>
                    <li>Special guidance materials with visual instructions</li>
                    <li>Staff trained in sign language</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Services for People with Visual Impairments</h3>
                  <p className="mb-4">For blind and visually impaired pilgrims, the Grand Mosque offers:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Braille signage throughout the mosque</li>
                    <li>Tactile paving for navigation</li>
                    <li>Audio guidance systems</li>
                    <li>Braille copies of the Quran and prayer guides</li>
                    <li>Trained guides to assist with navigation</li>
                    <li>Designated prayer areas with additional support</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Services for People with Mobility Impairments</h3>
                  <p className="mb-4">In addition to the wheelchair services, the Grand Mosque provides:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Ramps and accessible pathways throughout the mosque</li>
                    <li>Elevators to all levels</li>
                    <li>Accessible restrooms and ablution areas</li>
                    <li>Special Tawaf paths for people with mobility impairments</li>
                    <li>Reserved prayer spaces</li>
                    <li>Assistance for performing Sa'i between Safa and Marwah</li>
                  </ul>

                  <p className="mt-4">
                    These services reflect the Kingdom's commitment to ensuring that all Muslims, regardless of physical
                    ability, can perform their religious duties with dignity and ease.
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

