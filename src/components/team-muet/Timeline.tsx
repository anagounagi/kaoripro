export function TeamMuetTimeline() {
  return (
    <section className="py-20 bg-[#1a472a] text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-light mb-12 text-center">今までのチームムエットの軌跡</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20"></div>
          <div className="relative z-10 flex flex-col items-center space-y-8">
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p>チームムエットシーズン1創期<br />(5回限定企画)<br />2022年1月〜6月</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4 text-center">
              <p>チームムエットシーズン2<br />(サブスクリプション先行)<br />2023年11月〜現在</p>
            </div>
          </div>
        </div>
        <p className="text-center mt-8">毎月<br />新しい香りの企画を考えています。</p>
      </div>
    </section>
  );
}