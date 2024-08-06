import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './chunks/astro/server_DMaNzKIw.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$MyComponent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MyComponent;
  return renderTemplate`${maybeRenderHead()}<h1 class="text-3xl font-bold text-center text-blue-500">Hello from Astro component</h1>`;
}, "/Users/Melvin/Desktop/astro-in-express/src/components/MyComponent.astro", void 0);

export { $$MyComponent as MyComponent };
