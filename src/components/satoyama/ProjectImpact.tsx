import { TrendingUp, Leaf, Heart } from 'lucide-react';

export function ProjectImpact() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">プロジェクトの成果</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8">
            <Leaf className="w-12 h-12 text-[#00796b] mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">農業の持続可能性</h3>
            <ul className="space-y-2 text-gray-600">
              <li>無農薬・有機農法の確立</li>
              <li>環境負荷の軽減</li>
              <li>高品質な農産物の生産</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <Heart className="w-12 h-12 text-[#00796b] mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">地域活性化</h3>
            <ul className="space-y-2 text-gray-600">
              <li>コミュニティの結束強化</li>
              <li>ボランティアの参加促進</li>
              <li>地域イベントの活性化</li>
            </ul>
          </div>
          <div className="bg-gray-50 rounded-xl p-8">
            <TrendingUp className="w-12 h-12 text-[#00796b] mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">新しい価値創造</h3>
            <ul className="space-y-2 text-gray-600">
              <li>化粧品製造への挑戦</li>
              <li>蒸留体験の提供</li>
              <li>メディアを通じた発信</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}