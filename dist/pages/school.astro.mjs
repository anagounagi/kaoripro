/* empty css                                */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Layout } from '../chunks/Layout_cjmqIkwe.mjs';
import { H as Header, F as Footer } from '../chunks/Footer_CG8Pv1qp.mjs';
import { MapPin, Users, GraduationCap, CreditCard, Clock, Phone, Mail } from 'lucide-react';
export { renderers } from '../renderers.mjs';

const $$School = createComponent(($$result, $$props, $$slots) => {
  const courses = [
    {
      title: "botanical fragrance\u30AF\u30E9\u30B9",
      description: "\u5929\u7136\u9999\u6599\u306E\u307F\u3092\u7528\u3044\u3066\u4F5C\u308B\u8ABF\u9999\u306E\u30AF\u30E9\u30B9",
      price: "298,000",
      sessions: "6"
    },
    {
      title: "\u9999\u6C34\u30D6\u30EC\u30F3\u30C9\u5165\u9580\u30B3\u30FC\u30B9",
      description: "\u521D\u5FC3\u8005\u5411\u3051\u306E\u9999\u6C34\u5236\u4F5C\u30B3\u30FC\u30B9\u3002",
      price: "45,000",
      sessions: "1"
    },
    {
      title: "\u9999\u6C34\u30C7\u30B6\u30A4\u30CA\u30FC\u8B1B\u5EA7",
      description: "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u306A\u6280\u8853\u3092\u5B66\u3076\u5C02\u9580\u8B1B\u5EA7\u3002\u9999\u6C34\u696D\u754C\u3067\u306E\u6D3B\u8E8D\u3092\u76EE\u6307\u305B\u307E\u3059\u3002",
      price: "450,000",
      sessions: "10"
    },
    {
      title: "\u9999\u308A\u306E\u30AF\u30EA\u30A8\u30FC\u30B7\u30E7\u30F3\u8B1B\u5EA7",
      description: "1\u65E5\u3067\u5B8C\u7D50\u3059\u308B\u96C6\u4E2D\u8B1B\u5EA7\u3002\u30AA\u30EA\u30B8\u30CA\u30EB\u9999\u6C34\u3092\u5236\u4F5C\u3059\u308B\u5B9F\u8DF5\u578B\u30AF\u30E9\u30B9\u3067\u3059\u3002",
      price: "19,000",
      sessions: "1\u65E5\uFF085\u6642\u9593\uFF09"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u685C\u30A2\u30ED\u30DE\u30C6\u30A3\u30FC\u30AF - \u9999\u308A\u306E\u30B9\u30AF\u30FC\u30EB | Air Of Fragrance", "description": "\u9999\u308A\u306B\u95A2\u3059\u308B\u77E5\u8B58\u3068\u6280\u8853\u3092\u5B66\u3076\u591A\u5F69\u306A\u30B3\u30FC\u30B9\u3092\u63D0\u4F9B\u3057\u3066\u3044\u307E\u3059\u3002\u521D\u5FC3\u8005\u304B\u3089\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB\u3092\u76EE\u6307\u3059\u65B9\u307E\u3067\u3001\u5E45\u5E83\u3044\u65B9\u306B\u3054\u5229\u7528\u3044\u305F\u3060\u3051\u307E\u3059\u3002" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", Header, { "isDetailPage": true, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/Header", "client:component-export": "Header" })} ${maybeRenderHead()}<main class="pt-32 pb-20"> <div class="container mx-auto px-6"> <div class="max-w-4xl mx-auto"> <h1 class="text-4xl font-bold text-[#00796b] mb-8 text-center">香りのスクールへようこそ</h1> <p class="text-xl text-gray-700 mb-12 text-center">
桜アロマティークは、香りに関する知識と技術を学ぶ多彩なコースを提供しています。初心者からプロフェッショナルを目指す方まで、幅広い方にご利用いただけます。
</p> <section class="bg-white rounded-xl shadow-lg p-8 mb-12"> <h2 class="text-2xl font-bold text-[#00796b] mb-6">スクールの特徴</h2> <div class="grid md:grid-cols-3 gap-6"> <div class="flex flex-col items-center text-center p-4"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "w-12 h-12 text-[#00796b] mb-4" })} <h3 class="font-semibold mb-2">アクセス良好</h3> <p class="text-gray-600">白金高輪駅から徒歩5分</p> </div> <div class="flex flex-col items-center text-center p-4"> ${renderComponent($$result2, "Users", Users, { "className": "w-12 h-12 text-[#00796b] mb-4" })} <h3 class="font-semibold mb-2">オンライン対応</h3> <p class="text-gray-600">どこからでも受講可能なオンラインクラスを多数ご用意</p> </div> <div class="flex flex-col items-center text-center p-4"> ${renderComponent($$result2, "GraduationCap", GraduationCap, { "className": "w-12 h-12 text-[#00796b] mb-4" })} <h3 class="font-semibold mb-2">無料相談</h3> <p class="text-gray-600">スクールの雰囲気を知るための見学や相談会（対面・オンライン対応）</p> </div> </div> </section> <section class="mb-12"> <h2 class="text-2xl font-bold text-[#00796b] mb-6">開講コース</h2> <div class="space-y-6"> ${courses.map((course) => renderTemplate`<div class="bg-white rounded-lg shadow-lg p-6"> <h3 class="text-xl font-semibold text-[#00796b] mb-3">${course.title}</h3> <p class="text-gray-600 mb-4">${course.description}</p> <div class="flex flex-wrap gap-4"> <div class="flex items-center gap-2"> ${renderComponent($$result2, "CreditCard", CreditCard, { "className": "w-5 h-5 text-[#00796b]" })} <span>受講料: ${course.price}円（税込）</span> </div> <div class="flex items-center gap-2"> ${renderComponent($$result2, "Clock", Clock, { "className": "w-5 h-5 text-[#00796b]" })} <span>回数: 全${course.sessions}</span> </div> </div> </div>`)} </div> </section> <section class="bg-white rounded-xl shadow-lg p-8"> <h2 class="text-2xl font-bold text-[#00796b] mb-6">お問い合わせ</h2> <div class="space-y-4"> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Phone", Phone, { "className": "w-5 h-5 text-[#00796b]" })} <span>電話: 042-670-7077</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "Mail", Mail, { "className": "w-5 h-5 text-[#00796b]" })} <span>メール: info@aof-aroma.com</span> </div> <div class="flex items-center gap-3"> ${renderComponent($$result2, "MapPin", MapPin, { "className": "w-5 h-5 text-[#00796b]" })} <span>開催場所：白金高輪</span> </div> </div> <div class="mt-8"> <a href="#contact" class="inline-block bg-[#00796b] text-white px-6 py-3 rounded-lg hover:bg-[#004d40] transition-colors">
無料見学・相談会のお申込みはこちら
</a> </div> </section> </div> </div> </main> ${renderComponent($$result2, "Footer", Footer, {})} ` })}`;
}, "/home/project/src/pages/school.astro", undefined);

const $$file = "/home/project/src/pages/school.astro";
const $$url = "/school";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$School,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
