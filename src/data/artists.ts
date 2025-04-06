export interface Artist {
  id: number;
  name: string;
  title: string;
  image: string;
  profile: string;
  specialties?: string[];
  works?: string[];
  publications?: string[];
  services?: string[];
  courses?: string[];
  achievements?: string[];
  otherActivities?: string[];
}

export const artistsData: Record<number, Artist> = {
  1: {
    name: "山口 美帆　Miho Yamaguchi",
    title: "フレグランスアーティスト",
    image: "https://kaori.aof-aroma.com/images/MIHO.jpg",
    profile: "1995年にきゃら香房にて香技を学び、翌年からフレグランスジャーナルにて執筆活動を開始。1998年にポーランド・ブロツワフにて香料の仕事に従事した後、1999年にAir Of Fragranceを設立し、精油のWEB販売を開始。2001年有限会社桜ファーイーストを設立し、香りの分野での活動を拡大しています。",
    specialties: [
      "天然香料の研究と開発",
      "エッセンシャルオイルの調合",
      "アロマティック素材の選定",
      "和の香りインセンス制作",
      "アンバー（琥珀）の研究",
    ],
    works: [
      "高品質な天然香料の選定",
      "桜の香りのブレンド",
      "ネロリコスメ製品開発",
      "ヒマラヤ原産の希少な植物素材を使用した作品づくり"
    ],
    publications: [
      "手づくり石けん＆コスメ（パッチワーク通信社）",
      "香りのレシピ（パッチワーク通信社）",
      "手づくりクリスマスBOOK（パッチワーク通信社）"
    ]
  },
  2: {
    name: "川上 智子　Tomoko Kawakami",
    title: "パフュームデザイナー & 調香のスペシャリスト",
    image: "https://kaori.aof-aroma.com/images/b58ce1c419c22665ea32040c9738e9c4.jpg",
    profile: "きゃら香房株式会社代表取締役。10代から調香について学び、1983年にきゃら香房を設立。香りの専門家として、調香技術とアロマテラピーを融合させた独自のアプローチを展開しています。",
    services: [
      "調香教室の企画運営",
      "香りにまつわる商品開発",
      "博覧会や博物館などの空間演出",
      "講演会・ワークショップの開催"
    ],
    courses: [
      "初級調香講座（香りの基礎）",
      "花の香り特別講座",
      "精油講座"
    ],
    achievements: [
      "愛・地球博 長久手日本館 Zone-3（2005年）",
      "サンメッセ香川オープニングイベント「イマジネーションシアター」（1994年）",
      "世界湖沼会議オープニング「地球は水の惑星」立体音と香りのシアター（1995年）",
      "エルメス「25Fouberg発売イベント／香りに溶ける」（1996年）",
      "資生堂香水 ZEN プレス発表イベント（2000年）"
    ],
    otherActivities: [
      "環境庁による「香り風景100選」の発案・検討委員",
      "アロマテラピーと東洋医学の理論を融合した診断システム「Force Five」の考案"
    ]
  }
};