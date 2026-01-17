"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Logo from "@/components/layout/logo"
import NavLink from "@/components/layout/nav-link"
import Button from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "about" },
    { label: "Services", href: "#services" },
    { label: "Community", href: "#community" },
    { label: "Mentorship", href: "#mentorship" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <Button className="hidden md:inline-flex bg-[#00D492] rounded-full px-6" size="lg">
          Get Started
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full rounded-full mt-2">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
}
