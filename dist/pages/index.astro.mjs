/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_cjmqIkwe.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CG8Pv1qp.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { Sparkles, Wind, Heart, Beaker, Factory, Users, TreePine, GraduationCap, Lightbulb, ChevronLeft, ChevronRight, ArrowRight, Quote, Briefcase, FileText, MessageSquare } from 'lucide-react';
import { useRef, useState } from 'react';
import { A as ArtistGrid } from '../chunks/ArtistGrid_B40gEueH.mjs';
export { renderers } from '../renderers.mjs';

function About() {
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "香り総合デザイン" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center mb-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 leading-relaxed mb-8", children: "あなたが香りを身にまとう瞬間、生活の中で新しい扉が開かれます。 そこは、普段見過ごしていた美しさや喜びが満ち溢れる場所。" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 leading-relaxed", children: "香りは時に挑戦を促し、時に心を癒し、あなたに新たなインスピレーションをもたらします。 この香りを通じて、新しい自分を見つけ、視野を広げてみませんか？" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-12 h-12 text-[#00796b] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "品質と安全性" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "高品質で安全な香料を使用し、人々が安心して楽しめる香りを提供します。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx(Wind, { className: "w-12 h-12 text-[#00796b] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "創造性とイノベーション" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "独自の香りの創出や新しい香りの使用方法を通じて、競合他社との差別化を図ります。" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 rounded-xl p-8 text-center", children: [
        /* @__PURE__ */ jsx(Heart, { className: "w-12 h-12 text-[#00796b] mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-4", children: "サステナビリティ" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "環境に配慮した香料の選定や、持続可能な事業運営を心がけています。" })
      ] })
    ] })
  ] }) });
}

const services = [
  {
    icon: Beaker,
    title: "オリジナル香りデザイン開発",
    description: "香りのカスタマイズ開発、ブランドイメージに合わせた香りの創造など、幅広いニーズに対応します。",
    image: "https://kaori.aof-aroma.com/images/original.jpg"
  },
  {
    icon: Factory,
    title: "空間関連事業",
    description: "香りシステムの設置と管理、空間の香りデザインを通じて、快適な環境を創造します。",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  },
  {
    icon: Users,
    title: "香りイベント企画",
    description: "特別なイベントやキャンペーンのための香り選び、演出プランの作成と実施を行います。",
    image: "https://kaori.aof-aroma.com/images/photo-1505236858219-8359eb29e329.webp"
  },
  {
    icon: TreePine,
    title: "里山みかんプロジェクト",
    description: "農業放棄地を活用し、芳香植物を植えるプロジェクトを展開しています。",
    image: "https://kaori.aof-aroma.com/images/PICT0005.jpg",
    link: "/satoyama-project"
  },
  {
    icon: GraduationCap,
    title: "桜アロマティーク",
    description: "香りの基礎から調香技術まで、体系的に学べる専門的なスクールプログラムを提供します。",
    image: "https://kaori.aof-aroma.com/images/sakuraaromatique.jpg",
    link: "/school"
  },
  {
    icon: Lightbulb,
    title: "香りマーケティング",
    description: "ブランド価値向上のための香りを活用したマーケティング戦略をご提案します。",
    image: "https://kaori.aof-aroma.com/images/photo-1434030216411-0b793f4b4173.webp"
  }
];
function Services() {
  return /* @__PURE__ */ jsx("section", { id: "services", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "提供するサービス" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: services.map((service, index) => /* @__PURE__ */ jsxs("div", { className: "group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow", children: [
      /* @__PURE__ */ jsxs("div", { className: "aspect-w-16 aspect-h-9 relative", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: service.image,
            alt: service.title,
            className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300",
            loading: "lazy"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
          /* @__PURE__ */ jsx(service.icon, { className: "w-6 h-6 text-[#00796b]" }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b]", children: service.title })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: service.description }),
        service.link && /* @__PURE__ */ jsx(
          "a",
          {
            href: service.link,
            className: "text-[#00796b] hover:text-[#004d40] font-medium inline-flex items-center gap-2",
            children: "詳しく見る →"
          }
        )
      ] })
    ] }, index)) })
  ] }) });
}

const works = [
  {
    id: 1,
    title: "愛・地球博 長久手日本館",
    client: "Zone-3",
    description: "空間演出とアロマ設計",
    image: "https://kaori.aof-aroma.com/images/offi_ai_1.jpg",
    year: "2005"
  },
  {
    id: 2,
    title: "エルメス 25Fouberg 発売イベント",
    client: "エルメス",
    description: "イベントの映像にあわせて香りを漂わせる",
    image: "https://kaori.aof-aroma.com/images/en_1.jpg",
    year: ""
  },
  {
    id: 4,
    title: "ジャン・ポール・ゴルチェの世界展",
    client: "上野の森美術館",
    description: "ジャン・ポール・ゴルチェの世界の演出",
    image: "https://kaori.aof-aroma.com/images/ueno_1.jpg",
    year: ""
  },
  {
    id: 5,
    title: "寅さん記念館 香りの選出",
    client: "寅さん記念館",
    description: "だんごやの匂い　印刷所の匂い　マドンナの匂い",
    image: "https://kaori.aof-aroma.com/images/tora_kine_1.jpg",
    year: "2012"
  },
  {
    id: 6,
    title: "オオサンショウウオの匂い",
    client: "京都水族館",
    description: "京都水族館",
    image: "https://kaori.aof-aroma.com/images/kyoto_1.jpg",
    year: ""
  }
];
function Works() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
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
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "Works 実績" }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      showLeftArrow && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("left"),
          className: "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors",
          "aria-label": "Previous works",
          children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6 text-[#00796b]" })
        }
      ),
      showRightArrow && /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => scroll("right"),
          className: "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 rounded-full p-2 shadow-lg hover:bg-white transition-colors",
          "aria-label": "Next works",
          children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6 text-[#00796b]" })
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          ref: scrollRef,
          className: "flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory",
          style: { scrollbarWidth: "none", msOverflowStyle: "none" },
          children: works.map((work) => /* @__PURE__ */ jsxs(
            "div",
            {
              className: "min-w-[300px] md:min-w-[400px] bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 snap-start",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "relative h-48", children: [
                  /* @__PURE__ */ jsx(
                    "img",
                    {
                      src: work.image,
                      alt: work.title,
                      className: "w-full h-full object-cover",
                      loading: "lazy"
                    }
                  ),
                  work.year && /* @__PURE__ */ jsx("div", { className: "absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full", children: /* @__PURE__ */ jsx("span", { className: "text-[#00796b] font-medium", children: work.year }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-2", children: work.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-2", children: work.client }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-500", children: work.description })
                ] })
              ]
            },
            work.id
          ))
        }
      )
    ] })
  ] }) });
}

const specialContents = [
  {
    id: 1,
    title: "季節の蒸留会",
    image: "https://kaori.aof-aroma.com/images/season.jpg",
    description: "四季折々の植物から香りを抽出する特別なワークショップ"
  },
  {
    id: 2,
    title: "和の香り・塗香を作るクラス",
    image: "https://kaori.aof-aroma.com/images/wanokaori.jpg",
    description: "伝統的な日本の香りを学び、作る体験"
  },
  {
    id: 3,
    title: "チームムエット",
    image: "https://kaori.aof-aroma.com/images/team.jpg",
    description: "香りのオンラインサロン",
    link: "https://tm.aof-aroma.com"
  }
];
function SpecialContent() {
  const [hoveredId, setHoveredId] = useState(null);
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#1a237e] text-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold mb-12 text-center", children: "スペシャルコンテンツ" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: specialContents.map((content) => /* @__PURE__ */ jsx("div", { children: content.link ? /* @__PURE__ */ jsx(
      "a",
      {
        href: content.link,
        className: "block relative group overflow-hidden rounded-lg cursor-pointer transform transition-transform hover:scale-105",
        onMouseEnter: () => setHoveredId(content.id),
        onMouseLeave: () => setHoveredId(null),
        children: /* @__PURE__ */ jsxs("div", { className: "relative h-80", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: content.image,
              alt: content.title,
              width: 400,
              height: 320,
              className: `w-full h-full object-cover transition-transform duration-500 ${hoveredId === content.id ? "scale-110" : "scale-100"}`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: content.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-200 mb-4", children: content.description }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center text-white/90 group-hover:text-white transition-colors", children: [
              /* @__PURE__ */ jsx("span", { children: "詳しく見る" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] })
      }
    ) : /* @__PURE__ */ jsx(
      "div",
      {
        className: "relative group overflow-hidden rounded-lg",
        onMouseEnter: () => setHoveredId(content.id),
        onMouseLeave: () => setHoveredId(null),
        children: /* @__PURE__ */ jsxs("div", { className: "relative h-80", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: content.image,
              alt: content.title,
              width: 400,
              height: 320,
              className: `w-full h-full object-cover transition-transform duration-500 ${hoveredId === content.id ? "scale-110" : "scale-100"}`
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" }),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: content.title }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-200", children: content.description })
          ] })
        ] })
      }
    ) }, content.id)) })
  ] }) });
}

const workflowSteps = [
  {
    number: "01",
    title: "カウンセリング",
    description: "お客様のご要望やイメージをヒアリング"
  },
  {
    number: "02",
    title: "香りのデザイン",
    description: "コンセプトに基づいた香りの設計"
  },
  {
    number: "03",
    title: "サンプル作成",
    description: "試作品の製作とテスト"
  },
  {
    number: "04",
    title: "最終調整",
    description: "フィードバックを反映した調整"
  }
];
function Workflow() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 bg-[#e8eaf6]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#1a237e] mb-12 text-center", children: "ワークフロー" }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-8", children: workflowSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow", children: [
        /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-[#1a237e] mb-4", children: step.number }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#1a237e] mb-2", children: step.title }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: step.description })
      ] }),
      index < workflowSteps.length - 1 && /* @__PURE__ */ jsx("div", { className: "hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-8 h-8 text-[#1a237e]" }) })
    ] }, index)) })
  ] }) });
}

function Message() {
  return /* @__PURE__ */ jsxs("section", { className: "py-20 bg-[#1a237e] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "https://kaori.aof-aroma.com/images/PS166428.webp",
        alt: "Background",
        className: "w-full h-full object-cover opacity-20",
        width: 1920,
        height: 1080,
        loading: "lazy",
        decoding: "async",
        fetchpriority: "low"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Quote, { className: "w-16 h-16 mx-auto mb-8 opacity-50" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-8", children: "香りは、人々に幸福感を与え、自信を与え、また周りの人々を魅了する力があります" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl leading-relaxed mb-8", children: "Air Of Fragrance®の調香クラス「桜アロマティーク」で、自分だけの特別な香りを作りましょう。 香りの歴史や文化についても学び、香りについての深い知識を得ることができます。" }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/school",
          className: "inline-block bg-white text-[#1a237e] px-8 py-3 rounded-full hover:bg-opacity-90 transition-colors",
          children: "詳しく見る"
        }
      )
    ] }) })
  ] });
}

function LoadingSpinner() {
  return /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" });
}

function FormSuccess({ message }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-green-50 text-green-800 p-4 rounded-lg mb-6", children: /* @__PURE__ */ jsx("p", { children: message }) });
}

function FormError({ message }) {
  return /* @__PURE__ */ jsx("div", { className: "bg-red-50 text-red-800 p-4 rounded-lg mb-6", children: /* @__PURE__ */ jsx("p", { children: message }) });
}

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);
      const form = document.createElement("form");
      form.method = "POST";
      form.action = "https://docs.google.com/forms/d/e/1FAIpQLSdcd66zauwwcoNZ1kff8axr_mFGxRmCIJoq6FuhiNtpZhfoeQ/formResponse";
      form.target = "hidden_iframe";
      const entries = [
        ["entry.377367744", formData.get("entry.377367744")],
        ["entry.920564048", formData.get("entry.920564048")],
        ["entry.214829368", formData.get("entry.214829368")],
        ["entry.634896786", formData.get("entry.634896786")]
      ];
      entries.forEach(([name, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        input.value = value;
        form.appendChild(input);
      });
      iframe.name = "hidden_iframe";
      document.body.appendChild(form);
      form.submit();
      setTimeout(() => {
        document.body.removeChild(form);
        document.body.removeChild(iframe);
      }, 1e3);
      setSubmitStatus("success");
      e.currentTarget.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "お問い合わせ" }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto grid md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-8 rounded-xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-6", children: "お問い合わせ内容" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Briefcase, { className: "w-5 h-5 text-[#00796b]" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "OEM・香りの開発依頼" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-[#00796b]" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "香りの測定・分析依頼" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-[#00796b]" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "ブースの演出・空間デザイン" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 text-[#00796b]" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "講演・取材依頼" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 text-[#00796b]" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "その他の相談について" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-8 rounded-xl", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-6", children: "お問い合わせの流れ" }),
          /* @__PURE__ */ jsxs("ol", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-[#00796b] text-white rounded-full flex items-center justify-center", children: "1" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "フォームに必要事項を入力" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-[#00796b] text-white rounded-full flex items-center justify-center", children: "2" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "担当者が内容を確認" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-[#00796b] text-white rounded-full flex items-center justify-center", children: "3" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: "2営業日以内にご連絡" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-8 rounded-xl", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-6", children: "お問い合わせフォーム" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-6", children: "以下のフォームに必要事項をご記入ください。内容を確認後、担当者よりご連絡させていただきます。" }),
        submitStatus === "success" && /* @__PURE__ */ jsx(FormSuccess, { message: "お問い合わせを受け付けました。" }),
        submitStatus === "error" && /* @__PURE__ */ jsx(FormError, { message: "送信に失敗しました。時間をおいて再度お試しください。" }),
        /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "type", className: "block text-sm font-medium text-gray-700 mb-1", children: [
              "お問い合わせ種別 ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsxs(
              "select",
              {
                id: "type",
                name: "entry.377367744",
                required: true,
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "選択してください" }),
                  /* @__PURE__ */ jsx("option", { value: "OEM・香りの開発依頼", children: "OEM・香りの開発依頼" }),
                  /* @__PURE__ */ jsx("option", { value: "香りの測定・分析依頼", children: "香りの測定・分析依頼" }),
                  /* @__PURE__ */ jsx("option", { value: "ブースの演出・空間デザイン", children: "ブースの演出・空間デザイン" }),
                  /* @__PURE__ */ jsx("option", { value: "講演・取材依頼", children: "講演・取材依頼" }),
                  /* @__PURE__ */ jsx("option", { value: "その他の相談について", children: "その他の相談について" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "name", className: "block text-sm font-medium text-gray-700 mb-1", children: [
              "お名前 ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                id: "name",
                name: "entry.920564048",
                required: true,
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "phone", className: "block text-sm font-medium text-gray-700 mb-1", children: [
              "電話番号 ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "tel",
                id: "phone",
                name: "entry.214829368",
                required: true,
                pattern: "[0-9\\-]*",
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsxs("label", { htmlFor: "message", className: "block text-sm font-medium text-gray-700 mb-1", children: [
              "お問い合わせ内容 ",
              /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" })
            ] }),
            /* @__PURE__ */ jsx(
              "textarea",
              {
                id: "message",
                name: "entry.634896786",
                required: true,
                rows: 4,
                placeholder: "具体的な内容をご記入ください",
                className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00796b] focus:border-transparent"
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full bg-[#00796b] text-white py-3 rounded-lg hover:bg-[#004d40] transition-colors disabled:opacity-50",
              children: isSubmitting ? /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsx(LoadingSpinner, {}),
                /* @__PURE__ */ jsx("span", { children: "送信中..." })
              ] }) : "送信する"
            }
          )
        ] })
      ] })
    ] })
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Air Of Fragrance\xAE \xD7 kyara workshop", "description": "Air Of Fragrance\u306F\u3001\u9999\u308A\u3092\u901A\u3058\u3066\u751F\u6D3B\u306B\u65B0\u3057\u3044\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002\u30AA\u30EA\u30B8\u30CA\u30EB\u9999\u308A\u30C7\u30B6\u30A4\u30F3\u958B\u767A\u3001\u7A7A\u9593\u6F14\u51FA\u3001\u8ABF\u9999\u6559\u5BA4\u306A\u3069\u3001\u9999\u308A\u306B\u95A2\u3059\u308B\u7DCF\u5408\u7684\u306A\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main> ${renderComponent($$result2, "About", About, {})} ${renderComponent($$result2, "Services", Services, {})} ${renderComponent($$result2, "SpecialContent", SpecialContent, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/project/src/components/SpecialContent", "client:component-export": "SpecialContent" })} ${renderComponent($$result2, "Works", Works, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/project/src/components/Works", "client:component-export": "Works" })} ${renderComponent($$result2, "ArtistGrid", ArtistGrid, {})} ${renderComponent($$result2, "Workflow", Workflow, {})} ${renderComponent($$result2, "Message", Message, {})} ${renderComponent($$result2, "Contact", Contact, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/home/project/src/components/Contact", "client:component-export": "Contact" })} </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/project/src/pages/index.astro", undefined);

const $$file = "/home/project/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
