/* empty css                                   */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../../chunks/astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../../chunks/Layout_cjmqIkwe.mjs';
import { H as Header, F as Footer } from '../../chunks/Footer_CG8Pv1qp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Star, Briefcase, Book, Award, Activity } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const artistsData = {
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
      "アンバー（琥珀）の研究"
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

function ArtistHeader({ artist }) {
  return /* @__PURE__ */ jsxs("div", { className: "relative h-96", children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: artist.image,
        alt: artist.name,
        className: "w-full h-full object-contain"
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-8 text-white", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-2", children: artist.name }),
      /* @__PURE__ */ jsx("p", { className: "text-xl", children: artist.title })
    ] })
  ] });
}

function ArtistProfile({ artist }) {
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(Star, { className: "w-8 h-8 text-[#00796b]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#00796b]", children: "プロフィール" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: artist.profile })
  ] });
}

function ArtistSpecialties({ specialties }) {
  if (!specialties?.length) return null;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(Briefcase, { className: "w-8 h-8 text-[#00796b]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#00796b]", children: "専門分野" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: specialties.map((specialty, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#00796b]", children: "•" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: specialty })
    ] }, index)) })
  ] });
}

function ArtistPublications({ publications }) {
  if (!publications?.length) return null;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(Book, { className: "w-8 h-8 text-[#00796b]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#00796b]", children: "著書" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: publications.map((publication, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#00796b]", children: "•" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: publication })
    ] }, index)) })
  ] });
}

function ArtistServices({ services }) {
  if (!services?.length) return null;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(Briefcase, { className: "w-8 h-8 text-[#00796b]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#00796b]", children: "提供サービス" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: services.map((service, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#00796b]", children: "•" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: service })
    ] }, index)) })
  ] });
}

function ArtistAchievements({ achievements }) {
  if (!achievements?.length) return null;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-[#00796b]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#00796b]", children: "主要な実績" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: achievements.map((achievement, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#00796b]", children: "•" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: achievement })
    ] }, index)) })
  ] });
}

function ArtistOtherActivities({ otherActivities }) {
  if (!otherActivities?.length) return null;
  return /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
      /* @__PURE__ */ jsx(Activity, { className: "w-8 h-8 text-[#00796b]" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#00796b]", children: "その他の活動" })
    ] }),
    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: otherActivities.map((activity, index) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[#00796b]", children: "•" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: activity })
    ] }, index)) })
  ] });
}

const $$Astro = createAstro("https://kaori.aof-aroma.com");
function getStaticPaths() {
  return Object.keys(artistsData).map((id) => ({
    params: { id }
  }));
}
const $$id = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const artist = artistsData[Number(id)];
  if (!artist) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${artist.name} | Air Of Fragrance`, "description": artist.profile.slice(0, 160) }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "isDetailPage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-6"> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> ${renderComponent($$result2, "ArtistHeader", ArtistHeader, { "artist": artist })} <div class="p-8 space-y-12"> ${renderComponent($$result2, "ArtistProfile", ArtistProfile, { "artist": artist })} ${renderComponent($$result2, "ArtistSpecialties", ArtistSpecialties, { "specialties": artist.specialties })} ${renderComponent($$result2, "ArtistPublications", ArtistPublications, { "publications": artist.publications })} ${renderComponent($$result2, "ArtistServices", ArtistServices, { "services": artist.services })} ${renderComponent($$result2, "ArtistAchievements", ArtistAchievements, { "achievements": artist.achievements })} ${renderComponent($$result2, "ArtistOtherActivities", ArtistOtherActivities, { "otherActivities": artist.otherActivities })} </div> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/project/src/pages/artists/[id].astro", undefined);

const $$file = "/home/project/src/pages/artists/[id].astro";
const $$url = "/artists/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
