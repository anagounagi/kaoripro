/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_cjmqIkwe.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CG8Pv1qp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { Calendar, Video, Users } from 'lucide-react';
export { renderers } from '../renderers.mjs';

function TeamMuetHero() {
  return /* @__PURE__ */ jsxs("header", { className: "relative h-[60vh] bg-cover bg-center", style: {
    backgroundImage: 'url("https://images.unsplash.com/photo-1612160808975-ecb94e6e517b?auto=format&fit=crop&q=80&w=1920")'
  }, children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/40" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl text-white font-extralight tracking-wider mb-2", children: [
        "team",
        /* @__PURE__ */ jsx("br", {}),
        "mouillette"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-white/90 text-sm tracking-wider", children: "チームムエット 〜嗅覚への挑戦〜" })
    ] })
  ] });
}

function TeamMuetAbout() {
  return /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl text-[#1a472a] font-light mb-4", children: "チームムエットとは" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl text-[#1a472a] font-light mb-4", children: "嗅覚への挑戦" }),
      /* @__PURE__ */ jsx("p", { className: "text-[#1a472a]/80 leading-relaxed max-w-2xl mx-auto", children: "毎月1コ香りの実験にチャレンジしています" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl text-[#1a472a] font-light mb-4", children: "とにかく嗅ぐ。" }),
        /* @__PURE__ */ jsx("p", { className: "text-[#1a472a]/80 leading-relaxed", children: "香りは答えが一つではありません。心の状態やイメージによって感じ方が変わります。 たくさん嗅いで想像し、共有するのがチームムエットの基本姿勢です。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-[#1a472a] text-white p-8 rounded-lg", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-light mb-4", children: "チームムエットは正しさを求めない" }),
        /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "私たちの嗅覚はとても繊細で、同じ香りでも人やタイミングによって感じ方は違うもの。 そこに正解や間違いはありません。" })
      ] })
    ] })
  ] }) });
}

function TeamMuetFeatures() {
  const features = [
    {
      icon: /* @__PURE__ */ jsx(Calendar, { className: "w-6 h-6" }),
      title: "月末",
      description: "レポート共有や短いミーティングを実施"
    },
    {
      icon: /* @__PURE__ */ jsx(Video, { className: "w-6 h-6" }),
      title: "1日zoom開催",
      description: "オンラインでの香りチェックや勉強会を実施"
    },
    {
      icon: /* @__PURE__ */ jsx(Users, { className: "w-6 h-6" }),
      title: "リアル参加",
      description: "月に一度のワークショップで実際に香りを体験"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl text-[#1a472a] font-light mb-8 text-center", children: "チームムエットはサブスクリプションです" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-lg text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1a472a]/10 mb-4", children: feature.icon }),
      /* @__PURE__ */ jsx("h3", { className: "text-lg text-[#1a472a] font-light mb-2", children: feature.title }),
      /* @__PURE__ */ jsx("p", { className: "text-[#1a472a]/80 text-sm", children: feature.description })
    ] }, index)) })
  ] }) });
}

function TeamMuetSubscription() {
  return /* @__PURE__ */ jsx("section", { className: "py-10", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-[#1a472a] rounded-lg p-12 text-center text-white", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-light mb-4", children: "チームムエット 月1500円" }),
    /* @__PURE__ */ jsx("button", { className: "bg-white text-[#1a472a] px-8 py-3 rounded-full text-sm hover:bg-[#e8f3ef] transition-colors", children: "サブスクライブはこちらから" })
  ] }) }) });
}

function TeamMuetTimeline() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#1a472a] text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl font-light mb-12 text-center", children: "今までのチームムエットの軌跡" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white/20" }),
      /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col items-center space-y-8", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-white/10 rounded-lg p-4 text-center", children: /* @__PURE__ */ jsxs("p", { children: [
          "チームムエットシーズン1創期",
          /* @__PURE__ */ jsx("br", {}),
          "(5回限定企画)",
          /* @__PURE__ */ jsx("br", {}),
          "2022年1月〜6月"
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "bg-white/10 rounded-lg p-4 text-center", children: /* @__PURE__ */ jsxs("p", { children: [
          "チームムエットシーズン2",
          /* @__PURE__ */ jsx("br", {}),
          "(サブスクリプション先行)",
          /* @__PURE__ */ jsx("br", {}),
          "2023年11月〜現在"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-center mt-8", children: [
      "毎月",
      /* @__PURE__ */ jsx("br", {}),
      "新しい香りの企画を考えています。"
    ] })
  ] }) });
}

function TeamMuetSeasonReview() {
  return /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl text-[#1a472a] font-light mb-8", children: "今までに行ってきたチームムエット" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-16", children: [
      /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=800",
          alt: "Perfume expert",
          className: "rounded-lg mb-4"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[#1a472a]/80 mb-6", children: "2022年のシーズン1は6回のおためし限定企画で、毎月のテーマをこのようにしました。" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-[#1a472a]", children: [
          /* @__PURE__ */ jsx("p", { children: "1月　ハーブ" }),
          /* @__PURE__ */ jsx("p", { children: "2月　シトラス" }),
          /* @__PURE__ */ jsx("p", { children: "3月　カレー（スパイス）" }),
          /* @__PURE__ */ jsx("p", { children: "4月　フローラル" }),
          /* @__PURE__ */ jsx("p", { children: "5月　森林" }),
          /* @__PURE__ */ jsx("p", { children: "6月　エディブル" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 text-[#1a472a]/80", children: "毎回15〜20程度のムエットに香りをつけてお送りしました。" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl text-[#1a472a] font-light mb-8", children: "チームムエットシーズン2" }),
      /* @__PURE__ */ jsxs("p", { className: "text-[#1a472a]/80 mb-6", children: [
        "2023年から再始動したシーズン2は現在も継続しています。",
        /* @__PURE__ */ jsx("br", {}),
        "いままでこんな香りで行っています。"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-[#1a472a]", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold mb-4", children: "2023年" }),
          /* @__PURE__ */ jsx("p", { children: "A. グリーンバイン (Piper nigrum)" }),
          /* @__PURE__ */ jsx("p", { children: "B. 月桂の枝 (Thujopsis dolabrata)" }),
          /* @__PURE__ */ jsx("p", { children: "C. サリチル酸メチル (Iris germanica)" }),
          /* @__PURE__ */ jsx("p", { children: "D. ラベンダー40/42 (Lavandula officinalis)" }),
          /* @__PURE__ */ jsx("p", { children: "E. ブラックペパー (Piper nigrum)" }),
          /* @__PURE__ */ jsx("p", { children: "F. キンカン (Citrus japonica)" }),
          /* @__PURE__ */ jsx("p", { children: "G. cis-3-hexenl Acetate" }),
          /* @__PURE__ */ jsx("p", { children: "H. Rose P" }),
          /* @__PURE__ */ jsx("p", { children: "I. Iso E" }),
          /* @__PURE__ */ jsx("p", { children: "J. アイリスABS (Iris germanica)" })
        ] }),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
            alt: "Perfume bottles",
            className: "rounded-lg"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-[#1a472a]", children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold mb-4", children: "2024年" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx("p", { children: "1月 ジャスミン" }),
          /* @__PURE__ */ jsx("p", { children: "2月 ラベンダー祭り" }),
          /* @__PURE__ */ jsx("p", { children: "3月 ウッディ" }),
          /* @__PURE__ */ jsx("p", { children: "4月 b6シナモンバニラスパイシング" }),
          /* @__PURE__ */ jsx("p", { children: "5月 α/β精油香りの祭り" }),
          /* @__PURE__ */ jsx("p", { children: "6月 ローズ祭り" }),
          /* @__PURE__ */ jsx("p", { children: "7月 エッセンシャルオイル" }),
          /* @__PURE__ */ jsx("p", { children: "8月 無限のあそび" }),
          /* @__PURE__ */ jsx("p", { children: "9月 スパイシー" }),
          /* @__PURE__ */ jsx("p", { children: "10月 アイリスとあそび" }),
          /* @__PURE__ */ jsx("p", { children: "11月 香りとことば" }),
          /* @__PURE__ */ jsx("p", { children: "12月 未定" })
        ] })
      ] })
    ] })
  ] }) });
}

const $$TeamMuet = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u30C1\u30FC\u30E0\u30E0\u30A8\u30C3\u30C8 | Air Of Fragrance", "description": "\u30C1\u30FC\u30E0\u30E0\u30A8\u30C3\u30C8\u306F\u3001\u9999\u308A\u3092\u901A\u3058\u3066\u65B0\u3057\u3044\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u30B3\u30DF\u30E5\u30CB\u30C6\u30A3\u3067\u3059\u3002" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "isDetailPage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "TeamMuetHero", TeamMuetHero, {})} ${renderComponent($$result2, "TeamMuetAbout", TeamMuetAbout, {})} ${renderComponent($$result2, "TeamMuetFeatures", TeamMuetFeatures, {})} ${renderComponent($$result2, "TeamMuetSubscription", TeamMuetSubscription, {})} ${renderComponent($$result2, "TeamMuetTimeline", TeamMuetTimeline, {})} ${renderComponent($$result2, "TeamMuetSeasonReview", TeamMuetSeasonReview, {})} </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/project/src/pages/team-muet.astro", undefined);

const $$file = "/home/project/src/pages/team-muet.astro";
const $$url = "/team-muet";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TeamMuet,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
