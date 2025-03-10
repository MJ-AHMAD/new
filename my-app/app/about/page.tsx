import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
        <div className="relative h-[40vh]">
          <Image
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
            alt="About TRUSTED-ALLY"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">About TRUSTED-ALLY</h1>
              <p className="text-xl text-white/80">Together Towards a Brighter Future</p>
            </div>
          </div>
        </div>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-8">
                At TRUSTED-ALLY, we are passionately committed to creating a peaceful and equitable world where everyone
                thrives. Our goals and objectives focus on Education Innovation, Communal Harmony, and Sustainable
                Development.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Education Innovation</h3>
                  <p className="text-gray-600">
                    We believe in the power of education to transform lives and communities. Our initiatives focus on
                    providing quality education to all.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Communal Harmony</h3>
                  <p className="text-gray-600">
                    We work to foster understanding, respect, and cooperation among diverse communities for a peaceful
                    coexistence.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.65M12 14.5V12m0 0L9.5 9.5m2.5 2.5l2.5-2.5M15 19.5v-2m0 0l2.5 2.5M15 17.5l-2.5 2.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Sustainable Development</h3>
                  <p className="text-gray-600">
                    We are committed to promoting sustainable practices that protect our planet for future generations.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-center">Our Umrah & Hajj Services</h2>
              <p className="text-lg text-gray-700 mb-8">
                As part of our commitment to serving the community, TRUSTED-ALLY provides comprehensive Umrah and Hajj
                services. We understand the spiritual significance of these pilgrimages and strive to make them
                accessible, comfortable, and spiritually fulfilling for all pilgrims.
              </p>

              <div className="bg-green-50 p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-4">Why Choose Our Umrah & Hajj Services?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Experienced Team:</strong> Our team has years of experience in organizing successful Umrah
                      and Hajj trips.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Comprehensive Packages:</strong> Our packages include everything from visa processing to
                      accommodation and transportation.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Spiritual Guidance:</strong> We provide knowledgeable guides to assist with rituals and
                      enhance your spiritual experience.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Personalized Service:</strong> We understand that each pilgrim has unique needs, and we
                      strive to accommodate them.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link
                  href="/packages"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Explore Our Packages
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

