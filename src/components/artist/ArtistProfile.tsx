import { Star } from 'lucide-react';
import { type Artist } from '../../data/artists';

interface ArtistProfileProps {
  artist: Artist;
}

export function ArtistProfile({ artist }: ArtistProfileProps) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Star className="w-8 h-8 text-[#00796b]" />
        <h2 className="text-3xl font-bold text-[#00796b]">プロフィール</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">{artist.profile}</p>
    </section>
  );
}