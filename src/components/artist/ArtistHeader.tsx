import { type Artist } from '../../data/artists';

interface ArtistHeaderProps {
  artist: Artist;
}

export function ArtistHeader({ artist }: ArtistHeaderProps) {
  return (
    <div className="relative h-96">
      <img
        src={artist.image}
        alt={artist.name}
        className="w-full h-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
        <h1 className="text-4xl font-bold mb-2">{artist.name}</h1>
        <p className="text-xl">{artist.title}</p>
      </div>
    </div>
  );
}