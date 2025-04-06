import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_BcyBI8tt.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || undefined,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : undefined,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/project/","adapterName":"","routes":[{"file":"file:///home/project/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/artists/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/artists","isIndex":true,"type":"page","pattern":"^\\/artists\\/?$","segments":[[{"content":"artists","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/artists/index.astro","pathname":"/artists","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/csr/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/csr","isIndex":false,"type":"page","pattern":"^\\/csr\\/?$","segments":[[{"content":"csr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/csr.astro","pathname":"/csr","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/satoyama-project/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/satoyama-project","isIndex":false,"type":"page","pattern":"^\\/satoyama-project\\/?$","segments":[[{"content":"satoyama-project","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/satoyama-project.astro","pathname":"/satoyama-project","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/school/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/school","isIndex":false,"type":"page","pattern":"^\\/school\\/?$","segments":[[{"content":"school","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/school.astro","pathname":"/school","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/team-muet/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/team-muet","isIndex":false,"type":"page","pattern":"^\\/team-muet\\/?$","segments":[[{"content":"team-muet","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team-muet.astro","pathname":"/team-muet","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///home/project/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://kaori.aof-aroma.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/project/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/artists/[id].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/artists/index.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/csr.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/satoyama-project.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/school.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/team-muet.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/artists/[id]@_@astro":"pages/artists/_id_.astro.mjs","\u0000@astro-page:src/pages/artists/index@_@astro":"pages/artists.astro.mjs","\u0000@astro-page:src/pages/csr@_@astro":"pages/csr.astro.mjs","\u0000@astro-page:src/pages/satoyama-project@_@astro":"pages/satoyama-project.astro.mjs","\u0000@astro-page:src/pages/school@_@astro":"pages/school.astro.mjs","\u0000@astro-page:src/pages/team-muet@_@astro":"pages/team-muet.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_Dyj0gdDx.mjs","/home/project/src/components/Header":"assets/Header.IjGD9_nn.js","/home/project/src/components/satoyama/ProjectGallery":"assets/ProjectGallery.rDzdnN6i.js","/home/project/src/components/SpecialContent":"assets/SpecialContent.Dajdt5RL.js","/home/project/src/components/Works":"assets/Works.BdbWyGsM.js","/home/project/src/components/Contact":"assets/Contact.BaGqogE0.js","@astrojs/react/client.js":"assets/client.Com7lows.js","/astro/hoisted.js?q=0":"assets/hoisted.CDoCsf2S.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///home/project/dist/404.html","/file:///home/project/dist/artists/index.html","/file:///home/project/dist/csr/index.html","/file:///home/project/dist/satoyama-project/index.html","/file:///home/project/dist/school/index.html","/file:///home/project/dist/team-muet/index.html","/file:///home/project/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"PVzQEXU4oygLpkyjjveATzXNdqh0gEuVGEboUl+zMMI=","experimentalEnvGetSecretEnabled":false});

export { manifest };
