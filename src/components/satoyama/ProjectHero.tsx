import { ArrowRight } from 'lucide-react';

export function ProjectHero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://kaori.aof-aroma.com/images/PICT0005.jpg"
          alt="みかん畑の風景"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative text-center text-white px-6">
        <h1 className="text-5xl font-bold mb-6">里山みかんプロジェクト</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          耕作放棄地を再生し、持続可能な農業を実践。
          新たな付加価値の創成・地域の力で未来へつなぐ
        </p>
        <a 
          href="#overview" 
          className="inline-flex items-center gap-2 bg-white text-[#00796b] px-8 py-3 rounded-full hover:bg-[#00796b] hover:text-white transition-colors"
        >
          プロジェクトについて
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}