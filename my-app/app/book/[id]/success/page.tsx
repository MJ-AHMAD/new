import Link from "next/link"
import { Footer } from "@/components/footer"

export default function SuccessPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-600 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              TRUSTED-ALLY
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-green-200 transition-colors">
                Home
              </Link>
              <Link href="/packages" className="hover:text-green-200 transition-colors">
                Packages
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

      <main className="flex-grow flex items-center justify-center py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-4">Booking Successful!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for booking your Umrah package with TRUSTED-ALLY. We have received your booking request and our
              team will contact you shortly to confirm the details.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="font-bold text-lg mb-2">What's Next?</h2>
              <ol className="text-left space-y-2 text-gray-700">
                <li>1. You will receive a confirmation email with your booking details.</li>
                <li>2. Our team will contact you within 24 hours to discuss payment options.</li>
                <li>3. Once payment is confirmed, we will begin processing your visa and travel arrangements.</li>
                <li>4. You will receive a detailed itinerary and travel documents via email.</li>
              </ol>
            </div>

            <Link
              href="/hajj-umrah-guidance"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
            >
              Back to hajj-umrah-guidance
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

