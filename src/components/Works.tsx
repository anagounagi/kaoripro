import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Work {
  id: number;
  title: string;
  client: string;
  description: string;
  image: string;
  year: string;
}

const works: Work[] = [
  {
    id: 1,
    title: "愛・地球博 長久手日本館",
    client: "Zone-3",
    description: "空間演出とアロマ設計",
    image: "https://kaori.aof-aroma.com/images/offi_ai_1.jpg",
    year: "2005"
  },
  {
    id: 2,
    title: "エルメス 25Fouberg 発売イベント",
    client: "エルメス",
    description: "イベントの映像にあわせて香りを漂わせる",
    image: "https://kaori.aof-aroma.com/images/en_1.jpg",
    year: ""
  },
  {
    id: 4,
    title: "ジャン・ポール・ゴルチェの世界展",
    client: "上野の森美術館",
    description: "ジャン・ポール・ゴルチェの世界の演出",
    image: "https://kaori.aof-aroma.com/images/ueno_1.jpg",
    year: ""
  },
  {
    id: 5,
    title: "寅さん記念館 香りの選出",
    client: "寅さん記念館",
    description: "だんごやの匂い　印刷所の匂い　マドンナの匂い",
    image: "https://kaori.aof-aroma.com/images/tora_kine_1.jpg",
    year: "2012"
  },
  {
    id: 6,
    title: "オオサンショウウオの匂い",
    client: "京都水族館",
    description: "京都水族館",
    image: "https://kaori.aof-aroma.com/images/kyoto_1.jpg",
    year: ""
  }
];

export function Works() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      const newScrollLeft = direction === 'left' 
        ? current.scrollLeft - scrollAmount 
        : current.scrollLeft + scrollAmount;
      
      current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });

      setTimeout(() => {
        if (current) {
          setShowLeftArrow(current.scrollLeft > 0);
          setShowRightArrow(
            current.scrollLeft < (current.scrollWidth - current.clientWidth - 10)
          );
        }
      }, 300);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">Works 実績</h2>
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Previous works"
            >
              <ChevronLeft className="w-6 h-6 text-[#00796b]" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Next works"
            >
              <ChevronRight className="w-6 h-6 text-[#00796b]" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {works.map((work) => (
              <div
                key={work.id}
                className="min-w-[300px] md:min-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 snap-start"
              >
                <div className="relative h-48">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  {work.year && (
                    <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full">
                      <span className="text-[#00796b] font-medium">{work.year}</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#00796b] mb-2">{work.title}</h3>
                  <p className="text-gray-600 mb-2">{work.client}</p>
                  <p className="text-gray-500">{work.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}