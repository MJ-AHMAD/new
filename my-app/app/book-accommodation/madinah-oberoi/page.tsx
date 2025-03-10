"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function BookingPage() {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)

    // Simulate form submission delay
    setTimeout(() => {
      router.push("/book-accommodation/madinah-oberoi/success")
    }, 1500)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/oberoi00.png"
              alt="The Oberoi Madinah"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">The Oberoi Madinah</h1>
            <div className="flex items-center text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Luxury 5-Star Hotel</span>
            </div>

            <p className="text-gray-600">
              Experience unparalleled luxury at The Oberoi Madinah, where timeless elegance meets contemporary comfort.
              Located just steps away from the Prophet's Mosque, this prestigious hotel offers impeccable service,
              exquisite dining, and lavishly appointed rooms with stunning views of the holy city.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-medium">Location</h3>
                <p className="text-sm text-gray-600">Near Prophet's Mosque</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-medium">Room Types</h3>
                <p className="text-sm text-gray-600">Deluxe, Premier, Suite</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-medium">Amenities</h3>
                <p className="text-sm text-gray-600">Spa, Fine Dining, Business Center</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <h3 className="font-medium">Price Range</h3>
                <p className="text-sm text-gray-600">$250-$500 per night</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>

          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-medium">Processing Your Booking</h3>
              <p className="text-gray-500 text-center">Please wait while we confirm your reservation...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="Enter your first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Enter your last name" required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Enter your phone number" required />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <Label>Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="roomType">Room Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select room type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">Deluxe Room</SelectItem>
                      <SelectItem value="premier">Premier Room</SelectItem>
                      <SelectItem value="luxury">Luxury Suite</SelectItem>
                      <SelectItem value="royal">Royal Suite</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5+ Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="specialRequests">Special Requests</Label>
                <Textarea id="specialRequests" placeholder="Any special requests or requirements?" />
              </div>

              <Button type="submit" className="w-full">
                Book Now
              </Button>

              <p className="text-xs text-gray-500 text-center mt-4">
                By clicking "Book Now", you agree to our terms and conditions and privacy policy.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

