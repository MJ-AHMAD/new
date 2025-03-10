import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function AccommodationCard() {
  return (
    <Card className="overflow-hidden">
      <div className="relative w-full h-[300px]">
        <Image src="/accommodation0.png" alt="Luxury Beachfront Resort" fill className="object-cover" priority />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-semibold">Luxury Beachfront Resort</h3>
        <p className="text-gray-600">
          Experience luxury at its finest with our beachfront resort featuring multiple pools and stunning ocean views.
        </p>
      </CardContent>
    </Card>
  )
}

