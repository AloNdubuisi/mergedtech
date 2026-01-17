"use client"

import Image from "next/image"

export default function HeroImage() {
  return (
    <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[620px] flex justify-center items-center">
      {/* Decorative background glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent rounded-3xl blur-3xl" />

      {/* Main image */}
      <div className="relative z-10 w-full max-w-md lg:max-w-lg">
        <Image
          src="/images/banner-img.png"
          alt="MergedTech SaaS and Developer Mentorship"
          width={720}
          height={720}
          priority
          className="w-full h-auto object-contain rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  )
}
