/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_cjmqIkwe.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CG8Pv1qp.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ArrowRight, Leaf, Calendar, Target, Users, Sprout, Beaker, Newspaper, ChevronLeft, ChevronRight, Heart, TrendingUp } from 'lucide-react';
import { useRef, useState } from 'react';
export { renderers } from '../renderers.mjs';

function ProjectHero() {
  return /* @__PURE__ */ jsxs("section", { className: "relative h-[60vh] min-h-[500px] flex items-center justify-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://kaori.aof-aroma.com/images/PICT0005.jpg",
          alt: "みかん畑の風景",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/50" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative text-center text-white px-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold mb-6", children: "里山みかんプロジェクト" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 max-w-2xl mx-auto", children: "耕作放棄地を再生し、持続可能な農業を実践。 新たな付加価値の創成・地域の力で未来へつなぐ" }),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "#overview",
          className: "inline-flex items-center gap-2 bg-white text-[#00796b] px-8 py-3 rounded-full hover:bg-[#00796b] hover:text-white transition-colors",
          children: [
            "プロジェクトについて",
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" })
          ]
        }
      )
    ] })
  ] });
}

function ProjectBackground() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "活動の背景と目的" }),
    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8 shadow-lg", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
        /* @__PURE__ */ jsx(Leaf, { className: "w-8 h-8 text-[#00796b]" }),
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#00796b]", children: "プロジェクトの始まり" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-gray-600", children: [
        /* @__PURE__ */ jsx("p", { children: "小田原市久野地区にて、耕作放棄地となっていた農園の活性化を目的に、 農園管理を引き受けることからプロジェクトは始まりました。" }),
        /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6", children: [
          /* @__PURE__ */ jsx("h4", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "主な目的" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#00796b] font-bold", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "地域資源の最大限の活用による地元コミュニティの活性化" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#00796b] font-bold", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "持続可能な農業の実現と環境保全の両立" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[#00796b] font-bold", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "慣行農業から無農薬・有機農法へのシフトによる高品質な農作物の生産" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { children: "このプロジェクトを通じて、農業の新しい可能性を探りながら、 地域の方々と共に持続可能な未来を築くことを目指しました。" })
      ] })
    ] })
  ] }) }) });
}

function ProjectOverview() {
  return /* @__PURE__ */ jsx("section", { id: "overview", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "プロジェクト概要" }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx(Calendar, { className: "w-12 h-12 text-[#00796b] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "活動期間" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "2014年まで" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx(Target, { className: "w-12 h-12 text-[#00796b] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "目的" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "耕作放棄地の再生と地域活性化" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-12 h-12 text-[#00796b] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "活動場所" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "小田原市久野地区" })
      ] })
    ] })
  ] }) });
}

function ProjectActivities() {
  const activities = [
    {
      icon: Sprout,
      title: "無農薬・有機農法",
      description: "土壌改良や自然の生態系を活かした農法の実践",
      image: "https://kaori.aof-aroma.com/images/09.12.06_ia-731x1024.jpg"
    },
    {
      icon: Users,
      title: "農業体験イベント",
      description: "みかん狩り・収穫作業、花摘み取り、摘果作業など",
      image: "https://kaori.aof-aroma.com/images/IMG_4596-1024x768.jpg"
    },
    {
      icon: Beaker,
      title: "蒸留体験",
      description: "みかんの花を使用した蒸留体験の提供",
      image: "https://kaori.aof-aroma.com/images/R0013566.jpg"
    },
    {
      icon: Newspaper,
      title: "メディア展開",
      description: "NHK取材・出演による活動発信・青山ポップアップ",
      image: "https://kaori.aof-aroma.com/images/0522-21.jpg"
    }
  ];
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "主な活動" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: activities.map((activity, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl shadow-lg overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "relative h-48", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: activity.image,
          alt: activity.title,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx(activity.icon, { className: "w-6 h-6 text-[#00796b]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b]", children: activity.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: activity.description })
      ] })
    ] }, index)) })
  ] }) });
}

const galleryImages = [
  {
    url: "https://kaori.aof-aroma.com/images/09.12.06_ia-731x1024.jpg",
    caption: "無農薬栽培の様子"
  },
  {
    url: "https://kaori.aof-aroma.com/images/IMG_4596-1024x768.jpg",
    caption: "収穫作業"
  },
  {
    url: "https://kaori.aof-aroma.com/images/R0013566.jpg",
    caption: "蒸留体験の様子"
  },
  {
    url: "https://kaori.aof-aroma.com/images/0522-21.jpg",
    caption: "メディア取材"
  },
  {
    url: "https://kaori.aof-aroma.com/images/NEC_0589.jpg",
    caption: "収穫"
  },
  {
    url: "https://kaori.aof-aroma.com/images/P1020590-300x225.jpg",
    caption: "出展"
  },
  {
    url: "https://kaori.aof-aroma.com/images/mikanen-neko.jpg",
    caption: "ミカン園に迷い込んだ子猫"
  },
  {
    url: "https://kaori.aof-aroma.com/images/RIMG0412.jpg",
    caption: "草刈り"
  },
  {
    url: "https://kaori.aof-aroma.com/images/DSCN5532.jpg",
    caption: "体験"
  },
  {
    url: "https://kaori.aof-aroma.com/images/DSCN1520.jpg",
    caption: "花摘み"
  }
];
function ProjectGallery() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 300;
      const newScrollLeft = direction === "left" ? current.scrollLeft - scrollAmount : current.scrollLeft + scrollAmount;
      current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth"
      });
      setTimeout(() => {
        if (current) {
          setShowLeftArrow(current.scrollLeft > 0);
          setShowRightArrow(
            current.scrollLeft < current.scrollWidth - current.clientWidth - 10
          );
        }
      }, 300);
    }
  };
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "活動ギャラリー" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      showLeftArrow && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("left"),
          className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors",
          "aria-label": "Previous images",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6 text-[#00796b]" })
        }
      ),
      showRightArrow && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("right"),
          className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors",
          "aria-label": "Next images",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 text-[#00796b]" })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: scrollRef,
          className: "flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory",
          style: { scrollbarWidth: "none", msOverflowStyle: "none" },
          children: galleryImages.map((image, index) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "min-w-[300px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 snap-start",
              children: /* @__PURE__ */ jsxs("div", { className: "relative h-48", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: image.url,
                    alt: image.caption,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" }),
                /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: /* @__PURE__ */ jsx("p", { className: "text-white text-sm", children: image.caption }) })
              ] })
            },
            index
          ))
        }
      )
    ] })
  ] }) });
}

function ProjectImpact() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "プロジェクトの成果" }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
        /* @__PURE__ */ jsx(Leaf, { className: "w-12 h-12 text-[#00796b] mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "農業の持続可能性" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-600", children: [
          /* @__PURE__ */ jsx("li", { children: "無農薬・有機農法の確立" }),
          /* @__PURE__ */ jsx("li", { children: "環境負荷の軽減" }),
          /* @__PURE__ */ jsx("li", { children: "高品質な農産物の生産" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
        /* @__PURE__ */ jsx(Heart, { className: "w-12 h-12 text-[#00796b] mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "地域活性化" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-600", children: [
          /* @__PURE__ */ jsx("li", { children: "コミュニティの結束強化" }),
          /* @__PURE__ */ jsx("li", { children: "ボランティアの参加促進" }),
          /* @__PURE__ */ jsx("li", { children: "地域イベントの活性化" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8", children: [
        /* @__PURE__ */ jsx(TrendingUp, { className: "w-12 h-12 text-[#00796b] mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "新しい価値創造" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-600", children: [
          /* @__PURE__ */ jsx("li", { children: "化粧品製造への挑戦" }),
          /* @__PURE__ */ jsx("li", { children: "蒸留体験の提供" }),
          /* @__PURE__ */ jsx("li", { children: "メディアを通じた発信" })
        ] })
      ] })
    ] })
  ] }) });
}

function ProjectConclusion() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-xl p-8 shadow-lg", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-[#00796b] mb-6 text-center", children: "感謝の言葉" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-6 text-gray-600", children: [
      /* @__PURE__ */ jsx("p", { children: "2014年、農園の売却が決定し、永農されることとなりました。それに伴い、活動を終了する運びとなりましたが、これまで活動を支えてくださったすべての皆さまに、心より感謝申し上げます。" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-[#00796b] mt-1" }),
          /* @__PURE__ */ jsx("span", { children: "ボランティアの皆様の惜しみないご協力" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-[#00796b] mt-1" }),
          /* @__PURE__ */ jsx("span", { children: "専門家の皆様からの貴重な知見とアドバイス" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-[#00796b] mt-1" }),
          /* @__PURE__ */ jsx("span", { children: "企業の皆様からのCSR活動を通じたサポート" })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-[#00796b] mt-1" }),
          /* @__PURE__ */ jsx("span", { children: "地域の飲食店の皆様からのご支援" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-6", children: "この活動を通じて得た経験と学びを活かし、これからも地域と環境に根ざした持続可能な活動を続けていきたいと考えています。活動中は、イノシシが出没したり、葛との闘いがあったり、トイレの問題に苦労したりと、多くの困難にも直面しました。しかし、そのような困難を乗り越える中で得た知識や知恵は、これからの活動にとって大きな財産となっています。" })
    ] })
  ] }) }) }) });
}

const $$SatoyamaProject = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u91CC\u5C71\u307F\u304B\u3093\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8 | Air Of Fragrance", "description": "\u8015\u4F5C\u653E\u68C4\u5730\u3092\u518D\u751F\u3057\u3001\u6301\u7D9A\u53EF\u80FD\u306A\u8FB2\u696D\u3092\u5B9F\u8DF5\u3002\u65B0\u305F\u306A\u4ED8\u52A0\u4FA1\u5024\u306E\u5275\u6210\u30FB\u5730\u57DF\u306E\u529B\u3067\u672A\u6765\u3078\u3064\u306A\u3050\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3002" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "isDetailPage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "ProjectHero", ProjectHero, {})} ${renderComponent($$result2, "ProjectBackground", ProjectBackground, {})} ${renderComponent($$result2, "ProjectOverview", ProjectOverview, {})} ${renderComponent($$result2, "ProjectActivities", ProjectActivities, {})} ${renderComponent($$result2, "ProjectGallery", ProjectGallery, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/project/src/components/satoyama/ProjectGallery", "client:component-export": "ProjectGallery" })} ${renderComponent($$result2, "ProjectImpact", ProjectImpact, {})} ${renderComponent($$result2, "ProjectConclusion", ProjectConclusion, {})} </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/project/src/pages/satoyama-project.astro", undefined);

const $$file = "/home/project/src/pages/satoyama-project.astro";
const $$url = "/satoyama-project";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$SatoyamaProject,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
