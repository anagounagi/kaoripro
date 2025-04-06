import { Award } from 'lucide-react';
import { type Artist } from '../../data/artists';

interface ArtistAchievementsProps {
  achievements: Artist['achievements'];
}

export function ArtistAchievements({ achievements }: ArtistAchievementsProps) {
  if (!achievements?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Award className="w-8 h-8 text-[#00796b]" />
        <h2 className="text-3xl font-bold text-[#00796b]">主要な実績</h2>
      </div>
      <ul className="space-y-2">
        {achievements.map((achievement, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#00796b]">•</span>
            <span className="text-gray-700">{achievement}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}