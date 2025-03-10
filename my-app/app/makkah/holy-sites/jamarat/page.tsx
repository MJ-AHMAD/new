import Image from "next/image"
import Link from "next/link"

export default function JamaratPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="relative h-[40vh]">
        <Image
          src="https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75"
          alt="Jamarat - Stoning the Devil"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Jamarat</h1>
            <p className="text-xl max-w-3xl mx-auto">The Ritual of Stoning the Devil</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">About Jamarat</h2>
            <p className="text-gray-700 mb-4">
              The Jamarat, or the Jamrah Pillars, are among the most prominent landmarks in Mina. These three pillars,
              located in Mina Valley, represent the locations where Prophet Ibrahim (Abraham) stoned Satan when he tried
              to tempt him against sacrificing his son as commanded by Allah. Today, they are enclosed within the
              impressive Jamarat Bridge, a modern structure designed to organize the crowds and ensure safety during
              this important ritual.
            </p>
            <p className="text-gray-700 mb-4">
              The ritual of stoning the Jamarat is a significant part of the Hajj pilgrimage, symbolizing the rejection
              of evil and temptation. Pilgrims throw pebbles at the three pillars according to a specific schedule and
              order, following the tradition of Prophet Muhammad, peace be upon him.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">The Stoning Ritual</h3>
              <p className="text-gray-700 mb-4">The stoning ritual follows a specific pattern:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  On the Day of Nahr (10th of Dhul Hijjah), pilgrims throw seven pebbles only at the largest Jamrah
                  (Jamrat al-Aqabah)
                </li>
                <li>
                  During the Days of Tashreeq (11th, 12th, and 13th of Dhul Hijjah), pilgrims throw seven pebbles at
                  each of the three Jamarat
                </li>
                <li>
                  The stoning begins with the smallest Jamrah (Jamrat al-Sughra), followed by the middle Jamrah (Jamrat
                  al-Wusta), and finally the largest Jamrah (Jamrat al-Aqabah)
                </li>
                <li>Each Jamrah must be hit with seven pebbles, collected from Muzdalifah or Mina</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3">The Jamarat Bridge</h3>
              <p className="text-gray-700 mb-4">
                The Jamarat Bridge is one of the pioneering projects that has made a civilizational and engineering leap
                in the service of pilgrims. This modern facility consists of four floors in addition to the ground
                floor, with a width of 80 meters.
              </p>
              <p className="text-gray-700">
                The bridge features 12 entrances and 12 exits in four directions, significantly reducing overcrowding.
                It is directly linked to the pilgrim camps, allowing for smoother movement and better organization of
                the massive crowds that gather for this ritual.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-8">
            <h3 className="text-xl font-bold mb-3">Safety Measures</h3>
            <p className="text-gray-700 mb-4">
              Given the historical challenges of managing large crowds during the stoning ritual, the Saudi authorities
              have implemented comprehensive safety measures:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                A schedule of Tafweej (Group Dispatching) organizes when different groups of pilgrims perform the ritual
              </li>
              <li>Clear directional signs and pathways guide pilgrims through the facility</li>
              <li>Multiple levels allow pilgrims to throw pebbles from any floor of the Jamarat Bridge</li>
              <li>Cooling systems and shade structures protect pilgrims from the heat</li>
              <li>Medical stations are positioned throughout the area for emergencies</li>
              <li>Security personnel and volunteers assist in maintaining order and providing guidance</li>
            </ul>
            <p className="text-gray-700 mt-4">
              It is crucial for pilgrims to abide by the schedule and directions provided by the organizers to ensure
              the safety and security of all participants.
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

