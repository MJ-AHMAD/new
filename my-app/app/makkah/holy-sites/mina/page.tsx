import Image from "next/image"
import Link from "next/link"

export default function MinaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-[40vh]">
        <Image
          src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95"
          alt="Mina - The Tent City"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Mina</h1>
            <p className="text-xl max-w-3xl mx-auto">The World's Largest Tent City</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">About Mina</h2>
            <p className="text-gray-700 mb-4">
              Mina is a significant stage of the Hajj journey, characterized by its distinctive white tents. It has
              recently won the Guinness World Records Award for the largest tent city in the world. Located within the
              boundaries of the Haram between Makkah and Muzdalifah, approximately 7 km to the northeast of the Holy
              Mosque, Mina holds both historical and religious significance.
            </p>
            <p className="text-gray-700 mb-4">
              Pilgrims typically spend the Day of Tarwiyah (the eighth day of Dhu al-Hijjah) in Mina and return again to
              spend the Day of Nahr (the tenth day of Dhu al-Hijjah) and the three days of Tashreeq (the eleventh,
              twelfth, and thirteenth days of Dhul-Hijjah). As the first stage of Hajj, Mina plays a crucial role in the
              pilgrimage journey.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Services in Mina</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>The Mashaer Train for transportation</li>
                <li>Modern housing camps for pilgrims</li>
                <li>Comprehensive catering services</li>
                <li>Efficient transportation system</li>
                <li>Integrated electricity system</li>
                <li>Interconnected road network</li>
                <li>Medical facilities and emergency services</li>
                <li>Security and guidance services</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Historical Significance</h3>
              <p className="text-gray-700 mb-4">
                Mina is famous for its archaeological landmarks and historical events. It includes the extension of "Ain
                Zubaida," as well as some old wells, including the well of Kadana.
              </p>
              <p className="text-gray-700">
                Historically, Mina was known for its seasonal markets, particularly the Arab Market. This market earned
                its name because most Arab pilgrims would display their goods there from the tenth to the thirteenth day
                of Dhu al-Hijjah.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3">Religious Importance</h3>
            <p className="text-gray-700 mb-4">
              Mina holds significant religious importance in Islam, particularly during the Hajj pilgrimage. It is in
              Mina where pilgrims perform the ritual of stoning the devil (Rami al-Jamarat), symbolizing Prophet
              Ibrahim's rejection of Satan's temptations.
            </p>
            <p className="text-gray-700">
              The days spent in Mina are filled with worship, remembrance of Allah, and the completion of important Hajj
              rituals. These days are considered among the most blessed days of the year in Islamic tradition.
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

