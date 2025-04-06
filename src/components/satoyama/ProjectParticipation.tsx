import { Mail, Phone, Calendar } from 'lucide-react';

export function ProjectParticipation() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">参加してみませんか？</h2>
        <div className="max-w-3xl mx-auto bg-gray-50 rounded-xl p-8">
          <p className="text-gray-600 mb-8 text-center">
            みかん育苗プロジェクトでは、随時ボランティアを募集しています。
            農業経験の有無は問いません。一緒に地域の未来を育てていきましょう。
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-[#00796b] mb-4">活動内容</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 土地の整備作業</li>
                <li>• みかんの栽培管理</li>
                <li>• 収穫作業</li>
                <li>• イベント運営補助</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#00796b] mb-4">お問い合わせ</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#00796b]" />
                  <a href="mailto:info@aof-aroma.com" className="text-gray-600 hover:text-[#00796b]">
                    info@aof-aroma.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#00796b]" />
                  <a href="tel:042-670-7077" className="text-gray-600 hover:text-[#00796b]">
                    042-670-7077
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-[#00796b]" />
                  <span className="text-gray-600">活動日: 毎週土曜・日曜</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}