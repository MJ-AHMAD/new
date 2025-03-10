import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import MobileNavigation from "@/components/MobileNavigation"
import { AirlineLogos } from "@/components/airline-logos"
import { AccommodationCard } from "@/components/accommodation-card"

export default function Home() {
  // Update the umrahPackages array
  const umrahPackages = [
    {
      id: "standard-umrah",
      title: "Standard Umrah Package",
      description: "A comprehensive package for a fulfilling Umrah experience.",
      price: "BDT 210,000",
      image: "/standard00.png",
      link: "/packages/standard-umrah",
    },
    {
      id: "family-umrah",
      title: "Family Umrah Package",
      description: "Special arrangements for families performing Umrah together.",
      price: "BDT 196,000",
      image: "/family00.png",
      link: "/packages/family-umrah",
    },
    {
      id: "ramadan-umrah",
      title: "Ramadan Umrah Package",
      description: "Experience the blessed month of Ramadan in the holy cities.",
      price: "BDT 252,000",
      image: "/ramadan00.png",
      link: "/packages/ramadan-umrah",
    },
    {
      id: "premium-umrah",
      title: "Premium Umrah Package",
      description: "Luxury accommodations and VIP services for a premium Umrah experience.",
      price: "BDT 320,000",
      image: "/standard00.png",
      link: "/packages/premium-umrah",
    },
  ]

  // Update the hajjPackages array
  const hajjPackages = [
    {
      id: "standard-hajj",
      title: "Standard Hajj Package",
      description: "Complete arrangements for performing the sacred pilgrimage of Hajj.",
      price: "BDT 560,000",
      image: "/ramadan00.png",
      link: "/packages/hajj-package",
    },
    {
      id: "premium-hajj",
      title: "Premium Hajj Package",
      description: "Premium accommodations and services for a comfortable Hajj experience.",
      price: "BDT 750,000",
      image: "/hajj00.png",
      link: "/packages/premium-hajj",
    },
    {
      id: "vip-hajj",
      title: "VIP Hajj Package",
      description: "Luxury accommodations and personalized services for a VIP Hajj experience.",
      price: "BDT 950,000",
      image: "/holi00.png",
      link: "/packages/vip-hajj",
    },
  ]

  // Update the transportationServices array
  const transportationServices = [
    {
      id: "airport-transfers",
      title: "Airport Transfers",
      description: "Comfortable transportation between airports and your accommodation.",
      image: "/tr00.png",
      link: "/services/transportation#airport-transfers",
    },
    {
      id: "city-transfers",
      title: "City Transfers",
      description: "Reliable transportation within Makkah and Madinah.",
      image: "/minibus00.png",
      link: "/services/transportation#city-transfers",
    },
    {
      id: "intercity-transfers",
      title: "Intercity Transfers",
      description: "Comfortable transportation between Makkah, Madinah, and other holy sites.",
      image: "/bigbus00.png",
      link: "/services/transportation#intercity-transfers",
    },
  ]

  // Update the trainServices array
  const trainServices = [
    {
      id: "haramain-train",
      title: "Jeddah - Makkah - Madina",
      description: "Fast and comfortable train service between Makkah and Madinah.",
      image: "/haramain00.png",
      link: "/book-haramain-train/makkah-madinah",
    },
    {
      id: "business-class",
      title: "Madina- Makkah - Jeddah",
      description: "Premium business class train service with added comfort.",
      image: "/haramain01.png",
      link: "/book-haramain-train/business-class",
    },
  ]

  // Update the flightServices array
  const flightServices = [
    {
      id: "international-flights",
      title: "DAC - JED - MED - DAC",
      description: "Flights from Bangladesh to Saudi Arabia with major airlines.",
      image: "/fli00.png",
      link: "/services/flights#international",
    },
    {
      id: "domestic-flights",
      title: "CGT - JED - MED - CGT",
      description: "Flights between major cities within Saudi Arabia.",
      image: "/flights01.png",
      link: "/services/flights#domestic",
    },
  ]

  // Update the otherServices array
  const otherServices = [
    {
      id: "accommodation",
      title: "Accommodation Services",
      description: "Comfortable and convenient accommodation options near the holy sites.",
      image: "/staymakkah00.png",
      link: "/services/accommodation",
    },
    {
      id: "dining",
      title: "Dining Services",
      description: "Delicious and authentic meals catering to various tastes and dietary requirements.",
      image: "/mealsmakkah00.png",
      link: "/services/dining",
    },
    {
      id: "guided-tours",
      title: "Guided Tours",
      description: "Expert guides to provide spiritual and historical context to your sacred journey.",
      image: "/haram00.png",
      link: "/services/guided-tours",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/icon.png" alt="T-ALLY Logo" width={50} height={50} className="mr-3" />
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
        <section className="relative h-[70vh]">
          <Image
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
            alt="Umrah Packages"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Umrah Packages for Bangladeshi Pilgrims
              </h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive and affordable Umrah packages designed specifically for pilgrims from Bangladesh.
              </p>
              <div className="mt-6">
                <Link
                  href="/packages"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Explore Packages
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Umrah Packages Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Umrah Packages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a range of Umrah packages to suit different preferences and budgets. All our packages include
                visa processing, accommodation, transportation, and guided tours.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {umrahPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold">{pkg.price}</span>
                      <Link
                        href={pkg.link}
                        className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/packages"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                View All Umrah Packages
              </Link>
            </div>
          </div>
        </section>

        {/* Hajj Packages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Hajj Packages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Complete arrangements for performing the sacred pilgrimage of Hajj with various comfort levels to choose
                from.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {hajjPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-green-600 font-bold">{pkg.price}</span>
                      <Link
                        href={pkg.link}
                        className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/hajj"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Learn More About Hajj
              </Link>
            </div>
          </div>
        </section>

        {/* Transportation Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Transportation Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Premium transportation services for your comfortable journey to and around the holy cities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transportationServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services/transportation"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                View All Transportation Options
              </Link>
            </div>
          </div>
        </section>

        {/* Train Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Train Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Fast and comfortable train services between Makkah and Madinah.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {trainServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href="/book-haramain-train/jeddah-makkah"
                      className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                    >
                      Book Train Tickets
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Flight Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Flight Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive flight services with multiple options from Bangladesh to Saudi Arabia.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {flightServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                    >
                      View Flight Options
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services/flights"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Learn More About Flight Services
              </Link>
            </div>
          </div>
        </section>

        {/* Other Services Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Other Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Additional services to ensure your Umrah journey is comfortable, convenient, and spiritually fulfilling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {otherServices.map((service) => (
                <div
                  key={service.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/services"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
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
                      <span>
                        <strong className="text-gray-800">Experience:</strong> Over 10 years of experience in organizing
                        Umrah trips for Bangladeshi pilgrims.
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
                      <span>
                        <strong className="text-gray-800">Personalized Service:</strong> Tailored packages to meet your
                        specific needs and preferences.
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
                      <span>
                        <strong className="text-gray-800">Support:</strong> 24/7 assistance throughout your journey from
                        our experienced team.
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
                      <span>
                        <strong className="text-gray-800">Quality Accommodation:</strong> Comfortable hotels located
                        close to the Haram in both Makkah and Madinah.
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
                      <span>
                        <strong className="text-gray-800">Transparent Pricing:</strong> No hidden costs or unexpected
                        charges.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="md:w-1/2">
                  <div className="relative h-80 w-full rounded-lg overflow-hidden">
                    <Image src="/holi00.png" alt="Pilgrims at Kaaba" fill className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Embark on Your Spiritual Journey?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Contact us today to book your Umrah package or to customize a package that suits your specific
                requirements.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        <div className="container mx-auto py-8">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Airline Partners</h2>
            <AirlineLogos />
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Featured Accommodations</h2>
            <AccommodationCard />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

