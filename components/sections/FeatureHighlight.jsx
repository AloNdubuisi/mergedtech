import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function FeatureHighlight({ title, description, features, imageSrc, reverse }) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
      {/* Left side - Text content */}
      <div className={reverse ? 'md:order-2' : ''}>
        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{title}</h3>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{description}</p>
        
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="bg-emerald-100 rounded-full p-2 flex-shrink-0">
                <CheckCircle size={20} className="text-emerald-600" />
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">{feature.title}</h4>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Right side - IMAGE */}
      <div className={reverse ? 'md:order-1' : ''}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-86 md:h-[450px]">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}