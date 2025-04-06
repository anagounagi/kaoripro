import { Calendar, Video, Users } from 'lucide-react';

export function TeamMuetFeatures() {
  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "月末",
      description: "レポート共有や短いミーティングを実施"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "1日zoom開催",
      description: "オンラインでの香りチェックや勉強会を実施"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "リアル参加",
      description: "月に一度のワークショップで実際に香りを体験"
    }
  ];

  return (
    <section className="py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl text-[#1a472a] font-light mb-8 text-center">
          チームムエットはサブスクリプションです
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-lg text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a472a]/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg text-[#1a472a] font-light mb-2">{feature.title}</h3>
              <p className="text-[#1a472a]/80 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}