import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"

export default function AccommodationPage() {
  // Categorized accommodation options
  const accommodationCategories = [
    {
      category: "Economy",
      description:
        "Affordable and comfortable accommodations for budget-conscious pilgrims, offering essential amenities and convenient access to holy sites.",
      hotels: [
        {
          id: "guest-house",
          title: "Guest House Hotel",
          description:
            "Located in Makkah near the central bus station, where guests can easily reach Holy Haram. Free WiFi is available and all units feature a TV with satellite channels and a kitchen equipped with a fridge and washing machine.",
          features: [
            "Near central bus station",
            "Free WiFi",
            "Fully equipped kitchen",
            "Private bathroom with toiletries",
            "Easy access to Holy Haram",
            "Washing machine",
          ],
          price: "From £80 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/aziziah00.png",
        },
        {
          id: "makkah-al-aziziah",
          title: "Makkah Al Aziziah",
          description:
            "Located in Makkah, 5km from Al-Haram Mosque, Makkah Al Aziziah is a 5-star hotel offering accommodations with a restaurant and free private parking.",
          features: [
            "5km from Al-Haram Mosque",
            "Free private parking",
            "Restaurant on-site",
            "Family rooms available",
            "Terrace",
            "Shuttle service to Haram",
          ],
          price: "From £95 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/elafkinda00.png",
        },
        {
          id: "elaf-kinda",
          title: "Elaf Kinda Hotel",
          description:
            "Located next to the King Abdulaziz Waqf facing the Grand Mosque, between King Abdulaziz Gate and King Fahd Gate, a few steps from the Kaaba, and offers direct access to the Grand Mosque.",
          features: [
            "Direct access to Grand Mosque",
            "Steps from the Kaaba",
            "Free WiFi",
            "Elegant rooms",
            "Between King Abdulaziz Gate and King Fahd Gate",
            "24/7 room service",
          ],
          price: "From £120 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/guesthouse000.png",
        },
      ],
    },
    {
      category: "Mid-range",
      description:
        "Superior accommodations with excellent amenities and services for pilgrims seeking additional comfort during their spiritual journey.",
      hotels: [
        {
          id: "novotel-thakher",
          title: "Novotel Thakher Makkah",
          description:
            "Welcome to Novotel Thakher Makkah, Enchanted unforgettable serenity moments close to Masjid Al Haram in Novotel Makkah. Novotel hotel's Authentic 'Time Well Spent' will be experienced throughout your stay.",
          features: [
            "Close to Masjid Al Haram",
            "Modern amenities",
            "Multiple dining options",
            "Fitness center",
            "Business facilities",
            "Family-friendly services",
          ],
          price: "From £150 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/voco00.png",
        },
        {
          id: "movenpick",
          title: "Mövenpick Hotel & Residence Hajar Tower Makkah",
          description:
            "Located in one of the tallest buildings in the world, overlooking the Grand Mosque, blending modern and traditional amenities, luxurious dining, and on-site shops.",
          features: [
            "Overlooking the Grand Mosque",
            "Luxurious dining options",
            "On-site shops",
            "Modern amenities",
            "Traditional decor",
            "Family suites available",
          ],
          price: "From £180 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/residencehajar00.png",
        },
        {
          id: "voco-makkah",
          title: "Voco® Makkah",
          description:
            "When it's time for the journey of a lifetime, Voco® Makkah is with you every step of the way. We're perfectly placed for Hajj or Umrah pilgrimages, our shuttle bus will transfer you to daily prayers at The Holy Mosque.",
          features: [
            "Shuttle bus to The Holy Mosque",
            "Perfect for Hajj or Umrah pilgrimages",
            "Modern amenities",
            "Comfortable rooms",
            "Dining options",
            "Prayer facilities",
          ],
          price: "From £165 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/midan00.png",
        },
        {
          id: "midan-hotel",
          title: "Midan Hotel",
          description:
            "The 5-star Midan Hotel features 2 restaurants, 1 lobby, 1 sports lounge, 1 poolside bar, and very spacious rooms with balconies overlooking the racetrack, as well as free WiFi.",
          features: [
            "2 restaurants",
            "Sports lounge",
            "Poolside bar",
            "Spacious rooms with balconies",
            "Free WiFi",
            "24-hour front desk",
          ],
          price: "From £175 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/safwah00.png",
        },
      ],
    },
    {
      category: "Luxury",
      description:
        "Premium accommodations offering the highest level of comfort, service, and amenities for a truly memorable spiritual journey, with prime locations near the Holy Mosque.",
      hotels: [
        {
          id: "al-safwah",
          title: "Al Safwah Hotel",
          description:
            "Located opposite the King Abdul Aziz Gate in Makkah, Al Safwah Hotel offers modern and upscale accommodation in a tall building in the Grand Mosque.",
          features: [
            "Opposite King Abdul Aziz Gate",
            "Modern and upscale accommodation",
            "In the Grand Mosque complex",
            "Luxury amenities",
            "Multiple dining options",
            "Premium services",
          ],
          price: "From £250 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/raffles00.png",
        },
        {
          id: "raffles",
          title: "Raffles Palace",
          description:
            "Raffles Palace is an exclusive all-suite hotel with stunning views of the Holy Mosque and the Kaaba in a prime location right next to the Grand Mosque. Professional butlers provide the signature Raffles style of service.",
          features: [
            "Exclusive all-suite hotel",
            "Stunning views of Holy Mosque and Kaaba",
            "Prime location next to Grand Mosque",
            "Professional butler service",
            "Signature Raffles style service",
            "Luxury amenities",
          ],
          price: "From £350 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/fairmont00.png",
        },
        {
          id: "fairmont",
          title: "Fairmont Makkah",
          description:
            "Fairmont hotel is located just 100 meters from the Holy Mosque, inside the Makkah Al Mukarramah Clock Tower, and is considered one of the tallest buildings in the world. It features a fully equipped fitness center, hot tub, sauna, and steam room.",
          features: [
            "100 meters from Holy Mosque",
            "Inside Makkah Clock Tower",
            "Fully equipped fitness center",
            "Hot tub, sauna, and steam room",
            "Luxury accommodations",
            "Multiple dining options",
          ],
          price: "From £300 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/swissotel00.png",
        },
        {
          id: "intercontinental",
          title: "InterContinental Dar Al Tawhid",
          description:
            "Located at the heart of Al-Haram Mosque, InterContinental Dar Al Tawhid offers a truly unparalleled and distinct experience. Mere steps from the Holy Kaaba and King Fahad Gate, our hotel provides easy access to Islamic sites.",
          features: [
            "Heart of Al-Haram Mosque",
            "Steps from Holy Kaaba",
            "Near King Fahad Gate",
            "Easy access to Islamic sites",
            "Luxury accommodations",
            "Premium services",
          ],
          price: "From £280 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/fairmont00.png",
        },
        {
          id: "hilton-suites",
          title: "Hilton Suites Makkah",
          description:
            "Hilton Suites is located in the heart of the holy city of Makkah, overlooking the Holy Haram. Free Wi-Fi and separate private mosques for men and women on the hotel premises.",
          features: [
            "Heart of Makkah",
            "Overlooking Holy Haram",
            "Free Wi-Fi",
            "Separate private mosques for men and women",
            "Luxury suites",
            "Premium amenities",
          ],
          price: "From £270 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/swissotel00.png",
        },
        {
          id: "swissotel",
          title: "Swissotel Makkah",
          description:
            "Swissotel Makkah is located in a high tower in the heart of the Islamic world, with views of the Holy City. The hotel is part of the magnificent Abraj Al Bait complex, facing the Holy Kaaba and providing direct access to the Grand Mosque.",
          features: [
            "High tower with views of Holy City",
            "Part of Abraj Al Bait complex",
            "Facing Holy Kaaba",
            "Direct access to Grand Mosque",
            "Luxury accommodations",
            "Premium services",
          ],
          price: "From £290 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/conradmakkah00.png",
        },
        {
          id: "conrad",
          title: "Conrad Makkah",
          description:
            "Conrad Makkah is located in the heart of the holy city of Makkah, just steps away from the Kaaba and the Holy Mosque. The hotel is easily accessible via Umm Al Qura Road connecting to Makkah-Jeddah Expressway.",
          features: [
            "Heart of Makkah",
            "Steps from Kaaba and Holy Mosque",
            "Easily accessible via Umm Al Qura Road",
            "Luxury accommodations",
            "Premium amenities",
            "Multiple dining options",
          ],
          price: "From £310 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/taqwa00.png",
        },
        {
          id: "hyatt-regency",
          title: "Jabal Omar Hyatt Regency",
          description:
            "Jabal Omar Hyatt Regency is located in the heart of the holy city of Makkah. The hotel is just a minute walk from the Holy Mosque. Guests can enjoy free WiFi throughout the property. There are male and female prayer areas in the private parking level.",
          features: [
            "Heart of Makkah",
            "Minute walk from Holy Mosque",
            "Free WiFi throughout property",
            "Male and female prayer areas",
            "Private parking",
            "Luxury accommodations",
          ],
          price: "From £320 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/jabalomar00.png",
        },
      ],
    },
  ]

  // Special packages for Umrah and Hajj
  const specialPackages = [
    {
      id: "umrah-accommodation",
      title: "Umrah Special Accommodation Packages",
      description:
        "Special accommodation packages designed specifically for Umrah pilgrims, offering convenient stays in both Makkah and Madinah with all necessary amenities.",
      options: [
        {
          name: "Economy Umrah Stay",
          price: "From £600 for 10 nights",
          features: [
            "3-star hotels in Makkah and Madinah",
            "3 meals daily",
            "Transportation to/from Haram",
            "Guided assistance",
            "5 nights in Makkah, 5 nights in Madinah",
          ],
        },
        {
          name: "Standard Umrah Stay",
          price: "From £900 for 10 nights",
          features: [
            "4-star hotels in Makkah and Madinah",
            "3 meals daily",
            "Transportation to/from Haram",
            "Guided assistance",
            "Ziyarat tours",
            "5 nights in Makkah, 5 nights in Madinah",
          ],
        },
        {
          name: "Premium Umrah Stay",
          price: "From £1,500 for 10 nights",
          features: [
            "5-star hotels in Makkah and Madinah",
            "3 meals daily",
            "Private transportation",
            "VIP guided assistance",
            "Ziyarat tours",
            "Haram view rooms",
            "6 nights in Makkah, 4 nights in Madinah",
          ],
        },
      ],
      image: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
    },
    {
      id: "hajj-accommodation",
      title: "Hajj Special Accommodation Packages",
      description:
        "Comprehensive accommodation packages for Hajj pilgrims, including stays in Makkah, Madinah, Mina, Arafat, and Muzdalifah with all necessary services.",
      options: [
        {
          name: "Economy Hajj Stay",
          price: "From £2,500 for Hajj period",
          features: [
            "3-star hotels in Makkah and Madinah",
            "Standard tents in Mina",
            "All meals included",
            "Transportation between holy sites",
            "5 nights in Makkah, 3 nights in Madinah",
          ],
        },
        {
          name: "Standard Hajj Stay",
          price: "From £4,000 for Hajj period",
          features: [
            "4-star hotels in Makkah and Madinah",
            "Upgraded tents in Mina",
            "All meals included",
            "Transportation between holy sites",
            "Guided assistance",
            "6 nights in Makkah, 4 nights in Madinah",
          ],
        },
        {
          name: "Premium Hajj Stay",
          price: "From £6,500 for Hajj period",
          features: [
            "5-star hotels in Makkah and Madinah",
            "VIP tents in Mina",
            "All meals included",
            "Private transportation",
            "VIP guided assistance",
            "Haram view rooms",
            "7 nights in Makkah, 5 nights in Madinah",
          ],
        },
      ],
      image: "https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00",
    },
  ]

  // Madinah accommodation options
  const madinahAccommodationCategories = [
    {
      category: "Economy",
      description:
        "Affordable and comfortable accommodations in Madinah for budget-conscious pilgrims, offering essential amenities and convenient access to the Prophet's Mosque.",
      hotels: [
        {
          id: "madinah-guest-house",
          title: "Madinah Guest House",
          description:
            "Located in Madinah near the central area, where guests can easily reach the Prophet's Mosque. Free WiFi is available and all units feature a TV with satellite channels and a private bathroom.",
          features: [
            "Near central area",
            "Free WiFi",
            "Private bathroom with toiletries",
            "Easy access to Prophet's Mosque",
            "Air conditioning",
            "Daily housekeeping",
          ],
          price: "From £70 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/ansar00.png",
        },
        {
          id: "madinah-al-ansar",
          title: "Al Ansar Hotel",
          description:
            "Located in Madinah, 800m from the Prophet's Mosque, Al Ansar Hotel offers accommodations with a restaurant and free private parking.",
          features: [
            "800m from Prophet's Mosque",
            "Free private parking",
            "Restaurant on-site",
            "Family rooms available",
            "24-hour front desk",
            "Free WiFi",
          ],
          price: "From £85 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/madinahguest00.png",
        },
        {
          id: "madinah-dar-al-taqwa",
          title: "Dar Al Taqwa Hotel",
          description:
            "Located in the central area of Madinah, Dar Al Taqwa Hotel offers comfortable accommodations with modern amenities and easy access to the Prophet's Mosque.",
          features: [
            "Central location",
            "Close to Prophet's Mosque",
            "Free WiFi",
            "Elegant rooms",
            "On-site restaurant",
            "24/7 room service",
          ],
          price: "From £110 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/crowne00.png",
        },
      ],
    },
    {
      category: "Mid-range",
      description:
        "Superior accommodations in Madinah with excellent amenities and services for pilgrims seeking additional comfort during their visit to the Prophet's city.",
      hotels: [
        {
          id: "madinah-novotel",
          title: "Novotel Madinah",
          description:
            "Welcome to Novotel Madinah, offering unforgettable moments close to the Prophet's Mosque. Novotel hotel's Authentic 'Time Well Spent' will be experienced throughout your stay.",
          features: [
            "Close to Prophet's Mosque",
            "Modern amenities",
            "Multiple dining options",
            "Fitness center",
            "Business facilities",
            "Family-friendly services",
          ],
          price: "From £140 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/venpick00.png",
        },
        {
          id: "madinah-movenpick",
          title: "Mövenpick Hotel Madinah",
          description:
            "Located in the heart of Madinah, Mövenpick Hotel offers luxurious accommodations with modern amenities and easy access to the Prophet's Mosque.",
          features: [
            "Heart of Madinah",
            "Luxurious dining options",
            "Modern amenities",
            "Traditional decor",
            "Family suites available",
            "Free WiFi",
          ],
          price: "From £160 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/crowne00.png",
        },
        {
          id: "madinah-crowne-plaza",
          title: "Crowne Plaza Madinah",
          description:
            "Crowne Plaza Madinah is located in the heart of Madinah, offering modern accommodations with excellent amenities and easy access to the Prophet's Mosque.",
          features: [
            "Heart of Madinah",
            "Modern accommodations",
            "Multiple dining options",
            "Fitness center",
            "Business facilities",
            "Free WiFi",
          ],
          price: "From £155 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/millennium00.png",
        },
        {
          id: "madinah-millennium",
          title: "Millennium Madinah Airport",
          description:
            "The 5-star Millennium Madinah Airport features 2 restaurants, spacious rooms with modern amenities, and convenient access to both the airport and the city center.",
          features: [
            "2 restaurants",
            "Spacious rooms",
            "Free WiFi",
            "Airport shuttle",
            "Fitness center",
            "24-hour front desk",
          ],
          price: "From £165 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/novotel00.png",
        },
      ],
    },
    {
      category: "Luxury",
      description:
        "Premium accommodations in Madinah offering the highest level of comfort, service, and amenities for a truly memorable spiritual journey, with prime locations near the Prophet's Mosque.",
      hotels: [
        {
          id: "madinah-oberoi",
          title: "The Oberoi Madinah",
          description:
            "Located just steps away from the Prophet's Mosque, The Oberoi Madinah offers luxurious accommodations with world-class amenities and impeccable service.",
          features: [
            "Steps from Prophet's Mosque",
            "Luxurious accommodations",
            "World-class amenities",
            "Multiple dining options",
            "Spa and wellness center",
            "Concierge service",
          ],
          price: "From £240 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/hilton00.png",
        },
        {
          id: "madinah-hilton",
          title: "Hilton Madinah",
          description:
            "Hilton Madinah is located in the heart of the holy city, offering luxurious accommodations with modern amenities and easy access to the Prophet's Mosque.",
          features: [
            "Heart of Madinah",
            "Luxurious accommodations",
            "Modern amenities",
            "Multiple dining options",
            "Fitness center",
            "Business facilities",
          ],
          price: "From £230 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/marriott00.png",
        },
        {
          id: "madinah-marriott",
          title: "Marriott Madinah",
          description:
            "Marriott Madinah offers luxurious accommodations with world-class amenities and easy access to the Prophet's Mosque, ensuring a comfortable and memorable stay.",
          features: [
            "Luxurious accommodations",
            "World-class amenities",
            "Multiple dining options",
            "Spa and wellness center",
            "Fitness center",
            "Concierge service",
          ],
          price: "From £250 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/interContinental00.png",
        },
        {
          id: "madinah-intercontinental",
          title: "InterContinental Madinah",
          description:
            "Located at the heart of Madinah, InterContinental offers a truly unparalleled and distinct experience with luxurious accommodations and world-class amenities.",
          features: [
            "Heart of Madinah",
            "Luxurious accommodations",
            "World-class amenities",
            "Multiple dining options",
            "Spa and wellness center",
            "Concierge service",
          ],
          price: "From £270 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/carlton00.png",
        },
        {
          id: "madinah-ritz-carlton",
          title: "The Ritz-Carlton Madinah",
          description:
            "The Ritz-Carlton Madinah offers luxurious accommodations with world-class amenities and impeccable service, ensuring a comfortable and memorable stay in the holy city.",
          features: [
            "Luxurious accommodations",
            "World-class amenities",
            "Multiple dining options",
            "Spa and wellness center",
            "Fitness center",
            "Concierge service",
          ],
          price: "From £290 per night",
          image: "https://mj-ahmad.github.io/mja2025/img/oberoi00.png",
        },
      ],
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
            src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
            alt="Accommodation Services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Accommodation Services</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Comfortable and convenient stays near the holy sites
              </p>
            </div>
          </div>
        </section>

        {/* Special Packages Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Special Accommodation Packages</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer specialized accommodation packages for both Umrah and Hajj pilgrims, designed to provide
                comfort, convenience, and spiritual peace during your sacred journey.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {specialPackages.map((pkg) => (
                <div key={pkg.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64">
                    <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3">{pkg.title}</h3>
                    <p className="text-gray-700 mb-4">{pkg.description}</p>

                    <div className="space-y-4 mb-6">
                      {pkg.options.map((option, idx) => (
                        <div key={idx} className="border-l-4 border-green-500 pl-4 py-2">
                          <h4 className="font-bold text-lg">{option.name}</h4>
                          <p className="text-green-600 font-medium">{option.price}</p>
                          <ul className="mt-2 space-y-1">
                            {option.features.map((feature, fidx) => (
                              <li key={fidx} className="flex items-start text-sm">
                                <svg
                                  className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/book-accommodation/${pkg.id}`}
                      className="inline-block bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors w-full text-center font-medium"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodation Categories */}
        {accommodationCategories.map((category, index) => (
          <section key={category.category} className={`py-16 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.category} Accommodations</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.hotels.map((hotel) => (
                  <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <Image src={hotel.image || "/placeholder.svg"} alt={hotel.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-2">{hotel.title}</h3>
                      <p className="text-gray-700 mb-4">{hotel.description}</p>
                      <p className="text-green-600 font-medium mb-4">{hotel.price}</p>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {hotel.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
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
                    <div className="p-6 pt-0 mt-auto">
                      <Link
                        href={`/book-accommodation/${hotel.id}`}
                        className="inline-block bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition-colors w-full text-center font-medium"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Madinah Accommodation Categories */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Madinah Accommodations</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a range of accommodations in the blessed city of Madinah, providing comfort and convenience for
                your visit to the Prophet's Mosque.
              </p>
            </div>
          </div>
        </section>

        {/* Render Madinah accommodation categories */}
        {madinahAccommodationCategories.map((category, index) => (
          <section key={category.category} className={`py-16 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{category.category} Accommodations in Madinah</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">{category.description}</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.hotels.map((hotel) => (
                  <div key={hotel.id} className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                    <div className="relative h-48">
                      <Image src={hotel.image || "/placeholder.svg"} alt={hotel.title} fill className="object-cover" />
                    </div>
                    <div className="p-6 flex-grow">
                      <h3 className="text-xl font-bold mb-2">{hotel.title}</h3>
                      <p className="text-gray-700 mb-4">{hotel.description}</p>
                      <p className="text-green-600 font-medium mb-4">{hotel.price}</p>
                      <h4 className="font-semibold mb-2">Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {hotel.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
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
                    <div className="p-6 pt-0 mt-auto">
                      <Link
                        href={`/book-accommodation/${hotel.id}`}
                        className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors w-full text-center font-medium"
                      >
                        Book Madinah Hotel
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Why Choose Our Accommodations */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Our Accommodations</h2>
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Prime Location</h3>
                  <p className="text-gray-600">
                    We prioritize accommodations that are conveniently located near the Haram and other important sites.
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Quality and Comfort</h3>
                  <p className="text-gray-600">
                    All our accommodations meet high standards of cleanliness, comfort, and service.
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">Value for Money</h3>
                  <p className="text-gray-600">
                    We negotiate the best rates with our accommodation partners to provide excellent value for your
                    investment.
                  </p>
                </div>
              </div>

              <div className="text-center">
                <p className="text-lg text-gray-700 mb-6">
                  আমরা আপনার আবাসনের প্রয়োজনীয়তা অনুযায়ী বিভিন্ন ধরনের হোটেল এবং অ্যাপার্টমেন্ট প্রদান করি। আমাদের সকল আবাসন পবিত্র
                  স্থানগুলির কাছাকাছি অবস্থিত, যাতে আপনি আরাম এবং সুবিধা উপভোগ করতে পারেন, এবং একই সাথে আপনার ইবাদতের উপর মনোনিবেশ করতে
                  পারেন।
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
                >
                  Contact Us for Accommodation Details
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

