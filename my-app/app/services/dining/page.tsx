import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function DiningPage() {
  const diningOptions = [
    {
      title: "Hotel Dining",
      description:
        "Enjoy convenient and delicious meals at your hotel, with options ranging from buffets to à la carte dining.",
      features: [
        "Breakfast buffets",
        "Lunch and dinner options",
        "Room service",
        "Special dietary accommodations",
        "Authentic local and international cuisines",
      ],
      image: "https://mj-ahmad.github.io/mja2025/img/diningmakkah00.png",
    },
    {
      title: "Traditional Bengali Cuisine",
      description:
        "Taste the flavors of home with our specially arranged Bengali meals, prepared by experienced chefs from Bangladesh.",
      features: [
        "Authentic Bengali flavors",
        "Home-style preparation",
        "Familiar spices and ingredients",
        "Vegetarian and non-vegetarian options",
        "Special festive meals",
      ],
      image: "https://mj-ahmad.github.io/mja2025/img/bengalicuisine00.png",
    },
    {
      title: "Iftar and Suhoor Arrangements",
      description:
        "During Ramadan, enjoy specially arranged Iftar and Suhoor meals designed to provide nourishment for your spiritual journey.",
      features: [
        "Traditional Iftar items",
        "Nutritious Suhoor meals",
        "Dates and refreshments",
        "Community dining experience",
        "Convenient timing and locations",
      ],
      image: "https://mj-ahmad.github.io/mja2025/img/iftar00.png",
    },
    {
      title: "Special Dietary Requirements",
      description:
        "We cater to various dietary needs and restrictions, ensuring all pilgrims can enjoy satisfying and appropriate meals.",
      features: [
        "Diabetic-friendly options",
        "Low-sodium meals",
        "Vegetarian and vegan choices",
        "Halal-certified food",
        "Allergen-free preparations",
      ],
      image: "https://mj-ahmad.github.io/mja2025/img/dietary00.png",
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
            src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
            alt="Dining Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Dining Services</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Delicious and nutritious meals to sustain you throughout your spiritual journey
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Dining Options</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We understand the importance of proper nutrition during your spiritual journey. Our dining options are
                designed to provide delicious, nutritious, and culturally appropriate meals that cater to various
                preferences and dietary requirements.
              </p>
            </div>

            <div className="space-y-12">
              {diningOptions.map((option, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  <div className="md:w-1/2">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden">
                      <Image
                        src={option.image || "/placeholder.svg"}
                        alt={option.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                    <p className="text-gray-700 mb-4">{option.description}</p>
                    <h4 className="font-semibold mb-2">Features:</h4>
                    <ul className="space-y-2">
                      {option.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Commitment to Quality</h2>
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Food Safety</h3>
                  <p className="text-gray-600">
                    All our food preparations adhere to strict hygiene and safety standards to ensure your health and
                    well-being.
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
                        d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Halal Certified</h3>
                  <p className="text-gray-600">
                    We ensure all food served is 100% Halal certified, prepared according to Islamic dietary guidelines.
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
                        d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Nutritional Balance</h3>
                  <p className="text-gray-600">
                    Our meals are designed to provide the right balance of nutrients to keep you energized during your
                    pilgrimage.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  আমরা আপনার পবিত্র ভ্রমণে সুস্বাদু ও পুষ্টিকর খাবার প্রদানের জন্য প্রতিশ্রুতিবদ্ধ। আমাদের খাবারগুলি বাংলাদেশি স্বাদ এবং আন্তর্জাতিক
                  মানের সমন্বয়ে তৈরি করা হয়, যাতে আপনি ইবাদত করার জন্য প্রয়োজনীয় শক্তি পান এবং বাড়ির স্বাদ উপভোগ করতে পারেন।
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Contact Us for Special Dietary Requests
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

