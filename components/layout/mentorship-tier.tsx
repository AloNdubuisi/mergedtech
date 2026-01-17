import { Check } from "lucide-react"
import Button from "@/components/ui/button"

/**
 * Mentorship Tier Component
 *
 * Pricing card with:
 * - Price and period
 * - Feature list with checkmarks
 * - CTA button
 * - Highlight option for recommended tier
 */
interface MentorshipTierProps {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export default function MentorshipTier({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
}: MentorshipTierProps) {
  return (
    <div
      className={`relative p-8 rounded-lg border transition-all ${
        highlighted
          ? "bg-primary/10 border-primary shadow-lg shadow-primary/20 md:scale-105"
          : "bg-card border-border hover:border-primary/50"
      }`}
    >
      {/* Recommended Badge */}
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          <span className="text-muted-foreground">{period}</span>
        </div>
      </div>

      {/* Features */}
      <div className="mb-8 space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button
        className={`w-full rounded-full ${
          highlighted ? "" : "bg-primary/20 text-primary hover:bg-primary/30 border border-primary/30"
        }`}
        variant={highlighted ? "default" : "outline"}
        size="lg"
      >
        {cta}
      </Button>
    </div>
  )
}
