import Image from "next/image"
import Link from "next/link"

export default function MuzdalifahPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-[40vh]">
        <Image
          src="https://iramservices.com/storage/photos/1/63b06b7338759.jpg"
          alt="Muzdalifah - Al-Mash'ar al-Haram"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Muzdalifah</h1>
            <p className="text-xl max-w-3xl mx-auto">Al-Mash'ar al-Haram</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">About Muzdalifah</h2>
            <p className="text-gray-700 mb-4">
              Muzdalifah, referred to in the Holy Qur'an as "al-Mash'ar al-Haram," is an essential stage in the Hajj
              journey. Allah mentions it in the Qur'an: "But when you depart from 'Arafat, remember Allah at al-Mash'ar
              al-Haram." This sacred area is strategically located between Mina and Arafah, serving as a transitional
              point in the pilgrimage.
            </p>
            <p className="text-gray-700 mb-4">
              After departing from Arafah on the evening of the 9th day of Dhul Hijjah, pilgrims make their way to
              Muzdalifah where they spend the night. This overnight stay is an important part of the Hajj rituals,
              connecting the standing at Arafah with the subsequent rituals in Mina.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Rituals at Muzdalifah</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Pilgrims join and shorten Maghrib (sunset) and Isha (night) prayers</li>
                <li>Collection of pebbles for the Jamarat ritual in Mina</li>
                <li>Overnight stay until dawn or part of the night</li>
                <li>Remembrance of Allah as mentioned in the Qur'an</li>
                <li>Preparation for the Day of Eid and the rituals in Mina</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">Significance in Hajj</h3>
              <p className="text-gray-700 mb-4">
                Muzdalifah represents an important transition in the Hajj journey. After the spiritual climax of
                standing at Arafah, pilgrims move to Muzdalifah to continue their devotion and prepare for the upcoming
                rituals.
              </p>
              <p className="text-gray-700">
                The stay at Muzdalifah, though brief, is filled with significance. It is a time for reflection, rest,
                and preparation before the busy day of Eid al-Adha when pilgrims will perform multiple rituals in Mina.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3">Practical Information</h3>
            <p className="text-gray-700 mb-4">
              Muzdalifah is an open plain without permanent structures. During Hajj, basic facilities are provided for
              the pilgrims' overnight stay. The area becomes extremely crowded as millions of pilgrims gather there on
              the same night.
            </p>
            <p className="text-gray-700">
              Special provisions are made for the elderly, sick, and women, who are permitted to leave Muzdalifah after
              midnight to avoid the crowds. The Saudi authorities organize the movement of pilgrims to ensure safety and
              order during this critical transition.
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

