import { Sprout, Heart, Users } from 'lucide-react';

export function SatoyamaProject() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">里山みかんプロジェクト</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-64">
              <img
                src="https://kaori.aof-aroma.com/images/PICT0005.jpg"
                alt="里山みかんプロジェクト"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">耕作放棄地の再生</h3>
                <p>持続可能な農業を目指して</p>
              </div>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center text-center">
                  <Sprout className="w-12 h-12 text-[#00796b] mb-4" />
                  <h4 className="font-semibold text-[#00796b] mb-2">無農薬栽培</h4>
                  <p className="text-gray-600">環境に優しい農法の実践</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Users className="w-12 h-12 text-[#00796b] mb-4" />
                  <h4 className="font-semibold text-[#00796b] mb-2">地域連携</h4>
                  <p className="text-gray-600">地域コミュニティとの協働</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Heart className="w-12 h-12 text-[#00796b] mb-4" />
                  <h4 className="font-semibold text-[#00796b] mb-2">社会貢献</h4>
                  <p className="text-gray-600">持続可能な農業モデルの確立</p>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="/satoyama-project"
                  className="inline-block bg-[#00796b] text-white px-8 py-3 rounded-full hover:bg-[#004d40] transition-colors"
                >
                  プロジェクトの詳細を見る
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}