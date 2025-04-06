import { Calendar, Target, Users } from 'lucide-react';

export function ProjectOverview() {
  return (
    <section id="overview" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#00796b] mb-12 text-center">プロジェクト概要</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Calendar className="w-12 h-12 text-[#00796b] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">活動期間</h3>
            <p className="text-gray-600">2014年まで</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Target className="w-12 h-12 text-[#00796b] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">目的</h3>
            <p className="text-gray-600">耕作放棄地の再生と地域活性化</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <Users className="w-12 h-12 text-[#00796b] mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#00796b] mb-4">活動場所</h3>
            <p className="text-gray-600">小田原市久野地区</p>
          </div>
        </div>
      </div>
    </section>
  );
}