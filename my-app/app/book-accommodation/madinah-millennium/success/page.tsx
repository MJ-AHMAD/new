import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function BookingSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Your reservation at Millennium Madinah Airport has been successfully confirmed. A confirmation email has been
          sent to your email address.
        </p>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h2 className="font-medium text-gray-900 mb-2">Booking Details</h2>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>
              <span className="font-medium">Hotel:</span> Millennium Madinah Airport
            </li>
            <li>
              <span className="font-medium">Booking Reference:</span> MDN-
              {Math.floor(Math.random() * 10000)
                .toString()
                .padStart(4, "0")}
            </li>
            <li>
              <span className="font-medium">Status:</span> <span className="text-green-600">Confirmed</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <Button asChild className="w-full">
            <Link href="/services/accommodation">Browse More Accommodations</Link>
          </Button>

          <Button asChild variant="outline" className="w-full">
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

