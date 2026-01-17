"use client"

export default function Stats() {
  const stats = [
    { number: "98%", label: "Satisfaction Rate" },
    { number: "2.5M+", label: "Hours Mentored" },
    { number: "$15M+", label: "Funding by Our Members" },
    { number: "6x", label: "Faster Career Growth" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <p className="text-4xl sm:text-5xl font-bold text-primary">{stat.number}</p>
              <p className="text-muted-foreground text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
