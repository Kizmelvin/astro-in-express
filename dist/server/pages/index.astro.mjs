import { c as createComponent, r as renderTemplate, d as renderHead } from '../chunks/astro/server_DMaNzKIw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head>${renderHead()}</head> <body>;</body></html>`;
}, "/Users/Melvin/Desktop/astro-in-express/src/pages/index.astro", void 0);

const $$file = "/Users/Melvin/Desktop/astro-in-express/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
