import { Beaker, Users, Lightbulb, Factory, TreePine, GraduationCap } from 'lucide-react';

const services = [
  {
    icon: Beaker,
    title: "オリジナル香りデザイン開発",
    description: "香りのカスタマイズ開発、ブランドイメージに合わせた香りの創造など、幅広いニーズに対応します。",
    image: "https://kaori.aof-aroma.com/images/original.jpg",
    color: "from-[#004d40] to-[#00796b]"
  },
  {
    icon: Factory,
    title: "空間関連事業",
    description: "香りシステムの設置と管理、空間の香りデザインを通じて、快適な環境を創造します。",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    color: "from-[#1a237e] to-[#3949ab]"
  },
  {
    icon: Users,
    title: "香りイベント企画",
    description: "特別なイベントやキャンペーンのための香り選び、演出プランの作成と実施を行います。",
    image: "https://kaori.aof-aroma.com/images/photo-1505236858219-8359eb29e329.webp",
    color: "from-[#b71c1c] to-[#e53935]"
  },
  {
    icon: TreePine,
    title: "里山みかんプロジェクト",
    description: "農業放棄地を活用し、芳香植物を植えるプロジェクトを展開しています。",
    image: "https://kaori.aof-aroma.com/images/PICT0005.jpg",
    color: "from-[#1b5e20] to-[#388e3c]",
    link: "/satoyama-project"
  },
  {
    icon: GraduationCap,
    title: "桜アロマティーク",
    description: "香りの基礎から調香技術まで、体系的に学べる専門的なスクールプログラムを提供します。",
    image: "https://kaori.aof-aroma.com/images/sakuraaromatique.jpg",
    color: "from-[#4a148c] to-[#7b1fa2]",
    link: "/school"
  },
  {
    icon: Lightbulb,
    title: "香りマーケティング",
    description: "ブランド価値向上のための香りを活用したマーケティング戦略をご提案します。",
    image: "https://kaori.aof-aroma.com/images/photo-1434030216411-0b793f4b4173.webp",
    color: "from-[#e65100] to-[#f57c00]"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-16 text-center">提供するサービス</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-50 transition-opacity duration-500 group-hover:opacity-70`}></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <service.icon className="w-16 h-16 text-white" />
                </div>
              </div>
              <div className="p-8 bg-white relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <service.icon className="w-8 h-8 text-[#00796b]" />
                </div>
                <h3 className="text-xl font-semibold text-[#00796b] mb-4 mt-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{service.description}</p>
                {service.link && (
                  <div className="text-center">
                    <a
                      href={service.link}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#00796b] text-white rounded-full hover:bg-[#004d40] transition-colors"
                    >
                      詳しく見る →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}