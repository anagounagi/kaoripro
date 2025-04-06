import { Sparkles, Wind, Heart } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">香り総合デザイン</h2>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            あなたが香りを身にまとう瞬間、生活の中で新しい扉が開かれます。
            そこは、普段見過ごしていた美しさや喜びが満ち溢れる場所。
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            香りは時に挑戦を促し、時に心を癒し、あなたに新たなインスピレーションをもたらします。
この香りを通じて、新しい自分を見つけ、視野を広げてみませんか？
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-[#00796b] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">品質と安全性</h3>
            <p className="text-gray-600">
              高品質で安全な香料を使用し、人々が安心して楽しめる香りを提供します。
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Wind className="w-12 h-12 text-[#00796b] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">創造性とイノベーション</h3>
            <p className="text-gray-600">
              独自の香りの創出や新しい香りの使用方法を通じて、競合他社との差別化を図ります。
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Heart className="w-12 h-12 text-[#00796b] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">サステナビリティ</h3>
            <p className="text-gray-600">
              環境に配慮した香料の選定や、持続可能な事業運営を心がけています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}