export function TeamMuetAbout() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl text-[#1a472a] font-light mb-4">チームムエットとは</h2>
          <h3 className="text-xl text-[#1a472a] font-light mb-4">嗅覚への挑戦</h3>
          <p className="text-[#1a472a]/80 leading-relaxed max-w-2xl mx-auto">
            毎月1コ香りの実験にチャレンジしています
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg">
            <h3 className="text-xl text-[#1a472a] font-light mb-4">とにかく嗅ぐ。</h3>
            <p className="text-[#1a472a]/80 leading-relaxed">
              香りは答えが一つではありません。心の状態やイメージによって感じ方が変わります。
              たくさん嗅いで想像し、共有するのがチームムエットの基本姿勢です。
            </p>
          </div>
          <div className="bg-[#1a472a] text-white p-8 rounded-lg">
            <h3 className="text-xl font-light mb-4">チームムエットは正しさを求めない</h3>
            <p className="text-white/90 leading-relaxed">
              私たちの嗅覚はとても繊細で、同じ香りでも人やタイミングによって感じ方は違うもの。
              そこに正解や間違いはありません。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}