import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  const services = [
    {
      id: "transportation",
      title: "Transportation",
      description: "Premium transportation services for your comfortable journey to and around the holy cities.",
      image: "https://mj-ahmad.github.io/mja2025/img/tr00.png",
      link: "/services/transportation",
    },
    {
      id: "accommodation",
      title: "Accommodation",
      description: "Comfortable and convenient accommodation options near the holy sites.",
      image: "https://mj-ahmad.github.io/mja2025/img/staymakkah00.png",
      link: "/services/accommodation",
    },
    {
      id: "dining",
      title: "Dining",
      description: "Delicious and authentic meals catering to various tastes and dietary requirements.",
      image: "https://mj-ahmad.github.io/mja2025/img/mealsmakkah00.png",
      link: "/services/dining",
    },
    {
      id: "guided-tours",
      title: "Guided Tours",
      description: "Expert guides to provide spiritual and historical context to your sacred journey.",
      image: "https://mj-ahmad.github.io/mja2025/img/exp00.png",
      link: "/services/guided-tours",
    },
    {
      id: "flights",
      title: "Flight Services",
      description: "Comprehensive flight services with multiple options from Bangladesh to Saudi Arabia.",
      image: "https://mj-ahmad.github.io/mja2025/img/fl00.png",
      link: "/services/flights",
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
              <Link href="/services" className="hover:text-green-200 transition-colors">
                Services
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
            src="https://mj-ahmad.github.io/mja2025/img/tr00.png"
            alt="Our Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comprehensive Travel Services for a Memorable Umrah Experience
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Travel Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                TRUSTED-ALLY provides end-to-end Umrah travel services to ensure your Makkah and Madinah journey is
                seamless, comfortable, and memorable from start to finish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
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
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Your Comfort is Our Priority</h2>
              <p className="text-lg text-gray-700 mb-8">
                We understand the significance of your spiritual journey and are committed to providing exceptional
                services that meet your needs and exceed your expectations. Our team is available 24/7 to assist you
                throughout your pilgrimage.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
              >
                Contact Us for More Information
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

