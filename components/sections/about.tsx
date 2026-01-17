import FeatureHighlight from '@/components/sections/FeatureHighlight';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-20">
          
          {/* First Feature */}
          <FeatureHighlight
            title="Built by Developers, for Developers"
            description="We understand the challenges developers face because we've been there."
            features={[
              {
                title: "Industry-Standard Tools",
                description: "Access the same tools used by top tech companies worldwide"
              },
              {
                title: "Best Practices Built-In",
                description: "Learn and implement industry best practices from day one"
              }
            ]}
            imageSrc="/images/banner-img.png"
            reverse={false}
          />
        </div>
      </div>
    </section>
  );
}