import Image from "next/image"
import Link from "next/link"

export default function NamirahMosquePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-[40vh]">
        <Image
          src="https://iramservices.com/storage/photos/1/63b45a463dc1d.jpg"
          alt="Namirah Mosque"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Namirah Mosque</h1>
            <p className="text-xl max-w-3xl mx-auto">Site of the Prophet's Farewell Sermon</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">About Namirah Mosque</h2>
            <p className="text-gray-700 mb-4">
              Namirah Mosque is a historically significant mosque built in Arafah where the Prophet Muhammad, peace be
              upon him, delivered his sermon during his last farewell Hajj. Today, thousands of pilgrims gather at this
              mosque to pray the combined Zuhr and Asr prayers on the Day of Arafah.
            </p>
            <p className="text-gray-700 mb-4">
              The mosque is strategically located to the west of Arafah. Interestingly, the western part of the mosque
              is situated in Wadi 'Arnah, a valley of Makkah Al-Mukarramah where the Prophet prohibited pilgrims from
              standing because it is not part of Arafat, though it is very close to it.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Historical Names</h3>
              <p className="text-gray-700 mb-4">
                Namirah Mosque is known in many historical books by several other names:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>The Mosque of Prophet Ibrahim</li>
                <li>Arafah Mosque</li>
                <li>Arnah Mosque</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The name "Arafah Mosque" originated from a village outside the Arafah Area where the Prophet initially
                resided before moving to the valley, where he prayed Zuhr and Asr prayers and delivered his sermon.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Modern Expansions</h3>
              <p className="text-gray-700 mb-4">
                During the era of the Saudi State, the mosque witnessed the largest expansions in its history, becoming
                the second largest mosque in Makkah in terms of area after the Holy Mosque.
              </p>
              <p className="text-gray-700">
                The mosque now spans an impressive area, with a length of 340 meters from east to west and a width of
                240 meters from north to south. Its total area exceeds 110,000 square meters, with an additional shaded
                area of 8,000 square meters behind the mosque. It can accommodate approximately 350,000 worshippers.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3">Architectural Features</h3>
            <p className="text-gray-700 mb-4">
              Namirah Mosque features six towering minarets that can be seen from a distance. It also houses an equipped
              outside broadcasting room for transmitting the sermon and the combined Zuhr and Asr prayers on the Day of
              Arafat directly via satellite to viewers worldwide.
            </p>
            <p className="text-gray-700">
              The mosque's design combines traditional Islamic architecture with modern amenities to accommodate the
              large number of pilgrims who gather there on the Day of Arafah. Its spacious interior, multiple entrances,
              and efficient cooling systems make it suitable for the massive congregation that assembles annually.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/makkah"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors"
          >
            Back to Makkah Page
          </Link>
        </div>
      </div>
    </div>
  )
}

