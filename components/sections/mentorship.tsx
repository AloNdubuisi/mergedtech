"use client"

import MentorshipTier from "@/components/layout/mentorship-tier"

export default function Mentorship() {
  const tiers = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for beginners",
      features: ["Access to community forums", "Monthly group sessions", "Resource library access", "Email support"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular choice",
      features: [
        "Everything in Starter",
        "2 1-on-1 mentoring sessions/month",
        "Code review access",
        "Priority support",
        "Exclusive webinars",
      ],
      cta: "Start Free Trial",
      highlighted: true,
    },
    {
      name: "Elite",
      price: "$299",
      period: "/month",
      description: "For serious growth",
      features: [
        "Everything in Professional",
        "Unlimited 1-on-1 sessions",
        "Career coaching",
        "Job board access",
        "Direct mentor assignment",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ]

  return (
    <section id="mentorship" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Choose Your Growth Path</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a mentorship tier that fits your development stage and goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {tiers.map((tier, index) => (
            <MentorshipTier key={index} {...tier} />
          ))}
        </div>
      </div>
    </section>
  )
}
