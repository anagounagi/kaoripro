export function TeamMuetSeasonReview() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl text-[#1a472a] font-light mb-8">今までに行ってきたチームムエット</h2>
        
        {/* Season 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800" 
              alt="Perfume expert"
              className="rounded-lg mb-4"
            />
          </div>
          <div>
            <p className="text-[#1a472a]/80 mb-6">
              2022年のシーズン1は6回のおためし限定企画で、毎月のテーマをこのようにしました。
            </p>
            <div className="space-y-2 text-[#1a472a]">
              <p>1月　ハーブ</p>
              <p>2月　シトラス</p>
              <p>3月　カレー（スパイス）</p>
              <p>4月　フローラル</p>
              <p>5月　森林</p>
              <p>6月　エディブル</p>
            </div>
            <p className="mt-6 text-[#1a472a]/80">
              毎回15〜20程度のムエットに香りをつけてお送りしました。
            </p>
          </div>
        </div>

        {/* Season 2 */}
        <div>
          <h3 className="text-2xl text-[#1a472a] font-light mb-8">チームムエットシーズン2</h3>
          <p className="text-[#1a472a]/80 mb-6">
            2023年から再始動したシーズン2は現在も継続しています。<br />
            いままでこんな香りで行っています。
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-2 text-[#1a472a]">
              <p className="font-bold mb-4">2023年</p>
              <p>A. グリーンバイン (Piper nigrum)</p>
              <p>B. 月桂の枝 (Thujopsis dolabrata)</p>
              <p>C. サリチル酸メチル (Iris germanica)</p>
              <p>D. ラベンダー40/42 (Lavandula officinalis)</p>
              <p>E. ブラックペパー (Piper nigrum)</p>
              <p>F. キンカン (Citrus japonica)</p>
              <p>G. cis-3-hexenl Acetate</p>
              <p>H. Rose P</p>
              <p>I. Iso E</p>
              <p>J. アイリスABS (Iris germanica)</p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800" 
                alt="Perfume bottles"
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-2 text-[#1a472a]">
            <p className="font-bold mb-4">2024年</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p>1月 ジャスミン</p>
              <p>2月 ラベンダー祭り</p>
              <p>3月 ウッディ</p>
              <p>4月 b6シナモンバニラスパイシング</p>
              <p>5月 α/β精油香りの祭り</p>
              <p>6月 ローズ祭り</p>
              <p>7月 エッセンシャルオイル</p>
              <p>8月 無限のあそび</p>
              <p>9月 スパイシー</p>
              <p>10月 アイリスとあそび</p>
              <p>11月 香りとことば</p>
              <p>12月 未定</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}