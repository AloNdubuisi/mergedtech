import { Code, Rocket, Users } from "lucide-react";
import ServiceCard from "@/components/layout/service-card";

export default function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "SaaS Platform",
      description: "Access powerful development tools and infrastructure designed to accelerate your project delivery.",
      features: [
        "Cloud-based development environment",
        "Automated deployment pipelines",
        "Real-time collaboration tools",
        "Scalable infrastructure"
      ]
    },
    {
      icon: Users,
      title: "Mentorship Program",
      description: "Learn from industry experts with 1-on-1 sessions, code reviews, and career guidance.",
      features: [
        "Personalized learning paths",
        "Weekly mentorship sessions",
        "Code review & feedback",
        "Career development support"
      ]
    },
    {
      icon: Rocket,
      title: "Developer Community",
      description: "Join a vibrant community of developers sharing knowledge, projects, and opportunities.",
      features: [
        "Active discussion forums",
        "Weekly coding challenges",
        "Open source collaboration",
        "Networking events"
      ]
    }
  ];
  
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our <span className="text-emerald-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to accelerate your development journey and grow your career
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};