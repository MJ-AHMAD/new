import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function MarketsAndRestaurantsPage() {
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
            src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
            alt="Markets and Restaurants"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">Markets and Restaurants</h1>
              <p className="text-xl text-white/80">Shopping and dining near the Grand Mosque</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Markets and Restaurants Next to the Haram</h2>

                <p className="mb-6 text-lg">
                  There are many markets and stores around the Grand Mosque of Makkah. They are suitable for different
                  visitors in terms of their prices and the goods. The area surrounding the Grand Mosque offers a wide
                  variety of shopping and dining options to serve pilgrims from around the world.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Shopping Centers and Markets</h3>
                  <p className="mb-4">Major shopping destinations near the Grand Mosque include:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-semibold">Abraj Al-Bait Mall</span> - Located in the Clock Tower complex,
                      offering luxury brands and international retailers
                    </li>
                    <li>
                      <span className="font-semibold">Makkah Mall</span> - A modern shopping center with a wide range of
                      stores
                    </li>
                    <li>
                      <span className="font-semibold">Al-Hijra Market</span> - Known for religious items, books, and
                      souvenirs
                    </li>
                    <li>
                      <span className="font-semibold">Souq Al-Khalil</span> - A traditional market selling textiles,
                      clothing, and perfumes
                    </li>
                    <li>
                      <span className="font-semibold">Al-Diyafa Mall</span> - Offering a mix of international and local
                      brands
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-bold mb-4">Popular Items to Purchase</h3>
                  <p className="mb-4">Visitors to Makkah often purchase the following items:</p>

                  <ul className="list-disc pl-6 space-y-2">
                    <li>Prayer rugs and Islamic books</li>
                    <li>Zamzam water containers</li>
                    <li>Dates and Arabian sweets</li>
                    <li>Middle Eastern spices and herbs</li>
                    <li>Arabian perfumes and oils (attar)</li>
                    <li>Islamic calligraphy and art</li>
                    <li>Prayer beads (Misbaha)</li>
                    <li>Traditional clothing and abayas</li>
                    <li>Gold and jewelry (in specialized markets)</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Restaurants and Dining Options</h3>
                  <p className="mb-4">The area around the Grand Mosque offers diverse dining options:</p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold">International Chains</h4>
                      <p>Familiar options including KFC, McDonald's, Starbucks, and Pizza Hut</p>
                    </div>

                    <div>
                      <h4 className="font-bold">Middle Eastern Cuisine</h4>
                      <p>Authentic restaurants serving Arabian, Lebanese, and Turkish dishes</p>
                    </div>

                    <div>
                      <h4 className="font-bold">South Asian Restaurants</h4>
                      <p>Indian, Pakistani, and Bangladeshi restaurants catering to pilgrims from these regions</p>
                    </div>

                    <div>
                      <h4 className="font-bold">Hotel Restaurants</h4>
                      <p>Upscale dining options in the many hotels surrounding the mosque</p>
                    </div>

                    <div>
                      <h4 className="font-bold">Fast Food and Quick Service</h4>
                      <p>Local chains like Al Baik (famous for fried chicken) and casual dining options</p>
                    </div>
                  </div>

                  <p className="mt-4">
                    Many restaurants offer delivery services to hotels, making it convenient for pilgrims to dine in
                    their accommodations after a day of worship.
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

