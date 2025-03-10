import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Footer } from "@/components/footer"

export default function HajjUmrahGuidancePage() {
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
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
            alt="Kaaba in Makkah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Hajj and Umrah Guidance</h1>
            <p className="text-xl md:text-2xl">Prepare Your Heart and Soul for a Transformative Journey</p>
          </div>
        </section>

        {/* Importance of Makkah and Madinah */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">The Sacred Cities: Makkah and Madinah</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Makkah: The Holy City</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 h-48 relative">
                    <Image
                      src="https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg"
                      alt="Makkah"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="text-gray-700">
                    Makkah, the birthplace of Prophet Muhammad (peace be upon him), is home to the Holy Kaaba. It is the
                    direction Muslims face during prayer and the central point of Hajj and Umrah rituals. The sanctity
                    of this city demands utmost respect and reverence from all visitors.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Madinah: The City of the Prophet</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4 h-48 relative">
                    <Image
                      src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                      alt="Madinah"
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <p className="text-gray-700">
                    Madinah, where Prophet Muhammad (peace be upon him) established the first Islamic state, is home to
                    his mosque and final resting place. Visiting Madinah, though not obligatory, is a deeply spiritual
                    experience that complements the Hajj and Umrah journey.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Guidelines for Proper Conduct */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Guidelines for Proper Conduct</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Respect and Humility
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">
                    Approach your pilgrimage with humility and respect. Be mindful of your behavior, speech, and
                    interactions with others. Remember that you are in the presence of Allah and in His sacred places.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Patience and Tolerance
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">
                    Practice patience and tolerance with fellow pilgrims. The journey can be physically and emotionally
                    challenging. Show kindness and understanding to others, regardless of their backgrounds.
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Focus on Worship
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">
                    Dedicate your time and energy to worship and reflection. Minimize distractions and worldly concerns.
                    Use this opportunity to strengthen your connection with Allah and seek His forgiveness and guidance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Spiritual Preparation */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Spiritual Preparation</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 mb-6">
                Preparing for Hajj or Umrah is not just about logistics; it's a journey of the heart and soul. Here are
                some ways to prepare spiritually:
              </p>
              <ul className="list-disc list-inside space-y-4 text-gray-700">
                <li>Increase your knowledge about the rituals and their significance</li>
                <li>Reflect on your past and seek sincere repentance</li>
                <li>Increase your voluntary acts of worship, such as prayer and fasting</li>
                <li>Read and reflect on the Quran</li>
                <li>Make dua (supplication) for a successful and accepted pilgrimage</li>
                <li>Resolve any conflicts or debts you may have with others</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What documents are required for Umrah from Bangladesh?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">The following documents are required for Umrah from Bangladesh:</p>
                    <ul className="list-disc list-inside">
                      <li>Valid passport (with at least 6 months validity)</li>
                      <li>Umrah visa</li>
                      <li>Meningitis vaccination certificate</li>
                      <li>Travel insurance</li>
                      <li>Copies of hotel booking and flight tickets</li>
                      <li>Proof of relationship (for women traveling with a mahram)</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>How long does it take to get an Umrah visa?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Typically, it takes 7-10 working days to obtain an Umrah visa from Bangladesh. However, this can
                      vary depending on the time of your application and the workload at the Saudi embassy. We recommend
                      that you apply at least 4-6 weeks before your intended departure date.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What is the minimum cost for Umrah from Bangladesh?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      The cost of Umrah from Bangladesh varies depending on factors such as travel season, accommodation
                      type, and package inclusions. Generally, the minimum cost for an individual can range from 150,000
                      to 200,000 BDT. However, prices can change, and it's best to contact us for the most up-to-date
                      and detailed pricing information.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>What is the best time to perform Umrah from Bangladesh?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      The best time to perform Umrah from Bangladesh depends on personal preferences and circumstances.
                      However, many pilgrims prefer:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Ramadan: For its spiritual significance, though it can be crowded</li>
                      <li>Winter months (November to February): For milder weather</li>
                      <li>Off-peak seasons: For less crowded conditions and potentially lower costs</li>
                    </ul>
                    <p className="mt-2">
                      Avoid the Hajj season (approximately two months before and after Hajj) unless you're performing
                      Hajj, as Umrah visas are typically not issued during this time.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                  <AccordionTrigger>Can women perform Umrah without a mahram from Bangladesh?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      As of recent regulations, women over 45 years old can perform Umrah without a mahram if they are
                      traveling with an organized group. Women under 45 must be accompanied by a mahram (a male guardian
                      such as a husband, father, brother, or son). It's important to check the latest regulations as
                      they can change.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    What vaccinations are required for Umrah pilgrims from Bangladesh?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>The main vaccination required for Umrah pilgrims from Bangladesh is:</p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Meningococcal Meningitis (ACWY strain)</li>
                    </ul>
                    <p className="mt-2">
                      Additionally, the Saudi Ministry of Health recommends the following vaccinations:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Seasonal influenza vaccine</li>
                      <li>Polio vaccine</li>
                      <li>Yellow Fever vaccine (if coming from countries with risk of Yellow Fever transmission)</li>
                    </ul>
                    <p className="mt-2">
                      It's advisable to consult with a healthcare provider or travel clinic for the most up-to-date
                      vaccination requirements and recommendations.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

