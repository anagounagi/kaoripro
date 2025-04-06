import { Leaf } from 'lucide-react';

export function ProjectBackground() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">活動の背景と目的</h2>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <Leaf className="w-8 h-8 text-[#00796b]" />
              <h3 className="text-2xl font-semibold text-[#00796b]">プロジェクトの始まり</h3>
            </div>
            
            <div className="space-y-6 text-gray-600">
              <p>
                小田原市久野地区にて、耕作放棄地となっていた農園の活性化を目的に、
                農園管理を引き受けることからプロジェクトは始まりました。
              </p>
              
              <div className="bg-white rounded-lg p-6">
                <h4 className="text-xl font-semibold text-[#00796b] mb-4">主な目的</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#00796b] font-bold">•</span>
                    <span>地域資源の最大限の活用による地元コミュニティの活性化</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00796b] font-bold">•</span>
                    <span>持続可能な農業の実現と環境保全の両立</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#00796b] font-bold">•</span>
                    <span>慣行農業から無農薬・有機農法へのシフトによる高品質な農作物の生産</span>
                  </li>
                </ul>
              </div>
              
              <p>
                このプロジェクトを通じて、農業の新しい可能性を探りながら、
                地域の方々と共に持続可能な未来を築くことを目指しました。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}