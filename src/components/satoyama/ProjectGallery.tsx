import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const galleryImages = [
  {
    url: "https://kaori.aof-aroma.com/images/09.12.06_ia-731x1024.jpg",
    caption: "無農薬栽培の様子"
  },
  {
    url: "https://kaori.aof-aroma.com/images/IMG_4596-1024x768.jpg",
    caption: "収穫作業"
  },
  {
    url: "https://kaori.aof-aroma.com/images/R0013566.jpg",
    caption: "蒸留体験の様子"
  },
  {
    url: "https://kaori.aof-aroma.com/images/0522-21.jpg",
    caption: "メディア取材"
  },
  {
    url: "https://kaori.aof-aroma.com/images/NEC_0589.jpg",
    caption: "収穫"
  },
  {
    url: "https://kaori.aof-aroma.com/images/P1020590-300x225.jpg",
    caption: "出展"
  },
  {
    url: "https://kaori.aof-aroma.com/images/mikanen-neko.jpg",
    caption: "ミカン園に迷い込んだ子猫"
  },
  {
    url: "https://kaori.aof-aroma.com/images/RIMG0412.jpg",
    caption: "草刈り"
  },
  {
    url: "https://kaori.aof-aroma.com/images/DSCN5532.jpg",
    caption: "体験"
  },
  {
    url: "https://kaori.aof-aroma.com/images/DSCN1520.jpg",
    caption: "花摘み"
  }
];

export function ProjectGallery() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">活動ギャラリー</h2>
        <div className="relative">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Previous images"
            >
              <ChevronLeft className="w-6 h-6 text-[#00796b]" />
            </button>
          )}
          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors"
              aria-label="Next images"
            >
              <ChevronRight className="w-6 h-6 text-[#00796b]" />
            </button>
          )}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 snap-start"
              >
                <div className="relative h-48">
                  <img
                    src={image.url}
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}