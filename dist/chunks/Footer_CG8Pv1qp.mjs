import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { X, Menu, MapPin, Phone, Mail, Instagram, Twitter } from 'lucide-react';

function Header({ isDetailPage = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);
  if (!isMounted) {
    return null;
  }
  const isHomePage = typeof window !== "undefined" && window.location.pathname === "/";
  return /* @__PURE__ */ jsxs("header", { className: `relative ${isDetailPage ? "h-20 bg-white shadow-lg" : "min-h-screen"}`, children: [
    isHomePage && !isDetailPage && /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://kaori.aof-aroma.com/images/PS166428.webp",
          alt: "Hero background",
          width: 1920,
          height: 1080,
          className: "w-full h-full object-cover object-center",
          loading: "eager",
          fetchpriority: "high"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30 backdrop-blur-sm" })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isDetailPage || !isHomePage ? "bg-white shadow-lg" : "bg-transparent"}`, children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center h-20", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: `text-2xl font-semibold transition-colors ${isScrolled || isDetailPage || !isHomePage ? "text-[#00796b]" : "text-white"}`,
          children: "AOF"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsMenuOpen(!isMenuOpen),
          className: "lg:hidden z-[60]",
          "aria-label": "メニュー",
          children: isMenuOpen ? /* @__PURE__ */ jsx(X, { className: "w-6 h-6 text-white" }) : /* @__PURE__ */ jsx(Menu, { className: `w-6 h-6 ${isScrolled || isDetailPage || !isHomePage ? "text-[#00796b]" : "text-white"}` })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: `
              fixed lg:static inset-0 bg-[#00796b] lg:bg-transparent
              ${isMenuOpen ? "flex" : "hidden lg:flex"}
              items-center justify-center lg:justify-end
              transition-all duration-300 z-[55]
            `, children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col lg:flex-row gap-8 text-center lg:text-left", children: [
        { href: "/#about", text: "About" },
        { href: "/artists", text: "Artists" },
        { href: "/school", text: "School" },
        { href: "/csr", text: "CSR" },
        { href: "/#contact", text: "Contact" }
      ].map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          href: item.href,
          className: `
                        text-lg font-medium block py-2 transition-colors
                        ${isMenuOpen ? "text-white" : isScrolled || isDetailPage || !isHomePage ? "text-[#00796b] hover:text-[#004d40]" : "text-white hover:text-gray-200"}
                      `,
          onClick: () => setIsMenuOpen(false),
          children: item.text
        }
      ) }, item.href)) }) })
    ] }) }) }),
    isHomePage && !isDetailPage && /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-6 pt-32 min-h-screen flex flex-col justify-center items-center text-center text-white", children: [
      /* @__PURE__ */ jsxs("h1", { className: "text-6xl font-bold mb-6 animate-fade-in", children: [
        "Air Of Fragrance",
        /* @__PURE__ */ jsx("sup", { className: "text-2xl", children: "®" })
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-6xl font-bold mb-8 animate-fade-in-delay", children: "× kyara workshop" }),
      /* @__PURE__ */ jsxs("p", { className: "text-2xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2", children: [
        "Joy in Fragrance Begins",
        /* @__PURE__ */ jsx("br", {}),
        "かおりの楽しみはここからはじまる"
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-6 animate-fade-in-delay-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://aof-aroma.com",
            className: "bg-white text-[#00796b] px-8 py-3 rounded-full hover:bg-[#00796b] hover:text-white transition-colors flex items-center gap-2 justify-center",
            children: "ショップサイト"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#00796b] transition-colors text-center",
            children: "お問い合わせ"
          }
        )
      ] })
    ] })
  ] });
}

function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "bg-[#004d40] text-white py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "会社情報" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5 mt-1 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("p", { children: "有限会社桜ファーイースト" }),
              /* @__PURE__ */ jsx("p", { children: "〒192-0353" }),
              /* @__PURE__ */ jsx("p", { children: "東京都八王子市鹿島４－１－１０８" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "w-5 h-5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "tel:042-670-7077", className: "hover:text-[#80cbc4]", children: "042-670-7077" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 flex-shrink-0" }),
            /* @__PURE__ */ jsx("a", { href: "mailto:info@aof-aroma.com", className: "hover:text-[#80cbc4]", children: "info@aof-aroma.com" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "リンク" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/privacy", className: "hover:text-[#80cbc4]", children: "プライバシーポリシー" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/terms", className: "hover:text-[#80cbc4]", children: "利用規約" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/sitemap", className: "hover:text-[#80cbc4]", children: "サイトマップ" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "https://aof-aroma.com", className: "hover:text-[#80cbc4]", children: "ショップサイト" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "フォローする" }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsx("a", { href: "https://instagram.com", className: "hover:text-[#80cbc4] transition-colors", children: /* @__PURE__ */ jsx(Instagram, { className: "w-6 h-6" }) }),
          /* @__PURE__ */ jsx("a", { href: "https://twitter.com", className: "hover:text-[#80cbc4] transition-colors", children: /* @__PURE__ */ jsx(Twitter, { className: "w-6 h-6" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-12 pt-8 border-t border-[#80cbc4]/30 text-center", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Air Of Fragrance. All Rights Reserved."
    ] }) })
  ] }) });
}

export { Footer as F, Header as H };
