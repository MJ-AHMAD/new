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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"

export default function BookingPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    roomType: "deluxe",
    checkIn: new Date(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 3)),
    specialRequests: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [checkInOpen, setCheckInOpen] = useState(false)
  const [checkOutOpen, setCheckOutOpen] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleDateChange = (name: "checkIn" | "checkOut", date: Date) => {
    setFormData((prev) => ({ ...prev, [name]: date }))
    if (name === "checkIn") {
      setCheckInOpen(false)
    } else {
      setCheckOutOpen(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      router.push(`/book-accommodation/madinah-ritz-carlton/success`)
    }, 1500)
  }

  const roomPrices = {
    deluxe: 500,
    club: 700,
    suite: 950,
    presidential: 1500,
  }

  const selectedRoomPrice = roomPrices[formData.roomType as keyof typeof roomPrices]
  const nights = Math.ceil((formData.checkOut.getTime() - formData.checkIn.getTime()) / (1000 * 60 * 60 * 24))
  const totalPrice = selectedRoomPrice * nights

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="https://mj-ahmad.github.io/mja2025/img/carlton00.png"
              alt="The Ritz-Carlton Madinah"
              width={600}
              height={400}
              className="w-full object-cover h-[400px]"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold">The Ritz-Carlton Madinah</h1>
            <div className="flex items-center text-green-600">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>5-star ultra-luxury hotel</span>
            </div>

            <p className="text-gray-600">
              Experience the pinnacle of luxury at The Ritz-Carlton Madinah, where impeccable service meets unparalleled
              elegance. This prestigious hotel offers an extraordinary stay with lavish accommodations, exquisite
              dining, and world-class amenities, all within proximity to the Prophet's Mosque.
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Hotel Amenities</h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> 24/7 Personal Butler
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Ultra-Premium WiFi
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Luxury Spa & Wellness
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> State-of-the-art Fitness
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Michelin-Star Dining
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Executive Lounge
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Luxury Car Service
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-600" /> Private Check-in
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Location</h3>
              <p className="text-gray-600">
                Ideally situated near the Prophet's Mosque, offering convenient access to religious sites while
                providing a sanctuary of luxury and tranquility.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Book Your Stay</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} required />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="guests">Number of Guests</Label>
                  <Select value={formData.guests} onValueChange={(value) => handleSelectChange("guests", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="roomType">Room Type</Label>
                  <Select value={formData.roomType} onValueChange={(value) => handleSelectChange("roomType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="deluxe">Deluxe Room ($500/night)</SelectItem>
                      <SelectItem value="club">Club Level ($700/night)</SelectItem>
                      <SelectItem value="suite">Luxury Suite ($950/night)</SelectItem>
                      <SelectItem value="presidential">Presidential Suite ($1500/night)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Check-in Date</Label>
                  <Popover open={checkInOpen} onOpenChange={setCheckInOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(formData.checkIn, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.checkIn}
                        onSelect={(date) => date && handleDateChange("checkIn", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div>
                  <Label>Check-out Date</Label>
                  <Popover open={checkOutOpen} onOpenChange={setCheckOutOpen}>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {format(formData.checkOut, "PPP")}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={formData.checkOut}
                        onSelect={(date) => date && handleDateChange("checkOut", date)}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              <div>
                <Label htmlFor="specialRequests">Special Requests</Label>
                <Input
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Room Rate:</span>
                <span>${selectedRoomPrice} per night</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Number of Nights:</span>
                <span>{nights}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${totalPrice}</span>
              </div>
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Book Now"}
            </Button>

            <p className="text-sm text-gray-500 text-center">
              Your card will not be charged until check-in. Cancellation is free up to 72 hours before check-in.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

