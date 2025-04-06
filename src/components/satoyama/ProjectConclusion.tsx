import { Heart } from 'lucide-react';

export function ProjectConclusion() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-[#00796b] mb-6 text-center">感謝の言葉</h2>
            <div className="space-y-6 text-gray-600">
              <p>
2014年、農園の売却が決定し、永農されることとなりました。それに伴い、活動を終了する運びとなりましたが、これまで活動を支えてくださったすべての皆さまに、心より感謝申し上げます。
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-[#00796b] mt-1" />
                  <span>ボランティアの皆様の惜しみないご協力</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-[#00796b] mt-1" />
                  <span>専門家の皆様からの貴重な知見とアドバイス</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-[#00796b] mt-1" />
                  <span>企業の皆様からのCSR活動を通じたサポート</span>
                </li>
                <li className="flex items-start gap-2">
                  <Heart className="w-5 h-5 text-[#00796b] mt-1" />
                  <span>地域の飲食店の皆様からのご支援</span>
                </li>
              </ul>
              <p className="mt-6">
この活動を通じて得た経験と学びを活かし、これからも地域と環境に根ざした持続可能な活動を続けていきたいと考えています。活動中は、イノシシが出没したり、葛との闘いがあったり、トイレの問題に苦労したりと、多くの困難にも直面しました。しかし、そのような困難を乗り越える中で得た知識や知恵は、これからの活動にとって大きな財産となっています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}