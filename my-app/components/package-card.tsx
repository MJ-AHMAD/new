import Image from "next/image"
import Link from "next/link"

interface PackageProps {
  package: {
    id: string
    title: string
    price: string
    duration: string
    description: string
    features: string[]
    image: string
  }
}

export function PackageCard({ package: pkg }: PackageProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-56">
        <Image src={pkg.image || "/placeholder.svg"} alt={pkg.title} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {pkg.duration}
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>

        <div className="mb-4">
          <span className="text-2xl font-bold text-green-600">{pkg.price}</span>
          <span className="text-gray-500 text-sm"> / per person</span>
        </div>

        <ul className="mb-6 space-y-2">
          {pkg.features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
          {pkg.features.length > 4 && (
            <li className="text-gray-500 text-sm italic">+ {pkg.features.length - 4} more features</li>
          )}
        </ul>

        <div className="flex space-x-3">
          <Link
            href={`/packages/${pkg.id}`}
            className="flex-1 bg-white border border-green-600 text-green-600 hover:bg-green-50 text-center py-2 rounded-md font-medium transition-colors duration-300"
          >
            Learn More
          </Link>
          <Link
            href={`/book/${pkg.id}`}
            className="flex-1 bg-green-600 text-white hover:bg-green-700 text-center py-2 rounded-md font-medium transition-colors duration-300"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  )
}

