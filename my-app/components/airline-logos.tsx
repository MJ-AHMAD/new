import Image from "next/image"

export function AirlineLogos() {
  return (
    <div className="flex gap-6 items-center justify-center py-4">
      <Image src="/11.jpg" alt="NOVOAIR" width={200} height={60} className="object-contain" />
      <Image src="/1111.jpg" alt="Airline Logo" width={80} height={80} className="object-contain" />
      <Image src="/111.jpg" alt="Airline Logo with Stars" width={180} height={60} className="object-contain" />
    </div>
  )
}

