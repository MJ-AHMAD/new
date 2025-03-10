import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"

export default function HajjPage() {
  const hajjPackages = [
    {
      id: "hajj-package",
      title: "Complete Hajj Package 2025",
      price: "£5,999",
      duration: "21 Days",
      description: "Comprehensive Hajj package with all arrangements taken care of.",
      features: [
        "5★ Hotel in Makkah (10 nights)",
        "5★ Hotel in Madinah (5 nights)",
        "Premium Tents in Mina & Arafat",
        "Return Flights from London",
        "Hajj Visa Processing",
        "All Transportation",
        "Guided Rituals",
        "All Meals Included",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
    {
      id: "hajj-premium",
      title: "Premium Hajj Package 2025",
      price: "£7,999",
      duration: "25 Days",
      description: "Luxury Hajj experience with VIP services and extended stay.",
      features: [
        "5★ Luxury Hotel in Makkah (12 nights)",
        "5★ Luxury Hotel in Madinah (7 nights)",
        "VIP Tents in Mina & Arafat",
        "Business Class Flights",
        "Express Hajj Visa Processing",
        "Private Transportation",
        "Personal Guide for Rituals",
        "Gourmet Meals Included",
        "VIP Access to Prayer Areas",
      ],
      image: "https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00",
    },
  ]

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
        <div className="relative h-[50vh]">
          <Image
            src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
            alt="Hajj Packages"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Hajj Packages 2025</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Embark on the journey of a lifetime with our comprehensive Hajj packages designed to provide a
                spiritually fulfilling experience.
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Hajj Packages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                TRUSTED-ALLY offers meticulously planned Hajj packages that take care of all aspects of your pilgrimage,
                allowing you to focus entirely on your spiritual journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {hajjPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative h-56">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                    <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {pkg.duration}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>

                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
                      <span className="text-gray-500 text-sm"> / per person</span>
                    </div>

                    <ul className="mb-6 space-y-2">
                      {pkg.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                      {pkg.features.length > 4 && (
                        <li className="text-gray-500 text-sm italic">+ {pkg.features.length - 4} more features</li>
                      )}
                    </ul>

                    <div className="flex space-x-3">
                      <Link
                        href={`/packages/${pkg.id}`}
                        className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 text-center py-2 rounded-md font-medium transition-colors duration-300"
                      >
                        Learn More
                      </Link>
                      <Link
                        href={`/book/${pkg.id}`}
                        className="flex-1 bg-green-600 text-white hover:bg-green-700 text-center py-2 rounded-md font-medium transition-colors duration-300"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Hajj Information</h2>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Important Dates for Hajj 2025</h3>
                <p className="text-gray-700 mb-4">
                  The exact dates for Hajj 2025 will be determined by the Islamic lunar calendar. The tentative dates
                  are expected to be in June 2025. We will update this information as soon as the official dates are
                  announced.
                </p>
                <div className="bg-green-50 p-4 rounded-md">
                  <p className="text-green-800 font-medium">
                    Note: Early booking is recommended as Hajj visas are limited and accommodations in Makkah and
                    Madinah fill up quickly.
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Hajj Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Valid Passport:</strong> With at least 6 months validity from the date of travel.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Hajj Visa:</strong> We will assist with the visa application process.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Vaccination:</strong> Meningitis (ACWY) vaccination certificate and any other vaccinations
                      required by Saudi authorities.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Health Certificate:</strong> A medical certificate confirming fitness to perform Hajj.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">
                      <strong>Mahram:</strong> Women under 45 years must be accompanied by a Mahram (husband, father,
                      brother, or son).
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Contact Us for More Information
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

