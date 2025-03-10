"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Footer } from "@/components/footer"
import { ChurchIcon as Mosque, Info, MapPin, Home, ShoppingBag, Coffee, Bus, HeartHandshake } from "lucide-react"

export default function MakkahPage() {
  const [activeTab, setActiveTab] = useState("the-grand-mosque")

  const menuItems = [
    { id: "the-grand-mosque", label: "The Grand Mosque", icon: <Mosque className="h-6 w-6" /> },
    { id: "grand-mosque-services", label: "The Grand Mosque Services", icon: <HeartHandshake className="h-6 w-6" /> },
    { id: "attractions", label: "Attractions", icon: <Info className="h-6 w-6" /> },
    { id: "holy-sites", label: "Holy Sites", icon: <MapPin className="h-6 w-6" /> },
    { id: "accommodation", label: "Accommodation", icon: <Home className="h-6 w-6" /> },
    { id: "shopping", label: "Shopping", icon: <ShoppingBag className="h-6 w-6" /> },
    { id: "restaurants", label: "Restaurants and Cafes", icon: <Coffee className="h-6 w-6" /> },
    { id: "getting-to-makkah", label: "Getting to Makkah", icon: <Bus className="h-6 w-6" /> },
  ]

  const tabContent = {
    "the-grand-mosque": (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">The Grand Mosque of Makkah</h3>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Section 1: Makkah is the Sanctuary of Allah */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="Makkah Sanctuary"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Makkah is the Sanctuary of Allah</h4>
              <p className="text-gray-600 mb-4">
                Allah singled out Makkah and honored it over all parts of the world. One of the greatest signs is that
                it is His sanctuary.
              </p>
              <Link
                href="/makkah/sanctuary"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 2: Makkah the Qiblah of Muslims */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Makkah Qiblah"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Makkah the Qiblah of Muslims</h4>
              <p className="text-gray-600 mb-4">
                Honorable Makkah is the best place on earth and the most beloved place to Allah and His Messenger.
              </p>
              <Link
                href="/makkah/qiblah"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 3: Sections of the Grand Mosque of Makkah */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Grand Mosque Sections"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Sections of the Grand Mosque</h4>
              <p className="text-gray-600 mb-4">
                The Grand Mosque of Makkah consists of several important sections including the Ka'bah Courtyard and the
                Abbasid Corridor.
              </p>
              <Link
                href="/makkah/mosque-sections"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 4: Courtyards of the Grand Mosque of Makkah */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Grand Mosque Courtyards"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Courtyards of the Grand Mosque</h4>
              <p className="text-gray-600 mb-4">
                The Grand Mosque is surrounded by courtyards designed to facilitate the entry of pilgrims and
                worshipers.
              </p>
              <Link
                href="/makkah/mosque-courtyards"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 5: Milestones of the Circumambulation Courtyard */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg"
                alt="Circumambulation Courtyard"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Milestones of the Circumambulation Courtyard</h4>
              <p className="text-gray-600 mb-4">
                The circumambulation area is the courtyard tiled with white marble, which surrounds the Noble Ka'bah.
              </p>
              <Link
                href="/makkah/circumambulation-courtyard"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 6: The Ka'bah */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="The Ka'bah"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">The Ka'bah</h4>
              <p className="text-gray-600 mb-4">
                The Ka'bah is the Sacred House of Allah, and the greatest building for Muslims with a glorious history.
              </p>
              <Link
                href="/makkah/kaaba"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 7: Circumambulation Floors */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Circumambulation Floors"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Circumambulation Floors</h4>
              <p className="text-gray-600 mb-4">
                The circumambulation building comprises multiple floors to accommodate the large number of pilgrims.
              </p>
              <Link
                href="/makkah/circumambulation-floors"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 8: Al-Masa'a */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Al-Masa'a"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Al-Masa'a</h4>
              <p className="text-gray-600 mb-4">
                Al-Masa'a is the area between the hills of As-Safa and Al-Marwah where pilgrims perform the Sa'i ritual.
              </p>
              <Link
                href="/makkah/masaa"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Section 9: Zamzam Well */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Zamzam Well"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Zamzam Well</h4>
              <p className="text-gray-600 mb-4">
                Zamzam well is located 21 meters to the east of the Ka'bah and has great historical and spiritual
                significance.
              </p>
              <Link
                href="/makkah/zamzam"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    ),
    "grand-mosque-services": (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">The Grand Mosque Services</h3>

        <p className="mb-8 text-center max-w-4xl mx-auto">
          Pilgrims from all over the world travel to Makkah for Hajj and 'Umrah in huge numbers, amounting to millions
          of visitors annually. For this reason, exceptional efforts are made to provide services for pilgrims and
          visitors.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1: Zamzam */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="Zamzam Water"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Zamzam Water</h4>
              <p className="text-gray-600 mb-4">
                Zamzam water is one of Allah's blessings on Makkah and its visitors, available throughout the mosque.
              </p>
              <Link
                href="/makkah/services/zamzam"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 2: Guide Signs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Guide Signs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Guide Signs</h4>
              <p className="text-gray-600 mb-4">
                A large number of guide signs in multiple languages help visitors navigate the Grand Mosque easily.
              </p>
              <Link
                href="/makkah/services/guide-signs"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 3: Escalators */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Escalators"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Escalators</h4>
              <p className="text-gray-600 mb-4">
                Modern escalators throughout the mosque help pilgrims move between floors efficiently.
              </p>
              <Link
                href="/makkah/services/escalators"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 4: Wheelchairs */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Wheelchairs"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Wheelchairs</h4>
              <p className="text-gray-600 mb-4">
                Free wheelchairs are available for the ill and elderly to ensure accessibility for all visitors.
              </p>
              <Link
                href="/makkah/services/wheelchairs"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 5: Fatwa Services */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg"
                alt="Fatwa Services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Fatwa Services</h4>
              <p className="text-gray-600 mb-4">
                Scholars answer questions from pilgrims on rituals and legal matters through dedicated offices.
              </p>
              <Link
                href="/makkah/services/fatwa"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 6: Services for People with Disabilities */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="Services for People with Disabilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Accessibility Services</h4>
              <p className="text-gray-600 mb-4">
                Special services for people with hearing, speech, and mobility impairments are available.
              </p>
              <Link
                href="/makkah/services/accessibility"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 7: Toilet Facilities */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Toilet Facilities"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Toilet Facilities</h4>
              <p className="text-gray-600 mb-4">
                Modern toilet and ablution facilities are available throughout the mosque complex.
              </p>
              <Link
                href="/makkah/services/toilets"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 8: Markets and Restaurants */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Markets and Restaurants"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Markets and Restaurants</h4>
              <p className="text-gray-600 mb-4">
                Various markets and restaurants are available near the Grand Mosque to serve visitors.
              </p>
              <Link
                href="/makkah/services/markets"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Service 9: Care Centers */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Care Centers"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Care Centers</h4>
              <p className="text-gray-600 mb-4">
                Comprehensive service centers provide guidance and assistance in multiple languages.
              </p>
              <Link
                href="/makkah/services/care-centers"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    ),
    attractions: (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Attractions in Makkah</h3>

        <p className="mb-8 text-center max-w-4xl mx-auto">
          Beyond the Grand Mosque, Makkah offers several attractions of historical, cultural, and religious significance
          that enhance the spiritual journey of visitors.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Attraction 1: Mount Noor and Hira Cave */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="Mount Noor"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Mount Noor and Hira Cave</h4>
              <p className="text-gray-600 mb-4">
                The place where Prophet Muhammad (peace be upon him) received his first divine revelation.
              </p>
              <Link
                href="/makkah/attractions/mount-noor"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 2: Thawr Mount and Cave */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Thawr Mount and Cave"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Thawr Mount and Cave</h4>
              <p className="text-gray-600 mb-4">
                The cave where Prophet Muhammad and Abu Bakr hid during their migration to Madinah.
              </p>
              <Link
                href="/makkah/attractions/thawr-cave"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 3: Hira Cultural District */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Hira Cultural District"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Hira Cultural District</h4>
              <p className="text-gray-600 mb-4">
                A unique cultural and tourist attraction enriching the religious experience of visitors.
              </p>
              <Link
                href="/makkah/attractions/hira-cultural-district"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 4: Mosque of Aishah */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Mosque of Aishah"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Mosque of Aishah</h4>
              <p className="text-gray-600 mb-4">
                Historical mosque where Aishah entered into the state of Ihram for her 'Umrah.
              </p>
              <Link
                href="/makkah/attractions/mosque-of-aishah"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 5: Namerah Mosque */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg"
                alt="Namerah Mosque"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Namerah Mosque</h4>
              <p className="text-gray-600 mb-4">
                One of the most important landmarks in Arafah where the Prophet delivered his farewell sermon.
              </p>
              <Link
                href="/makkah/attractions/namerah-mosque"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 6: Al-Khaif Mosque */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="Al-Khaif Mosque"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Al-Khaif Mosque</h4>
              <p className="text-gray-600 mb-4">
                The greatest mosque in Mina where the Prophet and many other prophets prayed.
              </p>
              <Link
                href="/makkah/attractions/al-khaif-mosque"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 7: Aisha Al-Rajhi Mosque */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Aisha Al-Rajhi Mosque"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Aisha Al-Rajhi Mosque</h4>
              <p className="text-gray-600 mb-4">
                One of the largest mosques in Makkah with numerous services and various events.
              </p>
              <Link
                href="/makkah/attractions/aisha-al-rajhi-mosque"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 8: Clock Tower Museum */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Clock Tower Museum"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Clock Tower Museum</h4>
              <p className="text-gray-600 mb-4">
                Astronomical museum located at the highest point in Makkah with spectacular views.
              </p>
              <Link
                href="/makkah/attractions/clock-tower-museum"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Attraction 9: Kiswah of the Kaaba */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Kiswah of the Kaaba"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Kiswah of the Kaaba</h4>
              <p className="text-gray-600 mb-4">
                The black silk cloth that covers the Kaaba, embroidered with Quranic verses in gold thread.
              </p>
              <Link
                href="/makkah/attractions/kiswah"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    ),
    "holy-sites": (
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-center">Holy Sites in and around Makkah</h3>

        <p className="mb-8 text-center max-w-4xl mx-auto">
          Makkah is home to several sites of profound religious significance that are integral to the Hajj and Umrah
          pilgrimages.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Holy Site 1: The Kaaba */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="The Kaaba"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">The Kaaba</h4>
              <p className="text-gray-600 mb-4">
                The cube-shaped building at the center of Masjid Al-Haram, which Muslims face during prayer.
              </p>
              <Link
                href="/makkah/holy-sites/kaaba"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 2: Mina */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Mina"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Mina</h4>
              <p className="text-gray-600 mb-4">
                The tent city where pilgrims stay during specific days of Hajj, known as the world's largest tent city.
              </p>
              <Link
                href="/makkah/holy-sites/mina"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 3: Arafah */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Arafah"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Arafah</h4>
              <p className="text-gray-600 mb-4">
                The plain where pilgrims gather for the most important day of Hajj, known as the Greatest Day of Hajj.
              </p>
              <Link
                href="/makkah/holy-sites/arafah"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 4: Muzdalifah */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Muzdalifah"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Muzdalifah</h4>
              <p className="text-gray-600 mb-4">
                The area between Mina and Arafah where pilgrims spend a night during Hajj, also known as al-Mash'ar
                al-Haram.
              </p>
              <Link
                href="/makkah/holy-sites/muzdalifah"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 5: Namirah Mosque */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg"
                alt="Namirah Mosque"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Namirah Mosque</h4>
              <p className="text-gray-600 mb-4">
                The mosque where the Prophet delivered his farewell sermon, located at the western edge of Arafah.
              </p>
              <Link
                href="/makkah/holy-sites/namirah-mosque"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 6: Jamarat */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
                alt="Jamarat"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Jamarat</h4>
              <p className="text-gray-600 mb-4">
                The pillars representing the devil where pilgrims perform the ritual of stoning during Hajj.
              </p>
              <Link
                href="/makkah/holy-sites/jamarat"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 7: Safa and Marwa */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
                alt="Safa and Marwa"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Safa and Marwa</h4>
              <p className="text-gray-600 mb-4">
                The two small hills between which Hagar ran in search of water for her son Ishmael.
              </p>
              <Link
                href="/makkah/holy-sites/safa-marwa"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 8: Zamzam Well */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
                alt="Zamzam Well"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Zamzam Well</h4>
              <p className="text-gray-600 mb-4">
                The sacred well that miraculously provided water to Hagar and Ishmael, located near the Kaaba.
              </p>
              <Link
                href="/makkah/holy-sites/zamzam-well"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>

          {/* Holy Site 9: Mount Arafat */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <Image
                src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
                alt="Mount Arafat"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-2">Mount Arafat</h4>
              <p className="text-gray-600 mb-4">
                Also known as the Mountain of Mercy (Jabal ar-Rahmah), where the Prophet delivered his farewell sermon.
              </p>
              <Link
                href="/makkah/holy-sites/mount-arafat"
                className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    ),
    accommodation: (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Accommodation in Makkah</h3>
        <p className="mb-4">
          Makkah offers a wide range of accommodation options to suit different budgets and preferences:
        </p>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Luxury Hotels</h4>
            <p className="mb-2">
              Several 5-star hotels are located near the Grand Mosque, offering premium services and direct views of the
              Kaaba.
            </p>
            <p className="text-sm text-gray-600">
              Examples: Makkah Clock Royal Tower, Raffles Makkah Palace, Conrad Makkah
            </p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Mid-Range Hotels</h4>
            <p className="mb-2">
              Comfortable accommodations within walking distance or a short shuttle ride from the Grand Mosque.
            </p>
            <p className="text-sm text-gray-600">Examples: Hilton Makkah Convention Hotel, Makkah Millennium Hotel</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Budget-Friendly Options</h4>
            <p className="mb-2">Affordable hotels and apartment-style accommodations for pilgrims on a budget.</p>
            <p className="text-sm text-gray-600">Examples: Al Tawfiq Plaza Hotel, Elaf Al Mashaer Hotel</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Hajj Camps</h4>
            <p className="mb-2">
              During Hajj season, organized camps in Mina provide temporary accommodation for pilgrims.
            </p>
          </div>
        </div>
      </div>
    ),
    shopping: (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Shopping in Makkah</h3>
        <p className="mb-4">Makkah offers diverse shopping experiences, from modern malls to traditional markets:</p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">Makkah Mall</h4>
            <p>A modern shopping center with international brands, restaurants, and entertainment options.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">Abraj Al-Bait Mall</h4>
            <p>Located in the Clock Tower complex, offering luxury brands and spectacular views of the Grand Mosque.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">Souq Al-Khalil</h4>
            <p>A traditional market selling textiles, clothing, perfumes, and souvenirs.</p>
          </div>

          <div className="border rounded-lg p-4">
            <h4 className="font-bold mb-2">Al-Hijra Market</h4>
            <p>Known for prayer rugs, Islamic books, and religious items.</p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-bold mb-2">Popular Items to Purchase:</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Prayer rugs and Islamic books</li>
            <li>Zamzam water containers</li>
            <li>Dates and Arabian sweets</li>
            <li>Middle Eastern spices and herbs</li>
            <li>Arabian perfumes and oils</li>
            <li>Islamic calligraphy and art</li>
            <li>Prayer beads (Misbaha)</li>
          </ul>
        </div>
      </div>
    ),
    restaurants: (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Restaurants and Cafes in Makkah</h3>
        <p className="mb-4">Makkah offers a wide variety of dining options catering to different tastes and budgets:</p>

        <div className="space-y-6">
          <div>
            <h4 className="font-bold mb-2">International Cuisine</h4>
            <p className="mb-2">
              Many international restaurant chains and hotel restaurants offer familiar dishes from around the world.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">Al Baik (Saudi Fried Chicken)</div>
              <div className="bg-gray-50 p-2 rounded">Hardee's</div>
              <div className="bg-gray-50 p-2 rounded">Pizza Hut</div>
              <div className="bg-gray-50 p-2 rounded">Starbucks</div>
              <div className="bg-gray-50 p-2 rounded">McDonald's</div>
              <div className="bg-gray-50 p-2 rounded">KFC</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Middle Eastern Cuisine</h4>
            <p className="mb-2">Authentic Arabian, Lebanese, and Turkish restaurants serving traditional dishes.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">Albaik Restaurant</div>
              <div className="bg-gray-50 p-2 rounded">Zamzam Restaurant</div>
              <div className="bg-gray-50 p-2 rounded">Al Tazaj</div>
              <div className="bg-gray-50 p-2 rounded">Makarem Restaurant</div>
              <div className="bg-gray-50 p-2 rounded">Bait Al Mandi</div>
              <div className="bg-gray-50 p-2 rounded">Kebab House</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">South Asian Cuisine</h4>
            <p className="mb-2">
              Indian, Pakistani, and Bangladeshi restaurants catering to pilgrims from these regions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">Taj Mahal Restaurant</div>
              <div className="bg-gray-50 p-2 rounded">Bukhari Restaurant</div>
              <div className="bg-gray-50 p-2 rounded">Delhi Darbar</div>
              <div className="bg-gray-50 p-2 rounded">Karachi Darbar</div>
              <div className="bg-gray-50 p-2 rounded">Lahore Restaurant</div>
              <div className="bg-gray-50 p-2 rounded">Dhaka Restaurant</div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-2">Cafes and Bakeries</h4>
            <p className="mb-2">Coffee shops and bakeries offering refreshments and light meals.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm">
              <div className="bg-gray-50 p-2 rounded">Starbucks</div>
              <div className="bg-gray-50 p-2 rounded">Costa Coffee</div>
              <div className="bg-gray-50 p-2 rounded">Dr. Café</div>
              <div className="bg-gray-50 p-2 rounded">Krispy Kreme</div>
              <div className="bg-gray-50 p-2 rounded">Dunkin' Donuts</div>
              <div className="bg-gray-50 p-2 rounded">Paul Café</div>
            </div>
          </div>
        </div>
      </div>
    ),
    "getting-to-makkah": (
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Getting to Makkah</h3>
        <p className="mb-4">There are several ways to reach the holy city of Makkah:</p>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">By Air</h4>
            <p className="mb-2">
              The nearest airport to Makkah is King Abdulaziz International Airport in Jeddah, approximately 85 km away.
            </p>
            <ul className="list-disc pl-6">
              <li>International flights arrive at the Hajj Terminal or the main terminals.</li>
              <li>From the airport, you can take a taxi, bus, or arrange for a hotel transfer to Makkah.</li>
              <li>Travel time is approximately 1-1.5 hours depending on traffic.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">By Road from Jeddah</h4>
            <p className="mb-2">Jeddah is the main gateway city to Makkah.</p>
            <ul className="list-disc pl-6">
              <li>Taxis are readily available and cost approximately 150-200 SAR.</li>
              <li>SAPTCO buses operate regular services between Jeddah and Makkah.</li>
              <li>Many hotels offer shuttle services for their guests.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">By Road from Madinah</h4>
            <p className="mb-2">Many pilgrims travel between the two holy cities of Makkah and Madinah.</p>
            <ul className="list-disc pl-6">
              <li>The distance is approximately 450 km.</li>
              <li>SAPTCO buses operate regular services (journey time: 5-6 hours).</li>
              <li>Taxis and private cars are also available.</li>
              <li>The Haramain High-Speed Railway now connects Makkah and Madinah.</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Haramain High-Speed Railway</h4>
            <p className="mb-2">A modern train service connecting Makkah, Jeddah, and Madinah.</p>
            <ul className="list-disc pl-6">
              <li>Travels at speeds of up to 300 km/h.</li>
              <li>Journey time from Jeddah to Makkah: approximately 21 minutes.</li>
              <li>Journey time from Madinah to Makkah: approximately 2.5 hours.</li>
              <li>Comfortable, air-conditioned carriages with modern amenities.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  }

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
        {/* Hero Section with Animation */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <Image
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
            alt="Makkah"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">MAKKAH</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              The holiest city in Islam and the birthplace of Prophet Muhammad (peace be upon him)
            </p>
          </div>
        </section>

        {/* Holy Site Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Holy Site</h2>
              <p className="text-lg leading-relaxed">
                Makkah is the holiest city for Muslims. It embraces Masjid Al Haram (the Great Mosque) and Kaaba, the
                qiblah for Muslims to which they turn in their prayers. Muslims yearn to visit Makkah to perform Hajj or
                Umrah. In this city, Prophet Muhammad, the most honorable of creation, the seal of the prophets and
                messengers, our master Muhammad, peace be upon him, was born, and from it, the tolerant message of Islam
                was launched to all corners of the world after the Holy Quran was revealed. Makkah is located in the
                western part of Saudi Arabia. During the reign of the kings of Saudi Arabia, it received great interest.
                Makkah still enjoys great attention to provide the best services to pilgrims. Its most prominent
                landmark, Masjid Al Haram, witnessed many expansions that included all parts of the mosque, and the holy
                sites received a series of development works to provide all means of comfort and reassurance for all
                pilgrims from inside and outside the Kingdom.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Menu Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg transition-colors ${
                      activeTab === item.id ? "bg-green-600 text-white" : "bg-white hover:bg-green-50"
                    }`}
                  >
                    <div className="mb-2">{item.icon}</div>
                    <span className="text-center text-sm">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">{tabContent[activeTab as keyof typeof tabContent]}</div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

