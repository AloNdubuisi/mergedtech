import { CheckCircle, ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">
      <div className="bg-gradient-to-br from-emerald-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
        <Icon size={32} className="text-emerald-600" />
      </div>
      
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle size={20} className="text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-slate-700">{feature}</span>
          </li>
        ))}
      </ul>
      
      <button className="mt-6 text-emerald-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
        Learn More <ArrowRight size={18} />
      </button>
    </div>
  );
}