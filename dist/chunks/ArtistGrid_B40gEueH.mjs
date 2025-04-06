import { jsxs, jsx } from 'react/jsx-runtime';

function ArtistCard({ id, name, image, description }) {
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: `/artists/${id}`,
      className: "bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform",
      children: [
        /* @__PURE__ */ jsx("div", { className: "relative h-[320px] flex items-center justify-center bg-gray-50", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            alt: name,
            className: "w-full h-full object-contain",
            loading: "lazy"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-[#00796b] mb-3", children: name }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm", children: description })
        ] })
      ]
    }
  );
}

const artists = [
  {
    id: 1,
    name: "山口 美帆",
    image: "https://kaori.aof-aroma.com/images/my_1.jpg",
    description: "自然をモチーフにした香りの創造に特化し、森林や海辺の空気感を表現することを得意とします。"
  },
  {
    id: 2,
    name: "川上 智子",
    image: "https://kaori.aof-aroma.com/images/b58ce1c419c22665ea32040c9738e9c4.jpg",
    description: "きゃら香房株式会社代表取締役、パフュームデザイナー。1983年より香りのデザインと創造に携わり、伝統と革新を融合させた独自の提案。香り演出から製品製作などを行う。環境庁「香り風景100選」検討委員。調香スクール運営"
  }
];
function ArtistGrid() {
  return /* @__PURE__ */ jsx("section", { id: "artists", className: "py-20 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl font-bold text-[#00796b] mb-12 text-center", children: "フレグランスアーティスト" }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto", children: artists.map((artist) => /* @__PURE__ */ jsx(ArtistCard, { ...artist }, artist.id)) })
  ] }) });
}

export { ArtistGrid as A };
