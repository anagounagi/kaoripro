import { Heart, Utensils, Users, Calendar, MapPin, Mail, ExternalLink } from 'lucide-react'

export function KidsSupport() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">子ども食堂支援活動</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 shadow-lg">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#00796b] mb-4 flex items-center gap-2">
                  <Heart className="w-6 h-6" />
                  子ども食堂ウェーブ - 活動概要
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  2022年より協力を開始し、地域のオアシスとして、誰もが安心して来られる場所を提供しています。
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-6">
                  <Utensils className="w-8 h-8 text-[#00796b] mb-3" />
                  <h4 className="font-semibold text-[#00796b] mb-2">活動内容</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 会食および手作りお弁当配布</li>
                    <li>• 子ども一人でも利用可能</li>
                    <li>• 保護者の相談スペース提供</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Users className="w-8 h-8 text-[#00796b] mb-3" />
                  <h4 className="font-semibold text-[#00796b] mb-2">参加費</h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• 子ども（高校生まで）：100円</li>
                    <li>• 大人：300円</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6">
                  <Calendar className="w-8 h-8 text-[#00796b] mb-3" />
                  <h4 className="font-semibold text-[#00796b] mb-2">開催情報</h4>
                  <p className="text-gray-600">月2回（不定期）<br />17:00～19:00</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-[#00796b] mt-1" />
                  <div>
                    <h4 className="font-semibold text-[#00796b] mb-1">開催場所</h4>
                    <p className="text-gray-600">
                      弦巻区民センター 3階 料理講習室<br />
                      世田谷区弦巻1丁目26-11
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://www.instagram.com/kodomoshokudo_wave/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00796b] hover:text-[#004d40]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Instagram
                  </a>
                  <a
                    href="http://www.ngo-npo.org/wave/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00796b] hover:text-[#004d40]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    公式サイト
                  </a>
                  <a
                    href="https://setaberu.com/recipients/4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00796b] hover:text-[#004d40]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    子ども食堂ウェーブ 世田谷区社会福祉協議会
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}