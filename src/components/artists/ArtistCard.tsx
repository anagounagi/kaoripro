import { type Artist } from '../../data/artists';

interface ArtistCardProps {
  id: number;
  name: string;
  image: string;
  description: string;
}

export function ArtistCard({ id, name, image, description }: ArtistCardProps) {
  return (
    <a 
      href={`/artists/${id}`}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform"
    >
      <div className="relative h-[320px] flex items-center justify-center bg-gray-50">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#00796b] mb-3">{name}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </a>
  );
}