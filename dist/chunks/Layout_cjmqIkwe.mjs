import { b as createAstro, c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, e as renderHead, f as renderSlot } from './astro/server_BcyBI8tt.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro("https://kaori.aof-aroma.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Air Of Fragrance\u306F\u3001\u9999\u308A\u3092\u901A\u3058\u3066\u751F\u6D3B\u306B\u65B0\u3057\u3044\u4FA1\u5024\u3092\u5275\u9020\u3059\u308B\u4F01\u696D\u3067\u3059\u3002"
  } = Astro2.props;
  return renderTemplate`<html lang="ja" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" type="image/x-icon" href="https://kaori.aof-aroma.com/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><!-- Google Tag Manager --><!-- End Google Tag Manager --><!-- 🌟 OGP（Open Graph Protocol）--><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:url" content="https://kaori.aof-aroma.com/"><meta property="og:image" content="https://kyara.aof-aroma.com/ogp.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><!-- 🐦 Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image" content="https://kyara.aof-aroma.com/ogp.jpg"><meta name="twitter:image:width" content="1200"><meta name="twitter:image:height" content="630"><!-- 🎨 Google Fonts の最適化 --><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap" media="print" onload="this.onload=null;this.removeAttribute('media');">${maybeRenderHead()}<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;500;700&display=swap"></noscript><!-- 🌟 CLS 防止（CSSでフォントを事前定義） --><!-- ★ ここに追加 --><link rel="preload" as="image" href="https://kaori.aof-aroma.com/images/PS166428.webp">${renderHead()}</head> <body data-astro-cid-sckkx6r4> <noscript> <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGF4WVB7" height="0" width="0" style="display:none;visibility:hidden" data-astro-cid-sckkx6r4></iframe> </noscript> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/home/project/src/layouts/Layout.astro", undefined);

export { $$Layout as $ };
