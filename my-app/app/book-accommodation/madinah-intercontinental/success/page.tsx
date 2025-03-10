import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function BookingSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>

        <p className="text-gray-600 mb-8">
          Your reservation at InterContinental Madinah has been successfully confirmed. A confirmation email with all
          the details has been sent to your email address.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Booking Details</h2>

          <div className="space-y-2 text-left">
            <div className="flex justify-between">
              <span className="text-gray-500">Hotel:</span>
              <span className="font-medium">InterContinental Madinah</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Booking ID:</span>
              <span className="font-medium">
                ITC
                {Math.floor(Math.random() * 10000)
                  .toString()
                  .padStart(4, "0")}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status:</span>
              <span className="text-green-600 font-medium">Confirmed</span>
            </div>
          </div>
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

