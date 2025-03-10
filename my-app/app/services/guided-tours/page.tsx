import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function GuidedToursPage() {
  const tourOptions = [
    {
      title: "Makkah Ziyarah Tours",
      description:
        "Explore the historically significant sites in and around Makkah with knowledgeable guides who provide religious and historical context.",
      features: [
        "Visit to Jabal al-Noor (Cave of Hira)",
        "Tour of Jabal Thawr",
        "Visit to Mina, Muzdalifah, and Arafat",
        "Historical mosques and landmarks",
        "Transportation and refreshments included",
      ],
      image: "https://mj-ahmad.github.io/mja2025/img/guided00.png",
    },
    {
      title: "Madinah Ziyarah Tours",
      description:
        "Visit the blessed city of Madinah and its significant sites, deepening your understanding of Islamic history and the Prophet's life.",
      features: [
        "Visit to Quba Mosque",
        "Tour of Uhud Mountain and martyrs' cemetery",
        "Visit to Masjid Qiblatain",
        "Seven Mosques area",
        "Dates farms and historical sites",
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
    {
      title: "Umrah Guidance",
      description:
        "Receive step-by-step guidance for performing Umrah rituals correctly, ensuring a spiritually fulfilling experience.",
      features: [
        "Pre-Umrah orientation session",
        "Guidance for Ihram procedures",
        "Step-by-step assistance for Tawaf",
        "Guidance for Sa'i between Safa and Marwa",
        "Assistance with prayers and supplications",
      ],
      image: "https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00",
    },
    {
      title: "Historical and Educational Tours",
      description:
        "Enhance your knowledge with specialized tours focusing on the rich history, architecture, and significance of the holy sites.",
      features: [
        "Detailed historical narratives",
        "Architectural insights of the Holy Mosques",
        "Islamic history discussions",
        "Question and answer sessions",
        "Educational materials provided",
      ],
      image: "https://mj-ahmad.github.io/mja2025/img/historical00.png",
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
            src="https://mj-ahmad.github.io/mja2025/img/guided00.png"
            alt="Guided Tours"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Guided Tours</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Enhance your spiritual journey with expert guidance and historical context
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Guided Tour Options</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our guided tours are designed to enhance your spiritual experience by providing religious and historical
                context to the sacred places you visit. Our experienced guides are knowledgeable in Islamic history and
                the significance of each site.
              </p>
            </div>

            <div className="space-y-12">
              {tourOptions.map((option, index) => (
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
                    <h4 className="font-semibold mb-2">Highlights:</h4>
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
              <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Guides</h2>
              <p className="text-lg text-gray-700 text-center mb-12">
                Our guides are carefully selected for their knowledge, experience, and dedication to providing an
                enriching and spiritual experience for pilgrims.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src=""
                      alt="Guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hafiz Abdullah</h3>
                  <p className="text-gray-600 mb-2">Senior Guide - Makkah</p>
                  <p className="text-gray-600 text-sm">
                    With over 15 years of experience guiding pilgrims and extensive knowledge of Islamic history.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src=""
                      alt="Guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Maulana Rafiq</h3>
                  <p className="text-gray-600 mb-2">Senior Guide - Madinah</p>
                  <p className="text-gray-600 text-sm">
                    Islamic scholar with deep knowledge of the Prophet's life and the historical sites of Madinah.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                    <Image
                      src=""
                      alt="Guide"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Hafiza Ayesha</h3>
                  <p className="text-gray-600 mb-2">Women's Group Guide</p>
                  <p className="text-gray-600 text-sm">
                    Specialized in providing guidance and support for women pilgrims, ensuring their comfort and
                    privacy.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  আমাদের অভিজ্ঞ গাইডরা আপনাকে উমরাহ এবং জিয়ারত করার সময় পূর্ণ সহায়তা প্রদান করবে। তারা ইসলামিক ইতিহাস, পবিত্র স্থানগুলির গুরুত্ব
                  এবং সঠিক ইবাদত সম্পর্কে গভীর জ্ঞান রাখে, যা আপনার আধ্যাত্মিক যাত্রাকে আরও সমৃদ্ধ করবে।
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Book a Guided Tour
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

