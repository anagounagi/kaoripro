import { Sprout, Users, Beaker, Newspaper } from 'lucide-react';

export function ProjectActivities() {
  const activities = [
    {
      icon: Sprout,
      title: "無農薬・有機農法",
      description: "土壌改良や自然の生態系を活かした農法の実践",
      image: "https://kaori.aof-aroma.com/images/09.12.06_ia-731x1024.jpg"
    },
    {
      icon: Users,
      title: "農業体験イベント",
      description: "みかん狩り・収穫作業、花摘み取り、摘果作業など",
      image: "https://kaori.aof-aroma.com/images/IMG_4596-1024x768.jpg"
    },
    {
      icon: Beaker,
      title: "蒸留体験",
      description: "みかんの花を使用した蒸留体験の提供",
      image: "https://kaori.aof-aroma.com/images/R0013566.jpg"
    },
    {
      icon: Newspaper,
      title: "メディア展開",
      description: "NHK取材・出演による活動発信・青山ポップアップ",
      image: "https://kaori.aof-aroma.com/images/0522-21.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">主な活動</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <activity.icon className="w-6 h-6 text-[#00796b]" />
                  <h3 className="text-xl font-semibold text-[#00796b]">{activity.title}</h3>
                </div>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}