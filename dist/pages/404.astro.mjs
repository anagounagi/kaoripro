/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_cjmqIkwe.mjs';
import { ArrowLeft } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404: \u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093 | Air Of Fragrance" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen flex items-center justify-center bg-gray-50"> <div class="text-center"> <h1 class="text-6xl font-bold text-[#00796b] mb-4">404</h1> <h2 class="text-2xl font-semibold text-gray-700 mb-8">ページが見つかりません</h2> <a href="/" class="inline-flex items-center gap-2 bg-[#00796b] text-white px-8 py-3 rounded-full hover:bg-[#004d40] transition-colors"> ${renderComponent($$result2, "ArrowLeft", ArrowLeft, { "className": "w-5 h-5" })}
トップページへ戻る
</a> </div> </div> ` })}`;
}, "/home/project/src/pages/404.astro", undefined);

const $$file = "/home/project/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
