"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function AnimatedHeader() {
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    {
      url: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2Fmakkah_banner_new2_8764b46f6b.jpg&w=1920&q=75",
      text: "Welcome to T-ALLY your official guide to Makkah and Madinah",
    },
    {
      url: "https://www.nusuk.sa/_next/image?url=%2Fuploads%2F2_Banner_45e5ce3e20.jpg&w=1920&q=95",
      text: "Plan your Umrah and Ziyarah your way",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <header className="relative h-[70vh] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <Image
            src={image.url || "/placeholder.svg"}
            alt={`Umrah banner ${index + 1}`}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto">
                {image.text}
              </h1>
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                Explore Packages
              </button>
            </div>
          </div>
        </div>
      ))}
    </header>
  )
}

