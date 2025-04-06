import { Quote } from 'lucide-react';

export function Message() {
  return (
    <section className="py-20 bg-[#1a237e] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://kaori.aof-aroma.com/images/PS166428.webp"
          alt="Background"
          className="w-full h-full object-cover opacity-20"
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          fetchpriority="low"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            香りは、人々に幸福感を与え、自信を与え、また周りの人々を魅了する力があります
          </h2>
          <p className="text-xl leading-relaxed mb-8">
            Air Of Fragrance®の調香クラス「桜アロマティーク」で、自分だけの特別な香りを作りましょう。
            香りの歴史や文化についても学び、香りについての深い知識を得ることができます。
          </p>
          <a
            href="/school"
            className="inline-block bg-white text-[#1a237e] px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors"
          >
            詳しく見る
          </a>
        </div>
      </div>
    </section>
  );
}