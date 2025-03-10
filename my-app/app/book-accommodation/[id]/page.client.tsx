"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Sample accommodation data
const accommodations = [
  {
    id: "makkah-hotel",
    name: "Makkah Hotel",
    location: "Near Haram, Makkah",
    description: "Luxury hotel with a view of the Kaaba, offering comfortable rooms and excellent service.",
    price: "BDT 15,000 per night",
    amenities: ["Free WiFi", "Air Conditioning", "Room Service", "Restaurant", "Laundry Service"],
    images: ["/staymakkah00.png", "/staymakkah01.png"],
    rating: 4.8,
    reviews: 245,
  },
  {
    id: "madinah-hotel",
    name: "Madinah Hotel",
    location: "Near Masjid Nabawi, Madinah",
    description: "Comfortable hotel within walking distance of Masjid Nabawi, offering modern amenities.",
    price: "BDT 12,000 per night",
    amenities: ["Free WiFi", "Air Conditioning", "Room Service", "Restaurant", "Laundry Service"],
    images: ["/accommodation0.png", "/staymakkah01.png"],
    rating: 4.6,
    reviews: 189,
  },
]

export default function AccommodationPageClient({ id }: { id: string }) {
  const accommodation = accommodations.find((acc) => acc.id === id) || accommodations[0]

  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <Link href="/services/accommodation" className="text-green-600 hover:underline mb-4 inline-block">
          ← Back to Accommodations
        </Link>
        <h1 className="text-3xl font-bold mt-2">{accommodation.name}</h1>
        <p className="text-gray-600">{accommodation.location}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="relative h-[400px] mb-4 rounded-lg overflow-hidden">
            <Image
              src={accommodation.images[0] || "/placeholder.svg"}
              alt={accommodation.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {accommodation.images.map((image, index) => (
              <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${accommodation.name} ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Description</h2>
            <p className="text-gray-700">{accommodation.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Amenities</h2>
            <ul className="grid grid-cols-2 gap-2">
              {accommodation.amenities.map((amenity, index) => (
                <li key={index} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {amenity}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Book This Accommodation</CardTitle>
              <CardDescription>Secure your stay in {accommodation.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-lg font-bold text-green-600">{accommodation.price}</p>
                <div className="flex items-center mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(accommodation.rating) ? "text-yellow-400" : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600">
                    {accommodation.rating} ({accommodation.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="check-in" className="block text-sm font-medium text-gray-700">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    id="check-in"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="check-out" className="block text-sm font-medium text-gray-700">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    id="check-out"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-gray-700">
                    Number of Guests
                  </label>
                  <select
                    id="guests"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5+</option>
                  </select>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Now</Button>
            </CardFooter>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Contact our customer service team for assistance with booking or inquiries about this accommodation.
              </p>
              <div className="mt-4">
                <p className="flex items-center">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  +880 1234-567890
                </p>
                <p className="flex items-center mt-2">
                  <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  support@trusted-ally.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

