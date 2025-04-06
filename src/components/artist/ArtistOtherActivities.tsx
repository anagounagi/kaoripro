import { Activity } from 'lucide-react';
import { type Artist } from '../../data/artists';

interface ArtistOtherActivitiesProps {
  otherActivities: Artist['otherActivities'];
}

export function ArtistOtherActivities({ otherActivities }: ArtistOtherActivitiesProps) {
  if (!otherActivities?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Activity className="w-8 h-8 text-[#00796b]" />
        <h2 className="text-3xl font-bold text-[#00796b]">その他の活動</h2>
      </div>
      <ul className="space-y-2">
        {otherActivities.map((activity, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#00796b]">•</span>
            <span className="text-gray-700">{activity}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}