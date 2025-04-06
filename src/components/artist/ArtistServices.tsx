import { Briefcase } from 'lucide-react';
import { type Artist } from '../../data/artists';

interface ArtistServicesProps {
  services: Artist['services'];
}

export function ArtistServices({ services }: ArtistServicesProps) {
  if (!services?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Briefcase className="w-8 h-8 text-[#00796b]" />
        <h2 className="text-3xl font-bold text-[#00796b]">提供サービス</h2>
      </div>
      <ul className="space-y-2">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#00796b]">•</span>
            <span className="text-gray-700">{service}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}