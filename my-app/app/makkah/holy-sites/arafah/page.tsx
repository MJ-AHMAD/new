import Image from "next/image"
import Link from "next/link"

export default function ArafahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-[40vh]">
        <Image
          src="https://cdn.jawar.sa/hajj/f3611584-fb42-4e66-b205-2850da108e00"
          alt="Arafah - The Greatest Day of Hajj"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Arafah</h1>
            <p className="text-xl max-w-3xl mx-auto">The Greatest Day of Hajj</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">About Arafah</h2>
            <p className="text-gray-700 mb-4">
              Arafah is one of the most significant stages of the pilgrim's journey. The standing at Arafah occurs on
              the ninth day of Dhu al-Hijjah, which is why this day is known as the Day of Arafah. The Prophet Muhammad,
              peace be upon him, emphasized its importance by saying: "Hajj is Arafah," highlighting that standing at
              Arafah is the most essential pillar of Hajj.
            </p>
            <p className="text-gray-700 mb-4">
              Due to its central importance in the Hajj rituals, the Day of Arafah is also called the Greatest Day of
              Hajj. Pilgrims are permitted to stand and supplicate anywhere within the boundaries of Arafah or at the
              Mountain of Mercy (Jabal ar-Rahmah).
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Rituals at Arafah</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Pilgrims join and shorten Zuhr (noon) and Asr (afternoon) prayers</li>
                <li>A sermon is delivered, following the tradition of the Prophet</li>
                <li>Pilgrims engage in extensive supplication and remembrance of Allah</li>
                <li>After sunset, pilgrims depart for Muzdalifah</li>
                <li>The standing at Arafah continues from noon until sunset</li>
                <li>Pilgrims seek forgiveness and mercy from Allah</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Virtues of the Day of Arafah</h3>
              <p className="text-gray-700 mb-4">
                The Day of Arafah holds great virtues in Islamic tradition. The Prophet Muhammad, peace be upon him,
                stated that the Day of Arafah is the best day for Allah.
              </p>
              <p className="text-gray-700">
                It is believed that on this day, Allah descends to the lowest heaven and proudly tells the angels about
                the pilgrims standing at Arafah, seeking His forgiveness. It is also a day when Allah frees more people
                from Hellfire than any other day.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3">Historical Significance</h3>
            <p className="text-gray-700 mb-4">
              Arafah holds profound historical significance as it was at this location that the Prophet Muhammad, peace
              be upon him, delivered his Farewell Sermon during his last Hajj. This sermon contained important
              principles and teachings that continue to guide Muslims worldwide.
            </p>
            <p className="text-gray-700">
              It is also believed that Adam and Eve were reunited at Arafah after their descent from Paradise, making it
              a symbol of divine mercy and forgiveness in Islamic tradition.
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

