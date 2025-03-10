import { AccommodationPageClient } from "./page.client"

// Define the correct params type for Next.js dynamic routes
type Params = {
  id: string
}

// Use the correct function signature for Next.js App Router pages with dynamic params
export default function AccommodationPage({ params }: { params: Params }) {
  return <AccommodationPageClient id={params.id} />
}

