import { renderers } from './renderers.mjs';
import { manifest as manifest$1 } from './manifest_Bqd9As4U.mjs';
import { onRequest } from './_noop-middleware.mjs';

//adapter/server-entrypoint.mjs
function createExports(manifest) {
  return { manifest };
}

const serverEntrypointModule = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  createExports
}, Symbol.toStringTag, { value: 'Module' }));

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/index.astro", _page1]
]);
const serverIslandMap = new Map();

const _manifest = Object.assign(manifest$1, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: onRequest
});
const _args = undefined;
const _exports = createExports(_manifest);
const manifest = _exports['manifest'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { manifest, pageMap };
