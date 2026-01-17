"use client"

import CommunityCard from "@/components/layout/community-card"

/**
 * Community Section
 *
 * Highlights community features and member stories with:
 * - Visual cards with member profiles
 * - Statistics about community
 * - Call-to-action to join
 */
export default function Community() {
  const communityHighlights = [
    {
      name: "Okories Chukwudi",
      role: "Sennior Software Engineer & COO",
      achievement: "Shipped 3 products in 6 months",
      color: "bg-blue-500",
      initials: "OC ",
    },
    {
      name: "Ohuka Ikenna Valentine",
      role: "Senior DevOps Engineer & CTO",
      achievement: "Built scalable infrastructure",
      color: "bg-purple-500",
      initials: "IV",
    },
    {
      name: "Alo Ndubuisi",
      role: "Middlewel Software Developer & CFO",
      achievement: "Led 10+ mentorship sessions",
      color: "bg-emerald-500",
      initials: "AN",
    },
  ]

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-balance">Thriving Developer Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of developers building together and learning from each other.
          </p>
        </div>

        {/* Community Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {communityHighlights.map((member, index) => (
            <CommunityCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}
