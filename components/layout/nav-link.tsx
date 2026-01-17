"use client"

import type React from "react"

interface NavLinkProps {
  href: string
  label: string
}

export default function NavLink({ href, label }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith("#")) {
      e.preventDefault()
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-foreground hover:text-primary transition-colors text-sm font-medium"
    >
      {label}
    </a>
  )
}
