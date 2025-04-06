import { Book } from 'lucide-react';
import { type Artist } from '../../data/artists';

interface ArtistPublicationsProps {
  publications: Artist['publications'];
}

export function ArtistPublications({ publications }: ArtistPublicationsProps) {
  if (!publications?.length) return null;

  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <Book className="w-8 h-8 text-[#00796b]" />
        <h2 className="text-3xl font-bold text-[#00796b]">著書</h2>
      </div>
      <ul className="space-y-2">
        {publications.map((publication, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-[#00796b]">•</span>
            <span className="text-gray-700">{publication}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}