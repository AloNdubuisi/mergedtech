"use client"

import { ArrowRight } from "lucide-react"
import Button from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50 border-t border-b border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Ready to Transform Your Career?</h2>
          <p className="text-lg text-muted-foreground">
            Join our community today and get access to mentorship, resources, and opportunities.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="rounded-full px-8 py-6 text-base" size="lg">
            Start Your Journey
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-base border-primary/30 hover:bg-primary/5 bg-transparent"
            size="lg"
          >
            Schedule Demo
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">✓ Free 7-day trial • No credit card required</p>
      </div>
    </section>
  )
}
