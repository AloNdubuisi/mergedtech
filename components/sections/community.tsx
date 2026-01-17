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
      initials: "SC",
    },
    {
      name: "Ohuka Ikenna Valentine",
      role: "Senior DevOps Engineer & CTO",
      achievement: "Built scalable infrastructure",
      color: "bg-purple-500",
      initials: "AR",
    },
    {
      name: "Alo Ndubuisi",
      role: "Middlewel Software Developer & CFO",
      achievement: "Led 10+ mentorship sessions",
      color: "bg-emerald-500",
      initials: "JK",
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

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-card/50 rounded-lg p-8 border border-border">
          {[
            { label: "Active Members", value: "10,000+" },
            { label: "Daily Conversations", value: "5,000+" },
            { label: "Projects Shipped", value: "2,500+" },
            { label: "Countries", value: "95+" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
