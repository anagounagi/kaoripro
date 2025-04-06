/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_cjmqIkwe.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CG8Pv1qp.mjs';
import { A as ArtistGrid } from '../chunks/ArtistGrid_B40gEueH.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u30D5\u30EC\u30B0\u30E9\u30F3\u30B9\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8 | Air Of Fragrance", "description": "Air Of Fragrance\u306E\u30D5\u30EC\u30B0\u30E9\u30F3\u30B9\u30A2\u30FC\u30C6\u30A3\u30B9\u30C8\u3092\u3054\u7D39\u4ECB\u3057\u307E\u3059\u3002\u9999\u308A\u306E\u5C02\u9580\u5BB6\u305F\u3061\u306B\u3088\u308B\u3001\u72EC\u5275\u7684\u306A\u9999\u308A\u306E\u4E16\u754C\u3092\u3054\u89A7\u304F\u3060\u3055\u3044\u3002" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "isDetailPage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> ${renderComponent($$result2, "ArtistGrid", ArtistGrid, {})} </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/project/src/pages/artists/index.astro", undefined);

const $$file = "/home/project/src/pages/artists/index.astro";
const $$url = "/artists";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
