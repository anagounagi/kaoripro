import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const specialContents = [
  {
    id: 1,
    title: "季節の蒸留会",
    image: "https://kaori.aof-aroma.com/images/season.jpg",
    description: "四季折々の植物から香りを抽出する特別なワークショップ",
    season: "春夏秋冬"
  },
  {
    id: 2,
    title: "和の香り・塗香を作るクラス",
    image: "https://kaori.aof-aroma.com/images/wanokaori.jpg",
    description: "伝統的な日本の香りを学び、作る体験",
    season: "通年開催"
  },
  {
    id: 3,
    title: "チームムエット",
    image: "https://kaori.aof-aroma.com/images/team.jpg",
    description: "香りのオンラインサロン",
    link: "https://tm.aof-aroma.com",
    season: "毎月開催"
  }
];

export function SpecialContent() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a237e] to-[#0d47a1]"></div>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://kaori.aof-aroma.com/images/pattern.png')] bg-repeat opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-center text-white">スペシャルコンテンツ</h2>
        <p className="text-xl text-white/80 text-center mb-16 max-w-2xl mx-auto">
          香りの世界をより深く体験できる特別なプログラムをご用意しています
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {specialContents.map((content) => (
            <div key={content.id}>
              {content.link ? (
                <a
                  href={content.link}
                  className="block relative group overflow-hidden rounded-xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                  onMouseEnter={() => setHoveredId(content.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative h-[420px]">
                    <img
                      src={content.image}
                      alt={content.title}
                      width={400}
                      height={420}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredId === content.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm mb-4">
                        {content.season}
                      </span>
                      <h3 className="text-2xl font-semibold mb-3 text-white">{content.title}</h3>
                      <p className="text-white/90 mb-6">{content.description}</p>
                      <div className="flex items-center text-white group-hover:text-white transition-colors">
                        <span className="font-medium">詳しく見る</span>
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                <div
                  className="relative group overflow-hidden rounded-xl transform transition-all duration-500 hover:shadow-2xl"
                  onMouseEnter={() => setHoveredId(content.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div className="relative h-[420px]">
                    <img
                      src={content.image}
                      alt={content.title}
                      width={400}
                      height={420}
                      className={`w-full h-full object-cover transition-transform duration-700 ${
                        hoveredId === content.id ? 'scale-110' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                    <div className="absolute inset-x-0 bottom-0 p-8">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white/90 text-sm mb-4">
                        {content.season}
                      </span>
                      <h3 className="text-2xl font-semibold mb-3 text-white">{content.title}</h3>
                      <p className="text-white/90">{content.description}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}